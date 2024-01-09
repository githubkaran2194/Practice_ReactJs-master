import React, { useState } from 'react';

const style = {
  height: '200px',
  width: '290px',
  backgroundColor: 'red',
  margin: '50px auto',
  textAlign: 'center',
  display: 'none', // Hide the div by default
  justifyContent: 'center',
};

const Home = () => {
  const [popOpen, setPopOpen] = useState(false);

  const openPopup = () => {
    setPopOpen(true);
  };

  const closePopup = () => {
    setPopOpen(false);
  };

  return (
    <>
      <div style={{...style, display:popOpen ? 'block' : 'none'}}>
        Home
        <button onClick={closePopup}>Close</button>
      </div>
      <button onClick={openPopup}>Open</button>
    </>
  );
};

export default Home;
