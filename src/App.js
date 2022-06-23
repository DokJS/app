import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heroe from './Components/Heroe/Heroe';
import Best from './Components/Best/Best';

const App = () => {
  return (
    <>
      <Navbar />
      <Heroe />
      <Best />
    </>
  )
}
export default App;
