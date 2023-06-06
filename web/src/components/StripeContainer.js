import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MilMTB7m5Agj7M4QVdcEmAwLcW8vLpS6HeU54QXyUK6WiOLNRTHqzFt6kvIl47JFW1h2qMpQS16HVl5gDncu6Z800Haj5nypi"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}