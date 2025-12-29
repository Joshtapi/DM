import React from "react";
import "./Tienda.css";

// Import correcto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Tienda = () => (
  <div className="tienda-container">
    <h1 className="tienda-title">Realiza tu Pedido</h1>

    <p className="tienda-subtitle">
      Haz tu compra fácilmente desde casa.  
      Contáctanos por WhatsApp o llámanos para recibir atención personalizada y realizar tu pedido 📞✨
    </p>

    <div className="tienda-contact">
      <div className="tienda-box">
        <span className="tienda-icon">📱</span>
        <h3>WhatsApp</h3>
        <p>Escríbenos y te ayudamos a elegir tus productos.</p>
        <a href="https://wa.me/51985228282" className="tienda-btn">Enviar Mensaje</a>
      </div>

      <div className="tienda-box">
        <span className="tienda-icon">☎️</span>
        <h3>Llamada Directa</h3>
        <p>Realiza tu pedido con uno de nuestros asesores.</p>
        <a href="tel:054422421" className="tienda-btn">Llamar Ahora</a>
      </div>
    </div>

    {/* BOTÓN CATÁLOGO */}
    <a
      href="https://drive.google.com/file/d/1QZgERWU_aumigklJqj91KcMWnddxUExr/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="catalogo-box"
    >
      <FontAwesomeIcon icon={faBook} className="catalogo-icon" />
      <h3 className="catalogo-title">Ver Catálogo Completo</h3>
      <p className="catalogo-text">Descubre todos nuestros productos y presentaciones.</p>
    </a>

  </div>
);

export default Tienda;
