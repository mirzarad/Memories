import express from 'express';

const router = express.Router();

// Not reached by localhost:5000/
// Reached by going to: localhost:5000/posts
// second parameter is a callback function when the user accesses this route
router.get('/', (req,res) => {
  res.send('THIS WORKS!')
});

export default router;