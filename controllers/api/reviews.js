const Review = require('../../models/review')

module.exports = {
    index,
    newReview,
}

async function index(req, res) {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

async function newReview(req, res) {
    const newReview = new Review({
        user: req.user._id, 
        title: req.body.title, 
        description: req.body.description,
        gig: req.body.gig
      });  
      newReview.save()
        .then(() => {
          res.status(201).json(newReview);
        })
        .catch((error) => {
          res.status(503).json({ error: error.message });
        });
}