const VideoEmbed = ({ url, title }) => {
    if (!url) return null;

    // Simple parser for YouTube URLs
    const getEmbedUrl = (url) => {
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    };

    return (
        <div className="rounded-xl overflow-hidden shadow-sm border border-border bg-black aspect-video relative">
            <iframe
                src={getEmbedUrl(url)}
                title={title || 'Video Pembelajaran'}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
