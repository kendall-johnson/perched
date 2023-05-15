const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/reviews
router.get('/:id', reviewsCtrl.index);
router.post('/new', ensureLoggedIn, reviewsCtrl.newReview);


module.exports = router;