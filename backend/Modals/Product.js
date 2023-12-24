const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  Title: { type: String, required: true },
  Category: {
    parent: { type: String, required: true },
    child: { type: String, required: true },
  },
  Type: { type: String, required: true },
  AffiliatedLink: { type: String, required: true },
  Keywords: { type: [String], required: true },
  ProductImages: { type: [String], required: true },
  ProductDescription: { type: String, required: true },
  InStock: { type: Boolean, default: true },
  ProductCode: {
    productCode: { type: String, required: true },
    productSKU: { type: String, required: true },
    status: { type: String, enum: ["Active", "Disabled"], default: "Active" },
  },
  ProductPrice: {
    regularPrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
  },
  MetaData: {
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
  },
});

// Indexing for frequently queried fields
productSchema.index({ title: "text" });

module.exports = mongoose.model("Product", productSchema);
