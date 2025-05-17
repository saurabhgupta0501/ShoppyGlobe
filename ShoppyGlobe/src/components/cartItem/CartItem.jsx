import React from 'react'


const CartItem = ({ item, onQuantityChange, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="quantity-control">
                    <button
                        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
                        +
                    </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="remove-btn">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;