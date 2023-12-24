// googleDriveUpload.js

//Host
const host = "http://localhost:5000";

const uploadToGoogleDrive = async (base64Images, folderId, callback, uploadId, modal) => {
  try {
    // Use the provided folderId directly
    const folderIdToUse = folderId;

    // Convert base64 strings to Blob objects
    const files = base64Images.map((base64String, index) => {
      const byteCharacters = atob(base64String.split(",")[1]);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: "image/jpeg" });
      return new File([blob], `image_${index}.jpg`, { type: "image/jpeg" });
    });

    // Load each image before proceeding
    const images = await Promise.all(
      base64Images.map(
        (base64String) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.src = base64String;
          })
      )
    );

    // Draw images on canvas
    const base64ImagesForUpload = images.map((image) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0, image.width, image.height);

      return canvas.toDataURL("image/jpeg");
    });

    // Create a FormData object and append files to it
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`croppedImages`, file, `image_${index}.jpg`);
    });

    //API Call
    const response = await fetch(
      `${host}/products/uploadToGDrive?folderId=${folderIdToUse}&uploadId=${uploadId}&modal=${modal}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const json = await response.json();

    // Handle the response using the provided callback
    if (callback) {
      callback(json);
    }
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    // Handle error if needed
  }
};

export default uploadToGoogleDrive;
