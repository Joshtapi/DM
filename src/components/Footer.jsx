import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">

        {/* ==== BLOQUE 1: LOGO + SLOGAN + COPYRIGHT + REDES ==== */}
        <div className="footer-brand">
          <img
            src="https://i.postimg.cc/W4M8sBR9/images-4-1.png"
            alt="Doña Martha"
            className="footer-logo"
          />

          <p className="footer-slogan">
            Sigamos viviendo momentos que duren para siempre ❤️
          </p>

          <p className="footer-copy">
            © DOÑA MARTHA 2025
            <span className="separator">|</span>
            <a
              href="https://joshtapi.github.io/Portafolio"
              target="_blank"
              rel="noreferrer"
              className="dev-link"
            >
              JT Dev Studio
            </a>
          </p>

          <div className="footer-redes">
            <a
              href="https://www.facebook.com/IndustriasDonaMartha"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://www.tiktok.com/@1ndustriasdm"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
              href="https://www.instagram.com/indus.dm06/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* ==== BLOQUE 2: ENLACES ==== */}
        <div className="footer-middle">
          <h2 className="footer-middle-title-main">Doña Martha</h2>

          <ul>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/recetas">Recetas</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/tienda">Tienda</a></li>
            <li><a href="/snack-consciente">Snack Consciente</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>


        {/* ==== BLOQUE 3 ==== */}
        <div className="footer-contact">
          <h3>Atención al cliente</h3>
          <p>(054) 422421</p>
          <p>dmindustrias.2006@gmail.com</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
