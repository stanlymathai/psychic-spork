const multer = require("multer");
const fs = require("fs");
const path = require("path");

const USER_FILE_PATH = "uploads/user/";

const getFileType = (file) => {
  const mimeType = file.mimetype.split("/");
  return mimeType[mimeType.length - 1];
};

const generateFileName = (req, file, cb) => {
  const extension = getFileType(file);

  const filename =
    Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + extension;
  cb(null, file.fieldname + "-" + filename);
};

// Configure multer storage and file name
const storage = multer.diskStorage({
  destination: USER_FILE_PATH,
  filename: generateFileName,
});

// Create multer upload instance
const upload = multer({ storage: storage });

module.exports.collectivesImage = (req, res, next) => {
  // Use multer upload instance
  upload.fields([
    { name: "profileImages", maxCount: 1 }, // Field name 'profileImages', allow up to 1 files
    { name: "bannerImages", maxCount: 1 }, // Field name 'bannerImages', allow up to 1 files
  ])(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    // Retrieve uploaded files
    let profileImages = [];
    let bannerImages = [];
    const errors = [];
    if (req.files == undefined) {
      req.files = ["bannerImages", "profileImages"];
    }
    if (
      req.files["profileImages"] != undefined &&
      req.files["profileImages"] != null
    ) {
      profileImages = req.files["profileImages"];

      // Validate file types and sizes
      profileImages.forEach((file) => {
        const allowedTypes = ["image/jpeg", "image/png"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.mimetype)) {
          errors.push(`Invalid file type: ${file.originalname}`);
        }

        if (file.size > maxSize) {
          errors.push(`File too large: ${file.originalname}`);
        }
      });

      // Handle validation errors
      if (errors.length > 0) {
        // Remove uploaded files
        profileImages.forEach((file) => {
          fs.unlinkSync(file.path);
        });

        return res.status(400).json({ errors });
      }
      req.files["profileImages"] = profileImages;
    } else {
      req.files["profileImages"] = [];
    }

    // validate for bannerImages

    if (
      req.files["bannerImages"] != undefined &&
      req.files["bannerImages"] != null
    ) {
      // Retrieve uploaded files
      bannerImages = req.files["bannerImages"];

      // Validate file types and sizes
      bannerImages.forEach((file) => {
        const allowedTypes = ["image/jpeg", "image/png"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.mimetype)) {
          errors.push(`Invalid file type: ${file.originalname}`);
        }

        if (file.size > maxSize) {
          errors.push(`File too large: ${file.originalname}`);
        }
      });

      // Handle validation errors
      if (errors.length > 0) {
        // Remove uploaded files
        videos.forEach((file) => {
          fs.unlinkSync(file.path);
        });

        return res.status(400).json({ errors });
      }
      req.files["bannerImages"] = bannerImages;
    } else {
      req.files["bannerImages"] = [];
    }
    next();
  });
};
