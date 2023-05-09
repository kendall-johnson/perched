const Skill = require('../../models/skill')

module.exports = {
    index,
    newSkill,
    editSkill,
    deleteSkill
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

async function editSkill(req, res) {
    const id = req.params.id;
    const updatedSkill = {
        skill: req.body.skill
    };
    Gig.findByIdAndUpdate(id, updatedSkill, { new: true })
      .then(gig => res.json(gig))
      .catch(err => res.status(500).json({ message: err.message }));
}

async function deleteSkill(req, res) {
    const id = req.params.id;
    Skill.findByIdAndRemove(id)
      .then(gig => {
        if (!gig) {
          return res.status(404).json({ message: "Skill not found" });
        }
        res.json({ message: "Skill successfully deleted" });
      })
      .catch(err => res.status(500).json({ message: err.message }));
}