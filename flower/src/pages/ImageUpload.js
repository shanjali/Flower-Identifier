import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL to preview the image
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {image && <img src={image} alt="Uploaded Preview" width="300" />}
    </div>
  );
};

export default ImageUpload;
