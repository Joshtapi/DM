// TrabajaConNosotros.js
import React from "react";
import "./TrabajaConNosotros.css";  // Estilos para esta sección

const TrabajaConNosotros = () => {
  return (
    <div className="join-container">
      <h1>¡ÚNETE A NUESTRO EQUIPO!</h1>

      <p>
        ¿Estás buscando un nuevo reto profesional? Únete a nuestro equipo de ventas y forma parte de Doña Martha Industries.
      </p>

      <div className="image-container">
        <img
          src="https://i.postimg.cc/cCzSzJjD/588635519-1414901253976238-5438975628378418696-n.jpg"
          alt="Oportunidad laboral"
          className="job-image"
        />
      </div>

      <a
        href="https://wa.me/51906011424"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        Enviar CV por WhatsApp
      </a>

      <p className="phone-text">
        📞 También puedes llamarnos al <span>+51 906 011 424</span>
      </p>
    </div>
  );
};

export default TrabajaConNosotros;
