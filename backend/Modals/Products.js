const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    images: [String],
    description: String,
    inStock: Boolean,
    productCode: String,
    productSKU: String,
    status: { type: String, enum: ['active', 'disabled'], default: 'active' },
    productPrice: {
      regularPrice: Number,
      sellerPrice: Number,
    },
    metaData: {
      title: String,
      description: String,
    },
  });
  
  // Indexing for frequently queried fields
  productSchema.index({ title: 'text' });
  
  module.exports = mongoose.model('Product', productSchema);
  