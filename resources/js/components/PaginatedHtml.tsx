import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface PaginatedHtmlProps {
    content: string;
    charLimit?: number;
}

const PaginatedHtml: React.FC<PaginatedHtmlProps> = ({ content, charLimit = 800 }) => {
    const [pages, setPages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (!content) {
            setPages([]);
            return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        // Get all nodes from body. Includes text nodes and element nodes.
        const nodes = Array.from(doc.body.childNodes);

        const newPages: string[] = [];
        let currentPageHtml = '';
        let currentCharCount = 0;

        nodes.forEach((node) => {
            // Use outerHTML for Elements, textContent for text nodes
            const nodeHtml = node.nodeType === Node.ELEMENT_NODE
                ? (node as Element).outerHTML
                : node.textContent || '';
            const nodeTextLength = node.textContent?.length || 0;

            // If adding this node exceeds the limit, ONLY split if we already have a decent amount of text
            // (e.g., at least 50% of the limit). This prevents creating a tiny page just because the NEXT
            // node is a massive block (like a large <ul> or a huge paragraph).
            if (currentCharCount + nodeTextLength > charLimit && currentCharCount >= charLimit * 0.5) {
                newPages.push(currentPageHtml);
                currentPageHtml = nodeHtml;
                currentCharCount = nodeTextLength;
            } else {
                currentPageHtml += nodeHtml;
                currentCharCount += nodeTextLength;
            }
        });

        if (currentPageHtml.trim() !== '') {
            newPages.push(currentPageHtml);
        }

        if (newPages.length === 0 && content.trim() !== '') {
            newPages.push(content);
        }

        setPages(newPages);
        setCurrentPage(0);
    }, [content, charLimit]);

    if (pages.length <= 1) {
        return (
            <div
                className="text-justify leading-loose [&>p]:mb-6 text-stone-700"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    return (
        <div className="flex flex-col relative w-full">
            <div className="min-h-[200px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-justify leading-loose [&>p]:mb-6 text-stone-700 w-full"
                        dangerouslySetInnerHTML={{ __html: pages[currentPage] }}
                    />
                </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-stone-200 gap-4">
                <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="btn btn-sm rounded-xl px-4 bg-[#ffedd5] text-[#1e3a8a] border-[#fde68a] hover:bg-[#fed7aa] hover:border-orange-300 disabled:opacity-50 disabled:bg-stone-100 disabled:text-stone-400 disabled:border-stone-200 w-full sm:w-auto"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Sebelumnya
                </button>

                <div className="flex items-center gap-2 overflow-x-auto max-w-full px-2">
                    {pages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${idx === currentPage ? 'w-8 bg-[#1e40af]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                                }`}
                            onClick={() => setCurrentPage(idx)}
                        />
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage(p => Math.min(pages.length - 1, p + 1))}
                    disabled={currentPage === pages.length - 1}
                    className="btn btn-sm rounded-xl px-4 bg-[#1e40af] text-white hover:bg-[#1e3a8a] border-none disabled:opacity-50 disabled:bg-stone-100 disabled:text-stone-400 w-full sm:w-auto"
                >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

export default PaginatedHtml;
