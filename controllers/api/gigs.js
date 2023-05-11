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
  // Use the Multer middleware to upload the photo(s) to S3
  upload.array('photo', 10)(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }

    // Create a new Gig object with the data from the request
    const newGig = new Gig({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      tier: req.tier._id,
    });

    // Add the S3 URLs and keys for the uploaded photos to the newGig object
    newGig.photo = req.files.map((file) => ({
      url: file.location,
      key: file.key,
    }));

    try {
      // Save the new Gig object to the database
      const savedGig = await newGig.save();

      // Send a response with the saved Gig object
      res.status(201).json(savedGig);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

async function editGig(req, res) {
  const id = req.params.id;
  const updatedGig = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };

  // If there are photos in the request, update the photo field
  if (req.files) {
    const photos = req.files.map((file) => ({
      url: file.location,
      key: file.key,
    }));
    updatedGig.photo = photos;
  }

  // Find the gig by ID and update it
  Gig.findByIdAndUpdate(id, updatedGig, { new: true })
    .then((gig) => res.json(gig))
    .catch((err) => res.status(500).json({ message: err.message }));
}

async function deleteGig(req, res) {
  const id = req.params.id;

  // Find the gig by ID and delete it
  Gig.findByIdAndRemove(id)
    .then((gig) => {
      if (!gig) {
        return res.status(404).json({ message: "Gig not found" });
      }

      // If the gig had photos, delete them from S3
      if (gig.photo && gig.photo.length > 0) {
        const keys = gig.photo.map((photo) => photo.key);
        s3.deleteObjects({
          Bucket: process.env.S3_BUCKET,
          Delete: {
            Objects: keys.map((key) => ({ Key: key })),
          },
        })
          .promise()
          .catch((err) => console.log(err));
      }

      res.json({ message: "Gig successfully deleted" });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}
