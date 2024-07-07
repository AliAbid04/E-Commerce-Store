import React, { useState } from 'react';
import Cart from './Cart';
import Checkout from './Checkout';
import ContactUs from './ContactUs';
import NavigationBar from './NavigationBar';

function ECommerce() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Earpods', price: 30, image: '/src/assets/earpods.jpg' },
    { id: 2, name: 'Head Phones', price: 70, image: '/src/assets/headphones.jpg' },
    { id: 3, name: 'Hoodie', price: 50, image: '/src/assets/hoodie1.jpg' },
    { id: 4, name: 'Hoodie', price: 55, image: '/src/assets/hoodie2.jpg' },
    { id: 5, name: 'Keyboard', price: 100, image: '/src/assets/keyboard.jpg' },
    { id: 6, name: 'Key Chain', price: 5, image: '/src/assets/keychain.jpg' },
    { id: 7, name: 'MicroPhone', price: 75, image: '/src/assets/mic.jpg' },
    { id: 8, name: 'Mouse', price: 30, image: '/src/assets/mouse.jpg' },
    { id: 9, name: 'Perfume', price: 150, image: '/src/assets/perfume.jpg' },
    { id: 10, name: 'Shoes', price: 120, image: '/src/assets/shoes.jpg' },
    { id: 11, name: 'T-Shirt', price: 25, image: '/src/assets/tshirt.jpg' },
    { id: 12, name: 'Watch', price: 200, image: '/src/assets/watch.jpg' },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(product => product.id === productToAdd.id);
      if (productExists) {
        return prevCart.map(product =>
          product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
    setConfirmationMessage(`${productToAdd.name} has been added to the cart.`);
    setTimeout(() => setConfirmationMessage(''), 10000); 
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(product => product.id === productId);
      if (productExists.quantity === 1) {
        return prevCart.filter(product => product.id !== productId);
      } else {
        return prevCart.map(product =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
    });
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const filterProducts = (searchTerm) => {
    if (!searchTerm) {
      setProducts([
        { id: 1, name: 'Earpods', price: 30, image: '/src/assets/earpods.jpg' },
        { id: 2, name: 'Head Phones', price: 70, image: '/src/assets/headphones.jpg' },
        { id: 3, name: 'Hoodie', price: 50, image: '/src/assets/hoodie1.jpg' },
        { id: 4, name: 'Hoodie', price: 55, image: '/src/assets/hoodie2.jpg' },
        { id: 5, name: 'Keyboard', price: 100, image: '/src/assets/keyboard.jpg' },
        { id: 6, name: 'Key Chain', price: 5, image: '/src/assets/keychain.jpg' },
        { id: 7, name: 'MicroPhone', price: 75, image: '/src/assets/mic.jpg' },
        { id: 8, name: 'Mouse', price: 30, image: '/src/assets/mouse.jpg' },
        { id: 9, name: 'Perfume', price: 150, image: '/src/assets/perfume.jpg' },
        { id: 10, name: 'Shoes', price: 120, image: '/src/assets/shoes.jpg' },
        { id: 11, name: 'T-Shirt', price: 25, image: '/src/assets/tshirt.jpg' },
        { id: 12, name: 'Watch', price: 200, image: '/src/assets/watch.jpg' },
      ]);
    } else {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setProducts(filteredProducts);
    }
  };

  const goToCart = () => {
    setShowCart(true);
    setShowCheckout(false);
    setShowContactUs(false);
  };

  const goToCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
    setShowContactUs(false);
  };

  return (
    <div className="ecommerce-container">
      <h1 className="title">The Awesome Store</h1>
      <NavigationBar
        setShowCart={setShowCart}
        setShowCheckout={setShowCheckout}
        setShowContactUs={setShowContactUs}
        filterProducts={filterProducts}
        currentPage={showCart ? 'cart' : showCheckout ? 'checkout' : showContactUs ? 'contactus' : 'products'}
      />
      <div className="content">
        {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
        {showCart ? (
          <Cart cart={cart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} goToCheckout={goToCheckout} />
        ) : showCheckout ? (
          <Checkout cart={cart} />
        ) : showContactUs ? (
          <ContactUs />
        ) : (
          <ProductList products={products} addToCart={addToCart} goToCart={goToCart} />
        )}
      </div>
      {showCart && (
        <div className="checkout-button">
          <button onClick={goToCheckout}>Go to Checkout</button>
        </div>
      )}
    </div>
  );
}

function ProductList({ products, addToCart, goToCart }) {
  return (
    <div id="products" className="section">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={goToCart}>Go to Cart</button>
    </div>
  );
}

export default ECommerce;
