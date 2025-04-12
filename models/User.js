const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: String, // This will store the image path like "/uploads/image.jpg"
    default: ''
  }
});

module.exports = mongoose.model('User', userSchema);
