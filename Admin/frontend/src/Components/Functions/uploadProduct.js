const uploadProduct = async (
  validationResults,
  createProduct,
  uploadToGoogleDrive,
  setSubmitResponse,
  setValidationResults,
  setResetForm
) => {
  // Check for errors in validationResults
  const errors = Object.entries(validationResults).filter(
    ([key, value]) => value.error !== ""
  );

  if (errors.length > 0) {
    // Display errors if any
    const errorList = errors.map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong>{" "}
        {typeof value === "object" ? value.error : value}
      </li>
    ));
    setSubmitResponse(
      <ul className="list-unstyled text-danger">{errorList}</ul>
    );
  } else {
    // No errors, gather data and call createProduct function
    setSubmitResponse(
      <div className="text-success">Uploading the product. Please wait...</div>
    );
    // Gather data from each component
    const titleData = validationResults.Title.data;
    const categoryData = validationResults.Category.data;
    const typeData = validationResults.Type.data;
    const affiliatedLinkData = validationResults.AffiliatedLink.data;
    const keywordsData = validationResults.Keywords.data;
    const productImagesData = validationResults.ProductImages.data;
    const productDescriptionData = validationResults.ProductDescription.data;
    const inStockData = validationResults.InStock.data;
    const productCodeData = validationResults.ProductCode.data;
    const productPriceData = validationResults.ProductPrice.data;
    const metaDataData = validationResults.MetaData.data;

    // Combine data into a single object
    const productData = {
      Title: titleData,
      Category: categoryData,
      Type: typeData,
      AffiliatedLink: affiliatedLinkData,
      Keywords: keywordsData,
      ProductImages: [],
      ProductDescription: productDescriptionData,
      InStock: inStockData,
      ProductCode: productCodeData,
      ProductPrice: productPriceData,
      MetaData: metaDataData,
    };

    // Call createProduct function with the gathered data
    const response = await createProduct(productData);

    //If error occurs in mongodb side
    if (!response.success) {
      setSubmitResponse(<div className="text-danger">{response.error}</div>);
    } else {
      //mongodb side successfull. Now upload product images
      setSubmitResponse(
        <div className="text-success">
          Text data saved. Now uploading files on google drive...
        </div>
      );
      const handleUploadResponse = (response) => {
        // Handle the response here
        if (!response.success) {
          setSubmitResponse(
            <div className="text-danger">{response.error}</div>
          );
        } else {
          // Display success response
          setSubmitResponse(
            <div className="text-success">Product created successfully!</div>
          );
        }

        // Reset validationResults
        setValidationResults({
          Title: { error: "Title field is required", data: "" },
          Category: { error: "Please select category", data: "" },
          Type: { error: "Please select a type", data: "" },
          Keywords: { error: "Please add some keywords", data: "" },
          ProductImages: {
            error: "Please upload some product images",
            data: "",
          },
          ProductDescription: { error: "Please describe product", data: "" },
          InStock: { error: "", data: true },
          ProductCode: { error: "Product code section required", data: "" },
          ProductPrice: { error: "Product price section required", data: "" },
          MetaData: { error: "Metadata section required", data: "" },
        });

        setResetForm(true);

        // Automatically set setResetForm(false) after 5 seconds
        setTimeout(() => {
          setResetForm(false);
        }, 5000);
      };

      const uploadId = response.uploadId;
      const modal = "products";
      const folderId = "1hwm30Y85OLzclnzpZyn2q7AKGI7lRsqL"; // Replace with the actual folder ID
      await uploadToGoogleDrive(
        productImagesData,
        folderId,
        handleUploadResponse,
        uploadId,
        modal
      );
    }
  }
};

export default uploadProduct;
