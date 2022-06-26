import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heroe from './Components/Heroe/Heroe';
import Best from './Components/Best/Best';
import Featured from './Components/Featured/Featured';

const App = () => {
  return (
    <>
      <Navbar />
      <Heroe />
      <Best />
      <Featured/>
    </>
  )
}
export default App;
