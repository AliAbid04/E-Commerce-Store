import React, { useState } from 'react';

function Checkout({ cart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTaxes = (total) => {
    const taxRate = 0.1; // 10% tax
    return total * taxRate;
  };

  const applyPromoCode = () => {
    
    if (promoCode === 'SAVE10') {
      setDiscount(0.1); // 10% discount
    }
    else if(promoCode === 'AWESOME'){
      setDiscount(0.5);
    }
     else {
      alert('Invalid promo code');
    }
  };
  const handleCheckout = () => {
    
    alert('Your items are on the way. Thank you for shopping with us!');

   
  };

  const total = calculateTotal();
  const taxes = calculateTaxes(total);
  const discountedTotal = total * (1 - discount);
  const grandTotal = discountedTotal + taxes;

  return (
    <div id="checkout" className="section">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Subtotal: ${total.toFixed(2)}</p>
        {discount > 0 && <p>Discount: -${(total * discount).toFixed(2)}</p>}
        <p>Taxes: ${taxes.toFixed(2)}</p>
        <h3>Total: ${grandTotal.toFixed(2)}</h3>
      </div>

      <div className="promo-code">
        <h3>Promo Code</h3>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter promo code"
        />
        <button onClick={applyPromoCode}>Apply</button>
      </div>

      <div className="payment-method">
        <h3>Payment Method</h3>
        <div>
          <input
            type="radio"
            id="cod"
            name="payment"
            value="cod"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
        <div>
          <input
            type="radio"
            id="card"
            name="payment"
            value="card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="card">Credit/Debit Card</label>
          <br></br>
          <br></br>
          <button onClick={handleCheckout}>Cash Out</button>
          <br></br>
          <br></br>
          <h1>Thank you for shopping with us</h1>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
