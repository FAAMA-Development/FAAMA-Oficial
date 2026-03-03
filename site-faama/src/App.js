import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";

import Curso from './pages/Curso';
import Inicio from './pages/Inicio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>
    </Router>
  );
}
export default App;