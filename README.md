# Flower Identifier

A simple web application that allows users to upload a photo of a flower, which is then identified using a machine learning model. This project uses Flask as the backend and React for the frontend.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#Usage)
- [Folder Structure](#folder-structure)

## Project Description
Flower Identifier is a web application that allows users to upload a photo of a flower, which is then identified by the backend using a machine learning model. The application returns details such as the flower's name, scientific name, description, and the confidence percentage of the identification.

- **Frontend**: React.js for user interface.
- **Backend**: Flask for image processing and model prediction.
- **Model**: A finetuned deep learning model **DenseNet** for flower classification.

## Features

- **Image Upload**: Users can upload a photo of a flower.
- **Flower Identification**: The image is processed, and flower details are returned.
- **Confidence Score**: The application provides a confidence percentage of the prediction.
- **Error Handling**: Proper error messages provided if the file is invalid or the flower cannot be identified.

## Technologies Used

- **Frontend**: React.js
  - React Hooks for state management
  - CSS for styling
- **Backend**: Flask (Python)
  - Handles API requests for image classification
  - Uses machine learning to identify flowers
- **Machine Learning**:
  - TensorFlow/Keras for training and using the flower classification model
- **Data**:
  - JSON file containing flower data

## Setup and Installation
To run this project locally, follow the steps below:

### Prerequisites
- **Node.js**: Ensure that that Node.js and npm are installed.
- **Python**: Ensure that Python is installed.
- **Flask**: Ensure that Flask is installed. Install it using the requirements.txt file.

### Frontend Setup
1. Clone the repository. 
```
git clone https://github.com/shanjali/Flower-Identifier.git
```
2. Navigate to the frontend/flower folder: 
```
cd Flower-Identifier/frontend/flower
```
3. Install the dependencies. 
```
npm install
```
4. Run the frontend development server: 
```
npm start
```

The frontend will be accessible at http://localhost:3000.

### Backend Setup
1. Navigate to the backend folder: 
```
cd Flower-Identifier/backend
```
2. Create a virtual environment (optional, but recommended!). 
```
python3 -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```
3. Install the required dependencies: 
```
pip install -r requirements.txt
```
5. Run the Flask server: 
```
python model_api.py
```

The Flask API will be accessible at http://localhost:5001.

### Machine Learning Model
1. Open flower_finetuned_model.ipynb.
2. Follow along and choose a model to save.
3. Make sure to update the model name in model_api.py

## Usage
1. Open the app in your browser at http://localhost:3000.
2. Upload an image of a flower using the file input.
3. Click the "Identify!" button to start the flower identification process.
4. Once the flower is identified, the result will be displayed, including the name, scientific name, description, and confidence level.
5. If there is an error or you want to upload another image, click "Try Again."

## Folder Structure
The folder structure is as follows:
```
flower-identifier/
│
├── backend/                            # Flask backend code
│   ├── model_api.py                    # Main Flask app (API endpoints)
│   ├── requirements.txt                # Python dependencies
│   ├── flower_finetuned_model.ipynb    # Model notebook (training and fine-tuning)
│   └── flowers.json                    # Flower data (JSON format)
│
├── frontend/                           # React frontend code
│   ├── public/                         # Public assets (e.g., index.html)
│   ├── src/                            # React components
│   │   ├── App.js                      # Main React component
│   │   ├── pages/                      # React code for pages
│   │   └── components/                 # React components for uploading, identifying, etc.
│   ├── package.json                    # NPM dependencies
│   └── package-lock.json               # NPM lock file
│
└── README.md                           # This file
```
