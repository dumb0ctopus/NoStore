import { Toaster } from "react-hot-toast";
import Layout from "src/components/Layout";
import "src/styles/globals.css";
import { CartProvider } from "use-shopping-cart";

// Remember to add your public Stripe key
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      stripe={stripeKey}
      cartMode={"checkout-session"}
      currency={"USD"}
    >
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </CartProvider>
  );
}
