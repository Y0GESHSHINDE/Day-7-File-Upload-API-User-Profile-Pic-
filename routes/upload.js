const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadProfilePic } = require('../controllers/uploadController');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save to uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

// File type filter (only images)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpg, .jpeg, .png files are allowed'), false);
  }
};

// Initialize multer
const upload = multer({ storage, fileFilter });

// Upload route
router.post('/:username', upload.single('profilePic'), uploadProfilePic);

module.exports = router;
