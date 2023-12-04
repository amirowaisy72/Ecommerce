const mongoose = require("mongoose");
const { Schema } = mongoose;

const storeSchema = new Schema({
  name: String,
  photo: String,
  productType: String, // Which category of products they are selling
  // Other necessary details about the store and supplier
});

// Indexing for frequently queried fields
storeSchema.index({ name: "text" });

module.exports = mongoose.model("Store", storeSchema);
