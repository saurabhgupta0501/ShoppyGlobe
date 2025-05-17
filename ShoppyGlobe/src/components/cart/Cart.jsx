
import { removeItem, updateQuantity, clearCart } from '../../redux/cartSlice';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                    />
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button onClick={handleClearCart}>Clear Cart</button>
                <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;