import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.slug}`} className="group block h-full">
            <div className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-1">
                <figure className="aspect-square relative overflow-hidden bg-base-200">
                    {product.cover_image ? (
                        <img
                            src={product.cover_image?.startsWith('images/') ? `/${product.cover_image}` : `/storage/${product.cover_image}`}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral/10 text-neutral-content/50">
                            <span>No Image</span>
                        </div>
                    )}

                    {/* Badge Overlay */}
                    <div className="absolute top-3 right-3 badge badge-primary font-semibold shadow-sm">
                        Budaya Madura
                    </div>
                </figure>

                <div className="card-body p-6">
                    <h3 className="card-title text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-sm text-base-content/70 line-clamp-3 flex-1">
                        {product.description || 'Pelajari warisan budaya ini lebih lanjut.'}
                    </p>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-ghost gap-2 group-hover:text-primary">
                            Baca Selengkapnya
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
