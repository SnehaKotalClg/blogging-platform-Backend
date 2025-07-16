const router = require('express').Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const verifyToken = require('../middleware/authMiddleware');

//Create Post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



//Get ALL Posts with full data
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/summary/all', async (req, res) => {
  try {
    const posts = await Post.find({}, 'title author') 
      .populate('author', 'username'); 
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//single Post
router.get('/:id', async (req, res) => {
  const postId = Number(req.params.id);
  if (isNaN(postId)) return res.status(400).json({ error: 'Invalid post ID' });

  try {
    const post = await Post.findById(postId).populate('author', 'username');
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const comments = await Comment.find({ postId });

    res.json({ ...post.toObject(), comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Update Post 
router.put('/:id', async (req, res) => {
  const postId = Number(req.params.id);
  if (isNaN(postId)) return res.status(400).json({ error: 'Invalid post ID' });

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author || post.author;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Delete Post
router.delete('/:id', async (req, res) => {
  const postId = Number(req.params.id);
  if (isNaN(postId)) return res.status(400).json({ error: 'Invalid post ID' });

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await post.deleteOne();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
