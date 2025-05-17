import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';


const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        }));
    };

    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.rating} ★</p>
            </Link>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;