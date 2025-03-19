# Flower Identifier

A simple web application that allows users to upload a photo of a flower, which is then identified using a machine learning model. This project uses Flask as the backend and React for the frontend.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- Setup and Installation
- Usage
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
