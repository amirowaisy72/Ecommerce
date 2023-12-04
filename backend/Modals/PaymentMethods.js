const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentMethodSchema = new Schema({
  type: String, // Visa, Mastercard, etc.
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);
