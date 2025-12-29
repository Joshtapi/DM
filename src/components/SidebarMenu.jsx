import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./SidebarMenu.css";

const SidebarMenu = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  // Cierra al cambiar de ruta
  useEffect(() => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        onClose();
      }, 300);
    }
  }, [location]);

  // Cierra manualmente
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  };

  return (
    <div
      className={`sidebar-menu ${isOpen ? (closing ? "closing" : "open") : ""
        }`}
    >
      {/* === Encabezado === */}
      <div className="menu-header">
        <h2>Menú</h2>
      </div>

      {/* === Contenido === */}
      <div className="menu-content">
        <Link to="/nosotros" onClick={handleClose}>Nosotros</Link>
        <Link to="/productos" onClick={handleClose}>Productos</Link>
        <Link to="/snack-consciente" onClick={handleClose}>Consumo Consciente</Link>
        <Link to="/tienda" onClick={handleClose}>Realiza tu Pedido</Link>
        <Link to="/contacto" onClick={handleClose}>Contáctanos</Link>
      </div>

      {/* === Footer === */}
      <div className="menu-footer">
        <div className="social-icons">

          {/* ✔ Facebook (primero) */}
          <a
            href="https://www.facebook.com/IndustriasDonaMartha"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>

          {/* ✔ TikTok (segundo) */}
          <a
            href="https://www.tiktok.com/@1ndustriasdm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          </a>

          {/* ✔ Instagram (tercero) */}
          <a href="https://www.instagram.com/indus.dm06/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>

        </div>

        <div className="footer-text">
          <p className="slogan">Sigamos viviendo momentos que duren para siempre 🤍</p>
          <p className="copyright">© Todos los derechos reservados DM</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
