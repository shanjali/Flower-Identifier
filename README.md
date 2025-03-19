# Flower-Identifier

A simple web application that allows users to upload a photo of a flower, which is then identified using a machine learning model. This project uses Flask as the backend and React for the frontend.

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
