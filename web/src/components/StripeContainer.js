import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

export default function StripeContainer() {

  const STRIPE_PUBLIC_KEY = 'pk_test_51MilMTB7m5Agj7M4QVdcEmAwLcW8vLpS6HeU54QXyUK6WiOLNRTHqzFt6kvIl47JFW1h2qMpQS16HVl5gDncu6Z800Haj5nypi';

  const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY)

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
};