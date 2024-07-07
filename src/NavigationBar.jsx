import React from 'react';

function NavigationBar({ setShowCart, setShowCheckout, setShowContactUs, filterProducts, currentPage }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterProducts(searchTerm);
  };

  return (
    <nav className="navigation">
      <ul>
        <li className={currentPage === 'products' ? 'active' : ''}>
          <a href="#products" onClick={() => { setShowCart(false); setShowCheckout(false); setShowContactUs(false); }}>Products</a>
        </li>
        <li className={currentPage === 'cart' ? 'active' : ''}>
          <a href="#cart" onClick={() => { setShowCart(true); setShowCheckout(false); setShowContactUs(false); }}>Cart</a>
        </li>
        <li className={currentPage === 'checkout' ? 'active' : ''}>
          <a href="#checkout" onClick={() => { setShowCart(false); setShowCheckout(true); setShowContactUs(false); }}>Check Out</a>
        </li>
        <li className={currentPage === 'contactus' ? 'active' : ''}>
          <a href="#contactus" onClick={() => { setShowCart(false); setShowCheckout(false); setShowContactUs(true); }}>Contact Us</a>
        </li>
        <li>
          <input type="text" className='searchbar' placeholder="Search..." onChange={handleSearch} />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
