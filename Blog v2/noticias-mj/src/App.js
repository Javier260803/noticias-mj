import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Novedades from './Novedades';
import SobreNosotros from './SobreNosotros';
import OtrosNoticieros from './OtrosNoticieros'; 


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Noticias MJ</h1>
          <nav>
            <ul>
              <li><a href="/novedades">Novedades</a></li>
              <li><a href="/Otros-Noticieros">Otros Noticieros</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/novedades" />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/Otros-Noticieros" element={<OtrosNoticieros />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2023 Noticias MJ</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
