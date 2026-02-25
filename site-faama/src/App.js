import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from './pages/Inicio';
import Curso from './pages/Curso';
import "./App.css"; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Curso" element={<Curso />} />
      </Routes>
    </Router>
  );
}

export default App;