import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../lib/stripe';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;