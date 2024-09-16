const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect("mongodb://Ruchi:Ruchi15@blog-app-shard-00-00.3tgf0.mongodb.net:27017,blog-app-shard-00-01.3tgf0.mongodb.net:27017,blog-app-shard-00-02.3tgf0.mongodb.net:27017/?ssl=true&replicaSet=atlas-t2dde6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app", {
    // Removed deprecated options
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
});

const Post = mongoose.model('Post', postSchema);

app.use(bodyParser.json());
app.use(cors());

// Create a new post
app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Read all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post
app.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
