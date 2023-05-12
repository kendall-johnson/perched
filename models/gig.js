const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { S3 } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');

// Configure the AWS SDK with your access key and secret key
const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Create a Multer middleware function that uses MulterS3 to upload files to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const key = uuidv4() + '.' + file.originalname.split('.').pop();
      cb(null, key);
    }
  })
});

const gigSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 300,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  photo: [{
    url: String,
    key: String
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  tier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tier"
  }
}, {
  timestamps: true
});

// Add a virtual property to the schema that generates a URL for the photo based on the S3 key
gigSchema.virtual('photoUrls').get(function() {
  return this.photo.map(photo => `https://${photo.bucket}.s3.${s3.config.region}.amazonaws.com/${photo.key}`);
});

// Add a pre-save hook to the schema that uploads the photo to S3 and updates the photo field
gigSchema.pre('save', function(next) {
  if (!this.isModified('photo')) {
    return next();
  }
  
  const gig = this;

  // Use the Multer middleware to upload the files to S3
  upload.array('photo', 10)(req, res, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    // Update the photo field with the S3 URLs and keys for each file
    gig.photo = req.files.map((file) => ({
      url: file.location,
      key: file.key
    }));
      
    next();
  });
});

module.exports = mongoose.model("Gig", gigSchema);
