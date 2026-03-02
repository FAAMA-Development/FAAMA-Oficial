import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from './pages/Inicio';
import Curso from './pages/Curso';
import "./App.css"; 

function App() {
  return (
    <Router>
    <Navbar /> 
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Inicio />} />
            <Route path="/cursos" element={<Curso />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;