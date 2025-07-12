// import express
const express = require('express');

// create express app router function
const router = express.Router();

// import posts list
const posts = require('../data/postsList');

// import controllers
const postController = require('../controllers/postController');

// Create CRUD routes

// Read - Index
router.get('/', postController.index);

// Read - Show
router.get('/:id/', postController.show);

// Post - Store
router.post('/', postController.store);

// Delete - Destroy
router.delete('/:id/', postController.destroy);

module.exports = router;