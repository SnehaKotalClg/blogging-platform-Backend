const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  content: String,
  author: { type: String, required: true } 
}, { timestamps: true, _id: false });

postSchema.plugin(AutoIncrement, { id: 'post_seq', inc_field: '_id' });

module.exports = mongoose.model('Post', postSchema);
