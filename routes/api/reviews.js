const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

// GET /api/reviews
router.get('/:id', reviewsCtrl.index);

// GET /api/reviews/new
router.post('/new', reviewsCtrl.newReview);

// POST /api/reviews/:id
router.put('/:id', reviewsCtrl.editReview);

// DELETE /api/reviews/:id
router.delete('/:id', reviewsCtrl.deleteReview);


module.exports = router;