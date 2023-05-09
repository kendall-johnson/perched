const Tier = require('../../models/tier')

module.exports = {
    index,
    newTier,
    editTier,
    deleteTier
}

async function index(req, res) {
    try {
      const tiers = await Tier.find();
      res.status(200).json(tiers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

async function newTier(req, res) {
    const newTier = new Tier({
        gig: req.gig._id, 
        level: req.body.level, 
        description: req.body.description,
        price: req.body.price,
        delivery: req.body.delivery,
        revision: req.body.revision,
      });  
      newTier.save()
        .then(() => {
          res.status(201).json(newTier);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
}

async function editTier(req, res) {
    const id = req.params.id;
    const updatedTier = {
        level: req.body.level, 
        description: req.body.description,
        price: req.body.price,
        delivery: req.body.delivery,
        revision: req.body.revision,
    };
    Tier.findByIdAndUpdate(id, updatedTier, { new: true })
      .then(tier => res.json(tier))
      .catch(err => res.status(500).json({ message: err.message }));
}

async function deleteTier(req, res) {
    const id = req.params.id;
    Tier.findByIdAndRemove(id)
      .then(tier => {
        if (!tier) {
          return res.status(404).json({ message: "Tier not found" });
        }
        res.json({ message: "Tier successfully deleted" });
      })
      .catch(err => res.status(500).json({ message: err.message }));
}