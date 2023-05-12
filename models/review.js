const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gig: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gig",
    required: true
  }  
}, {
    timestamps: true,
});

module.exports = mongoose.model("Review", ReviewSchema);