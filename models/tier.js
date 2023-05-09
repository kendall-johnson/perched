const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TierSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  delivery: {
    type: String,
    required: true
  },
  revision: {
    type: Number,
    default: 1,
    required: true
  },
  gig: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gig",
    required: true,
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Tier", TierSchema);