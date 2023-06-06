import { useState } from 'react';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post('http://localhost:3000/', {
          amount: 1000,
          id: '1'
        })
        if (response.data.success) {
          console.log("Success");
          setSuccess(true);
        }

      } catch (error) {
        console.log('There was an error: ', error);
      } 
    } else {
      console.log(error.message);
    };
  }

  return (
    <div>

    </div>
  )
};