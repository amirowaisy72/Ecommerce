const mongoose = require("mongoose");
const { Schema } = mongoose;

const notificationSchema = new Schema({
  type: String, // Email notifications, order updates, website notification
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Notification", notificationSchema);
