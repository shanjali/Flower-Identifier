import React, { useState } from "react";
import './ImageUpload.css'

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle confirm button click
  const handleConfirm = () => {
    alert("Image confirmed!");
  };

  return (
      <div className="imageup">

      <div className="help">
        <h2>How to Use Flower Identifier</h2>
        <ol>
          <li>Take a photo of a flower.</li>
          <li>Upload the photo below</li>
          <li>Press the Identify button!</li>
        </ol>
      </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-input"
        />

        {image && (
          <div className="image-preview-container">
            <img src={image} alt="Uploaded Preview" className="image-preview" />
          </div>
        )}

        {/* Confirm button */}
        <button onClick={handleConfirm} className="confirm-button">
          Identify!
        </button>
      </div>
  );
};

export default ImageUpload;