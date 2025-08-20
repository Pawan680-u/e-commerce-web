// models/productModel.js
const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

const productSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // who created the product
  name: { type: String, required: true },
  image: { type: String },
  brand: { type: String },
  category: { type: String },
  description: { type: String },
  reviews: [reviewSchema],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  price: { type: Number, required: true, default: 0 },
  countInStock: { type: Number, required: true, default: 0 },
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
