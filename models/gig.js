const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gigSchema = new Schema({
  title: {type: String, required: true},
  description: {
    type: String,
    maxlength: 300,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tier",
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Gig', gigSchema);