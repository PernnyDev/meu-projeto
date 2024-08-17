// src/App.js
import React from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Formulario />
      <Footer />
    </div>
  );
};

export default App;