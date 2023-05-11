const express = require('express');
const router = express.Router();
const tiersCtrl = require('../../controllers/api/tiers');

// GET /api/tiers
router.get('/', tiersCtrl.index);

// GET /api/tiers/new
router.post('/new', tiersCtrl.newTier);

// POST /api/tiers/:id
router.put('/:id', tiersCtrl.editTier);

// DELETE /api/tiers/:id
router.delete('/:id', tiersCtrl.deleteTier);


module.exports = router;