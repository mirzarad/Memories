import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';


const router = express.Router();


// Not reached by localhost:5000/
// Reached by going to: localhost:5000/posts
// second parameter is a callback function when the user accesses this route
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;