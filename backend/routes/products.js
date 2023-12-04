const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "./ecommerce-406921-eece4f1c5e20.json",
  scopes: "https://www.googleapis.com/auth/drive.file",
});

const drive = google.drive({ version: "v3", auth });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./uploads"; // Create a directory named "uploads" in your project
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadToGDrive", upload.array("croppedImages"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadedFiles = req.files;

    const folderId = "1XneUYBF942gUNO9SoxU2IEszrCUdnGpk"; // Replace with the ID of your desired folder

    const uploadPromises = uploadedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const driveFileMetadata = {
          name: file.originalname,
          mimeType: file.mimetype,
          parents: [folderId], // Specify the ID of the folder where you want to upload the file
        };

        const driveFileMedia = {
          mimeType: file.mimetype,
          body: fs.createReadStream(file.path),
        };

        drive.files.create(
          {
            resource: driveFileMetadata,
            media: driveFileMedia,
            fields: "id",
          },
          (err, uploadedFile) => {
            if (err) {
              reject(err);
            } else {
              resolve(uploadedFile.data.id);
            }
          }
        );
      });
    });

    const fileIds = await Promise.all(uploadPromises);

    res.json({ success: true, fileIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
