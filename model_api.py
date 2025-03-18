from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

# Initialize Flask app
app = Flask(__name__)

CORS(app, resources={r"/identify": {"origins": "http://localhost:3000"}})

# Load the trained model
model = tf.keras.models.load_model('flower_identifier_model.keras')

# Function to preprocess the uploaded image
def preprocess_image(image):
    IMG_SIZE = 224  # Image size expected by the model
    image = Image.open(io.BytesIO(image))  # Load image from bytes
    image = image.resize((IMG_SIZE, IMG_SIZE))  # Resize image to 224x224
    image = np.array(image) / 255.0  # Normalize pixel values
    image = np.expand_dims(image, axis=0)  # Add batch dimension (1, 224, 224, 3)
    return image

@app.route('/identify', methods=['POST'])
def identify_flower():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Preprocess image
    image = preprocess_image(file.read())
    
    # Make prediction
    predictions = model.predict(image)
    predicted_class = np.argmax(predictions, axis=-1)[0]
    
    # Flower names list (this should match your model's class labels)
    flower_names = ['pink primrose', 'hard-leaved pocket orchid', 'canterbury bells', 'sweet pea', 'english marigold', 'tiger lily', 
                    'moon orchid', 'bird of paradise', 'monkshood', 'globe thistle', 'snapdragon', "colt's foot", 'king protea', 
                    'spear thistle', 'yellow iris', 'globe-flower', 'purple coneflower', 'peruvian lily', 'balloon flower', 
                    'giant white arum lily', 'fire lily', 'pincushion flower', 'fritillary', 'red ginger', 'grape hyacinth', 
                    'corn poppy', 'prince of wales feathers', 'stemless gentian', 'artichoke', 'sweet william', 'carnation', 
                    'garden phlox', 'love in the mist', 'mexican aster', 'alpine sea holly', 'ruby-lipped cattleya', 'cape flower', 
                    'great masterwort', 'siam tulip', 'lenten rose', 'barbeton daisy', 'daffodil', 'sword lily', 'poinsettia', 
                    'bolero deep blue', 'wallflower', 'marigold', 'buttercup', 'oxeye daisy', 'common dandelion', 'petunia', 
                    'wild pansy', 'primula', 'sunflower', 'pelargonium', 'bishop of llandaff', 'gaura', 'geranium', 'orange dahlia', 
                    'pink-yellow dahlia?', 'cautleya spicata', 'japanese anemone', 'black-eyed susan', 'silverbush', 'californian poppy', 
                    'osteospermum', 'spring crocus', 'bearded iris', 'windflower', 'tree poppy', 'gazania', 'azalea', 'water lily', 'rose', 
                    'thorn apple', 'morning glory', 'passion flower', 'lotus', 'toad lily', 'anthurium', 'frangipani', 'clematis', 'hibiscus', 
                    'columbine', 'desert-rose', 'tree mallow', 'magnolia', 'cyclamen', 'watercress', 'canna lily', 'hippeastrum', 'bee balm', 
                    'ball moss', 'foxglove', 'bougainvillea', 'camellia', 'mallow', 'mexican petunia', 'bromelia', 'blanket flower', 
                    'trumpet creeper', 'blackberry lily']

    flower_name = flower_names[predicted_class]

    # Return the predicted flower information
    result = {
        "name": flower_name,
        "description": "This is a sample description for " + flower_name,  # Replace with actual data
        "scientificName": "Scientific name for " + flower_name,
        "habitat": "Habitat information for " + flower_name,
    }

    return jsonify(result)


#if __name__ == '__main__':
 #   app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

