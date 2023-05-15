const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skill: {
    type: [String],
    required: true,
  },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Skill", SkillSchema);