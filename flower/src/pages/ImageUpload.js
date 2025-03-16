import React, { useState } from "react";

const ImageUpload = ({ className }) => {
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
    <div className={className}>
      <h2>Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input"
      />

      {/* Display image if available */}
      {image && (
        <div className="image-preview-container">
          <img src={image} alt="Uploaded Preview" className="image-preview" />
        </div>
      )}

      {/* Confirm button */}
      <button onClick={handleConfirm} className="confirm-button">
        Confirm
      </button>
    </div>
  );
};

export default ImageUpload;
