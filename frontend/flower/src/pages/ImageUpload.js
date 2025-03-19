import React, { useState } from "react";
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [showContent, setShowContent] = useState(true); // State for showing/hiding instructions and input section
  const [result, setResult] = useState(null); // State for storing the flower result
  const [error, setError] = useState(null); // State for error handling

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Store the file for uploading later
      setError(null);
    }
  };

  const handleIdentify = async () => {
    setShowContent(false); // Hide the instructions, file input, and identify button
    setLoading(true); // Show loading screen inside the white box
    setError(null);

    // Prepare form data to send image
    const formData = new FormData();
    formData.append('file', image); // Ensure 'file' is the correct field name expected by Flask

    try {
      // Send the image to Flask backend for identification
        // Send the image to Flask backend for identification
        const response = await fetch('http://localhost:5001/identify', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          setTimeout(async () => {
          const data = await response.json();
          setLoading(false); // Hide loading screen after response
          setResult(data); // Set the result from the API response
        }, 2500); // 2.5-second delay before proceeding
        } else {
          setLoading(false);
          setError("Error identifying flower! Please try again.");
        }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setError("Error identifying flower! Please try again.");
    }
  };


  // Handle try again button click
  const handleTryAgain = () => {
    setImage(null);  // Reset the image
    setResult(null); // Reset the result
    setShowContent(true); // Show the content again
    setError(null);
  };

  return (
    <div>
      {/* White Box Container */}
      <div className="imageup">
        {/* Conditionally render instructions and input section */}
        {showContent && !error && (
          <div className="help">
            <h1>Flower Identifier</h1>
            <ol>
              <li>Upload a photo of a flower below.</li>
              <li>Press the Identify button!</li>
            </ol>
          </div>
        )}

        {/* Image Upload */}
        {showContent && !error && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
        )}

        {/* Image Preview */}
        {image && !loading && !result && !error && (
          <div className="image-preview-container">
            <img src={URL.createObjectURL(image)} alt="Uploaded Preview" className="image-preview" />
          </div>
        )}

        {/* Identify Button */}
        {showContent && !loading && !result && !error && (
          <button onClick={handleIdentify} className="confirm-button">
            Identify!
          </button>
        )}

        {/* Loading Screen inside the white box */}
        {loading && !error && (
          <div>
            <div className="loading-gif">
              <img
                src={require(".//loadscreen.gif")}
                alt="Loading"
                width={"80%"}
              />
            </div>
            <h2>Analyzing...</h2>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={handleTryAgain} className="try-again-button">
              Try Again
            </button>
          </div>
        )}

        {/* Result Display - After loading */}
        {result && !loading && !error && (
          <div className="result">
            <div className="image-preview-container">
              <img src={URL.createObjectURL(image)} alt="Uploaded Preview" className="image-preview" />
            </div>
            <h2>{result.name}</h2>
            <p><strong>Scientific Name:</strong> {result.scientific_name}</p>
            <p>{result.description}</p>
            <p><strong>Confidence:</strong> {result.confidence}%</p>
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
