const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { google } = require("googleapis");
const Product = require("../Modals/Product");

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

router.post("/createProduct", async (req, res) => {
  try {
    const {
      Title,
      Category,
      Type,
      AffiliatedLink,
      Keywords,
      ProductImages, // Expecting an empty array here for now
      ProductDescription,
      InStock,
      ProductCode,
      ProductPrice,
      MetaData,
    } = req.body;

    // Create a new product using the Product model
    const newProduct = new Product({
      Title,
      Category,
      Type,
      AffiliatedLink,
      Keywords,
      ProductImages: [], // Set ProductImages to an empty array for now
      ProductDescription,
      InStock,
      ProductCode,
      ProductPrice,
      MetaData,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    // Continue with other data processing...

    // Generate an upload ID (you can use any unique identifier)
    const uploadId = savedProduct._id; // Using MongoDB ObjectId as an example

    // Send the product data along with the upload ID in the response
    res.status(201).json({ success: true, product: savedProduct, uploadId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//Fetch all products
router.get("/getProducts", async (req, res) => {
  try {
    // Fetch all products from the Product model
    const products = await Product.find();

    // Send a successful response with products
    res.json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching products:", error);

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

//Upload files on google drive
router.post(
  "/uploadToGDrive",
  upload.array("croppedImages"),
  async (req, res) => {
    try {
      const folderId = req.query.folderId;
      const modal = req.query.modal;
      const uploadId = req.query.uploadId;

      if (!folderId || !modal || !uploadId) {
        return res
          .status(400)
          .json({ success: false, error: "Missing required parameters." });
      }

      if (!req.files || req.files.length === 0) {
        return res
          .status(400)
          .json({ success: false, error: "No files were uploaded." });
      }
      const uploadedFiles = req.files;

      const uploadPromises = uploadedFiles.map((file, index) => {
        return new Promise((resolve, reject) => {
          // 1. Rename each image before uploading
          const renamedFileName = `${modal}${uploadId}_${index}.${file.originalname
            .split(".")
            .pop()}`;

          const driveFileMetadata = {
            name: renamedFileName,
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

      // 2. Prepare the array of names of uploaded images
      const uploadedImageNames = uploadedFiles.map(
        (file, index) =>
          `${modal}${uploadId}_${index}.${file.originalname.split(".").pop()}`
      );

      // Now, update the ProductImages field in the Product modal with the array containing the images names
      // Assuming you have a Product model and you want to update the document with the given uploadId
      // Assuming uploadId is the document's _id
      const updateResult = await Product.findByIdAndUpdate(
        uploadId,
        { $set: { ProductImages: uploadedImageNames } },
        { new: true } // This option returns the modified document
      );

      res.json({ success: true, fileIds });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
