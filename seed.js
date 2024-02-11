const Stripe = require("stripe");
const products = require("./products");

const stripe = Stripe(
  "sk_test_51OMEEOCgjUZAmhfhWp2Iwt0Tmr7CWcyt02LYV6DwC6ai4lX9Kpr6Xu6b3ffHeJckjmZezXCMVDiX9920L0xg4ghd00Esb4tEuA"
);

(async () => {
  for (const product of products) {
    const stripeProduct = await stripe.products.create({
      name: product.name,
      default_price_data: {
        currency: product.currency,
        unit_amount_decimal: product.price,
      },
      images: [product.image],
    });
    console.log(stripeProduct.name, ":", stripeProduct.id);
  }
})();
