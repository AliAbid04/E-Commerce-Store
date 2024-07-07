import React from 'react';

function Cart({ cart, removeFromCart, removeAllFromCart, goToCheckout }) {
  return (
    <div className="section">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="quantity">Quantity: {product.quantity}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-actions">
        <button onClick={removeAllFromCart}>Remove All</button>
        
      </div>
    </div>
  );
}

export default Cart;
