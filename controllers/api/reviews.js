const Review = require('../../models/review')

module.exports = {
    index,
    newReview,
    editReview,
    deleteReview
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
        rating: req.body.rating, 
        description: req.body.description,
      });  
      newReview.save()
        .then(() => {
          res.status(201).json(newReview);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
}

async function editReview(req, res) {
    const id = req.params.id;
    const updatedReview = {
        rating: req.body.rating, 
        description: req.body.description,
    };
    Review.findByIdAndUpdate(id, updatedReview, { new: true })
      .then(review => res.json(review))
      .catch(err => res.status(500).json({ message: err.message }));
}

async function deleteReview(req, res) {
    const id = req.params.id;
    Review.findByIdAndRemove(id)
      .then(review => {
        if (!review) {
          return res.status(404).json({ message: "Review not found" });
        }
        res.json({ message: "Review successfully deleted" });
      })
      .catch(err => res.status(500).json({ message: err.message }));
}