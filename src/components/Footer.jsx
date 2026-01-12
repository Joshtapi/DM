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

        {/* ==== BLOQUE 4: CONTACTO ==== */}
        <div className="footer-contact">
          <h2 className="footer-contact-title-main">Atención al Cliente</h2>

          <div className="contact-info">
            <a href="tel:054422421" className="contact-link">
              <span className="contact-icon">📞</span> (054) 422421
            </a>
          </div>

          <div className="contact-info">
            <a href="mailto:dmindustrias.2006@gmail.com" className="contact-link">
              <span className="contact-icon">✉️</span> dmindustrias.2006@gmail.com
            </a>
          </div>
        </div>


        {/* ==== BLOQUE 3: TRABAJA CON NOSOTROS (destacado) ==== */}
        <div className="footer-join">
          <h3>¡ÚNETE A NUESTRO EQUIPO!</h3>
          <p>¿Quieres ser parte de Doña Martha? Estamos buscando talento como el tuyo.</p><br></br>
          <a href="/TrabajaConNosotros" className="footer-join-link">
            Trabaja con Nosotros
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
