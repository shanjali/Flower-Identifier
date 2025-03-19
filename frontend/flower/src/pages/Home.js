import React from 'react';
import ImageUpload from '../components/ImageUpload';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      <header>
        <title>Home</title>
      </header>
        <ImageUpload/>
    </div>
  );
}

export default Home;
