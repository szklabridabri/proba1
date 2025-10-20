const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const POSTS_FILE = path.join(__dirname, '../data/posts.json');

// Initialize posts file if it doesn't exist
async function initializePostsFile() {
    try {
        await fs.access(POSTS_FILE);
    } catch {
        await fs.writeFile(POSTS_FILE, JSON.stringify([]));
    }
}

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await fs.readFile(POSTS_FILE, 'utf8');
        res.json(JSON.parse(posts));
    } catch (error) {
        res.status(500).json({ error: 'Error reading posts' });
    }
});

// Create new post
router.post('/', async (req, res) => {
    try {
        const posts = JSON.parse(await fs.readFile(POSTS_FILE, 'utf8'));
        const newPost = {
            id: Date.now(),
            ...req.body,
            likes: 0,
            comments: [],
            createdAt: new Date().toISOString()
        };
        posts.push(newPost);
        await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
});

// Initialize posts file on module load
initializePostsFile();

module.exports = router;