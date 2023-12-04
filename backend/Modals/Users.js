const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    paymentMethods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentMethod' }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
  });
  
  // Indexing for frequently queried fields
  userSchema.index({ email: 1 }, { unique: true });
  
 module.exports = mongoose.model('User', userSchema);
  