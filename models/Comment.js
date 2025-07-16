const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  postId: { type: Number, ref: 'Post' },  
  commenterName: String,
  content: String
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
