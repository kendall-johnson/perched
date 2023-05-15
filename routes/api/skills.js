const express = require('express');
const router = express.Router();
const skillsCtrl = require('../../controllers/api/skills');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.index);
router.post('/new', ensureLoggedIn, skillsCtrl.newSkill);

module.exports = router;