
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const { product, loading, error } = useProducts(id);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        }));
    };

    if (loading) return <div className="loading">Loading product details...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail">
            <div className="product-images">
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-gallery">
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <p className="price">${product.price}</p>
                <p className="rating">{product.rating} ★</p>
                <p className="description">{product.description}</p>
                <p className="stock">In stock: {product.stock}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;