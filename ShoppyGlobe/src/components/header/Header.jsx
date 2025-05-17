import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            <nav>
                <Link to="/" className="logo">ShoppyGlobe</Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cart">
                        Cart ({cartItemCount})
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;