const mongoose = require('mongoose');
const { Schema } = require('mongoose');

module.exports = mongoose.model('Todo', new Schema({
  text: { type: String },
  complete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}));
