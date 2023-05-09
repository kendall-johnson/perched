const Gig = require('../../models/gig')

module.exports = {
    index,
    newGig,
    editGig,
    deleteGig
}

async function index(req, res) {
    try {
      const gigs = await Gig.find();
      res.status(200).json(gigs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

async function newGig(req, res) {
    const newGig = new Gig({
        user: req.user._id, 
        title: req.body.title, 
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        tier: req.tier._id,
      });  
      newGig.save()
        .then(() => {
          res.status(201).json(newGig);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
}

async function editGig(req, res) {
    const id = req.params.id;
    const updatedGig = {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
    };
    Gig.findByIdAndUpdate(id, updatedGig, { new: true })
      .then(gig => res.json(gig))
      .catch(err => res.status(500).json({ message: err.message }));
}

async function deleteGig(req, res) {
    const id = req.params.id;
    Gig.findByIdAndRemove(id)
      .then(gig => {
        if (!gig) {
          return res.status(404).json({ message: "Gig not found" });
        }
        res.json({ message: "Gig successfully deleted" });
      })
      .catch(err => res.status(500).json({ message: err.message }));
}