import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar";
import Curso from './pages/Curso';
import Inicio from './pages/Inicio';

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