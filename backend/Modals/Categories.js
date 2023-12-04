const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    icon: String,
    name: String,
    slug: String,
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    date: { type: Date, default: Date.now },
    description: String,
    active: { type: Boolean, default: true },
    metaData: {
      title: String,
      description: String,
    },
  });
  
  // Indexing for frequently queried fields
  categorySchema.index({ name: 'text' });
  
  module.exports = mongoose.model('Category', categorySchema);
  