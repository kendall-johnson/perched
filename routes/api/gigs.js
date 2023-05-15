const express = require('express');
const router = express.Router();
const gigsCtrl = require('../../controllers/api/gigs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/', gigsCtrl.index);
router.get('/:id', gigsCtrl.getGig)

router.post('/new', ensureLoggedIn, gigsCtrl.newGig);
router.put('/:id', ensureLoggedIn, gigsCtrl.editGig);

router.delete('/:id', ensureLoggedIn, gigsCtrl.deleteGig);


module.exports = router;