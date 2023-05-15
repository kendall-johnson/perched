const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  checkToken,
  login,
  updateUserSkills
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function checkToken(req, res) {
  res.json(req.exp);
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

async function passwordCompare(password, hash) {
  match = await bcrypt.compare(password, hash);
  return match;
}

async function login(req, res) {
  try {
          // Finds user in database:
          const user = await User.findOne({ email: req.body.email});
          // If user exists and password matches:
          if (user && passwordCompare(req.body.password, user.password)) {
              // Token that contains encoded User data:
              const token = createJWT(user);
              // Parses token to JSON:
              res.json(token);
          } else {
              // No actual error on the backend.
              // Returns 'Bad Credentials' to front end:
              res.status(400).json('Bad Credentials');
          }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateUserSkills(req, res) {
  const { skillId } = req.body;
  const userId = req.user._id;

  try {
    // Find the user by their ID
    const user = await User.findById(userId);

    // Add the skill to the user's skills array
    user.skills.push(skillId);

    // Save the changes to the user document
    await user.save();

    res.status(200).json({ message: 'User skills updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}