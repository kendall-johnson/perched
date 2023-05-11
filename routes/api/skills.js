const express = require('express');
const router = express.Router();
const skillsCtrl = require('../../controllers/api/skills');

// GET /api/skills
router.get('/', skillsCtrl.index);

// GET /api/skills/new
router.post('/new', skillsCtrl.newSkill);

// POST /api/skills/:id
router.put('/:id', skillsCtrl.editSkill);

// DELETE /api/skills/:id
router.delete('/:id', skillsCtrl.deleteSkill);


module.exports = router;