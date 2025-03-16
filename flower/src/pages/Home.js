import React from 'react';
import ImageUpload from './ImageUpload';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      <header>
        <title>Home</title>
      </header>
      {/* Pass the 'imageup' class to the ImageUpload component */}
      <ImageUpload className="imageup" />
    </div>
  );
}

export default Home;
