const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    orderID: String,
    date: { type: Date, default: Date.now },
    items: Number,
    status: String,
    amount: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });
  
  // Indexing for frequently queried fields
  orderSchema.index({ orderID: 1, date: -1 });
  
  module.exports = mongoose.model('Order', orderSchema);
  