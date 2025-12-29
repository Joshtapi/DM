import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';  // Importa el componente

// Páginas
import Recetas from './pages/Recetas';
import Productos from './pages/Productos';
import SnackConsciente from './pages/SnackConsciente';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';
import Momentos from './pages/Momentos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/snack-consciente" element={<SnackConsciente />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/momentos" element={<Momentos />} />
        </Routes>

        <Footer />

        {/* Botón de WhatsApp flotante */}
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
