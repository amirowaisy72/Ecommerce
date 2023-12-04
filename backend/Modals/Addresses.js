const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  type: String,
  details: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Address", addressSchema);
