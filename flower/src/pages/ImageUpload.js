import React, { useState } from "react";
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [showContent, setShowContent] = useState(true); // State for showing/hiding instructions and input section
  const [result, setResult] = useState(null); // State for storing the flower result

  // Flower info for demo (this can be replaced with real data from an API)
  const flowerInfo = {
    name: "Rose",
    description: "The rose is a symbol of love and beauty. It is a perennial flowering plant of the genus Rosa, within the family Rosaceae.",
    scientificName: "Rosa spp.",
    habitat: "Roses are cultivated in gardens around the world and can grow in a variety of environments."
  };

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle identify button click
  const handleIdentify = () => {
    setShowContent(false); // Hide the instructions, file input, and identify button
    setLoading(true); // Show loading screen inside the white box
    setTimeout(() => {
      // Simulate image identification and return a result after loading
      setLoading(false);
      setResult(flowerInfo); // Set the result after the "processing" is done
    }, 2000); // Simulate a 2-second processing time
  };

  // Handle try again button click
  const handleTryAgain = () => {
    setImage(null);  // Reset the image
    setResult(null); // Reset the result
    setShowContent(true); // Show the content again
  };

  return (
    <div>
      {/* White Box Container */}
      <div className="imageup">
        {/* Conditionally render instructions and input section */}
        {showContent && (
          <div className="help">
            <h1>Flower Identifier</h1>
            <ol>
              <li>Take a photo of a flower.</li>
              <li>Upload the photo below.</li>
              <li>Press the Identify button!</li>
            </ol>
          </div>
        )}

        {/* Image Upload */}
        {showContent && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
        )}

        {/* Image Preview - Always visible */}
        {image && (
          <div className="image-preview-container">
            <img src={image} alt="Uploaded Preview" className="image-preview" />
          </div>
        )}

        {/* Identify Button */}
        {showContent && !loading && !result && (
          <button onClick={handleIdentify} className="confirm-button">
            Identify!
          </button>
        )}

        {/* Loading Screen inside the white box */}
        {loading && (
          <div>
            <p>Identifying flower...</p>
          </div>
        )}

        {/* Result Display - After loading */}
        {result && !loading && (
          <div className="result">
            <h2>{result.name}</h2>
            <p>{result.description}</p>
            <p><strong>Scientific Name:</strong> {result.scientificName}</p>
            <p><strong>Habitat:</strong> {result.habitat}</p>
            <button onClick={handleTryAgain} className="try-again-button">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
