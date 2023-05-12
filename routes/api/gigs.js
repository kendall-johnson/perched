const express = require('express');
const router = express.Router();
const gigsCtrl = require('../../controllers/api/gigs');

// GET /api/gigs
router.get('/', gigsCtrl.index);

router.get('/:id', gigsCtrl.getGig)

// GET /api/gigs/new
router.post('/new', gigsCtrl.newGig);

// POST /api/gigs/:id
router.put('/:id', gigsCtrl.editGig);

// DELETE /api/gigs/:id
router.delete('/:id', gigsCtrl.deleteGig);


module.exports = router;