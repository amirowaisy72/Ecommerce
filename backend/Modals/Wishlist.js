const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  amount: Number,
  status: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
