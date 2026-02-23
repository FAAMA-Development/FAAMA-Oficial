import React from 'react';
import Navbar from "./components/Navbar";
import "./App.css"; 
import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Inicio />
    </div>
  );
}

export default App;