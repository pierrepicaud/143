import React, { useState } from 'react';
import './App.css';
import Snowfall from 'react-snowfall';

function App() {
  const images = [
    './assets/christmas1.png',
    './assets/christmas2.png',
    './assets/christmas3.png',
    './assets/christmas4.png',
    './assets/christmas5.png',
    './assets/christmas6.png',
    './assets/christmas7.png',
    './assets/christmas8.png',
  ];

  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  // State for the background image
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());

  // Event handler for changing the background
  const changeBackground = () => {
    setBackgroundImage(getRandomImage());
  };

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="App" style={backgroundStyle} onClick={changeBackground}>
      <Snowfall />
      <header className="App-header">
        <p className='gvs'>
          Merry Christmas and 143 pặc pặc!
        </p>
      </header>
    </div>
  );
}

export default App;