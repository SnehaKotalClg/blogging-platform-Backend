const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment'); 

// POST comment to a post
router.post('/:postId', async (req, res) => {
  const postId = Number(req.params.postId);
  if (isNaN(postId)) return res.status(400).json({ error: 'Invalid post ID' });

  try {
    const comment = await Comment.create({
      postId,
      commenterName: req.body.commenterName,
      content: req.body.content
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET comments for a post
router.get('/:postId', async (req, res) => {
  const postId = Number(req.params.postId);
  if (isNaN(postId)) return res.status(400).json({ error: 'Invalid post ID' });

  try {
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
