const path = require('path');
const User = require('../models/User');

// Upload handler
const uploadProfilePic = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = '/uploads/' + req.file.filename;

    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { profilePic: imagePath },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Profile picture uploaded successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadProfilePic };
