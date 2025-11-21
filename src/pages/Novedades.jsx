import React from "react";
import "./Novedades.css";

const Novedades = () => {
  return (
    <div className="novedades-container">
      <h1 className="novedade-title">Novedades</h1>

      <div className="grid-novedades">

        <div className="card-novedad" data-aos="fade-up">
          <img src="https://i.postimg.cc/KYbtycVT/Captura-de-pantalla-2025-11-20-135135.png" alt="Feria" />
          <h3>Presencia en feria gastronómica</h3>
          <p>
            Estuvimos presentes en eventos culinarios compartiendo productos, 
            degustaciones y experiencias con cientos de familias.
          </p>
        </div>

        <div className="card-novedad" data-aos="fade-up" data-aos-delay="150">
          <img src="https://i.postimg.cc/G20nqNS9/481106854-1167658871748999-5020244704521223313-n.jpg" alt="Producto nuevo" />
          <h3>Nuevo empaque eco-friendly</h3>
          <p>
            Presentamos nuestros nuevos empaques más resistentes,
            prácticos y totalmente reciclables.
          </p>
        </div>

        <div className="card-novedad" data-aos="fade-up" data-aos-delay="300">
          <img src="https://i.postimg.cc/5tK6yx0T/579433135-1404740238325673-8779690184477216696-n.jpg" alt="Evento Social" />
          <h3>Actividades sociales</h3>
          <p>
            Seguimos apoyando actividades comunitarias para llevar alimentos 
            nutritivos a organizaciones locales.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Novedades;
