const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ0ebL0yWZumrU1fQdi04I1veNpnxrewW3ER2eXjY9SEtOmy6TDWVMaNZEj7DpcMOKkk9Vt7GdBMusu6OUUJXTo00mN3XgSQi"
);

// Setup API firebase deploy --only functions

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recived BBOM!! >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen commands
exports.api = functions.https.onRequest(app);
