const Skill = require('../../models/skill')

module.exports = {
    index,
    newSkill,
}

async function index(req, res) {
    try {
      const skills = await Skill.find();
      res.status(200).json(skills);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

async function newSkill(req, res) {
    const newSkill = new Skill({
        user: req.user._id, 
        skill: req.body.skill
      });  
      newSkill.save()
        .then(() => {
          res.status(201).json(newSkill);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
}
