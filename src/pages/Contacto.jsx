import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import "./Contacto.css";

const Contacto = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="contact-container">
      <h1 data-aos="fade-down">Contáctanos</h1>

      <p data-aos="fade-up" data-aos-delay="200">
        ¿Tienes alguna pregunta o deseas hacer un pedido?  
        Escríbenos directamente por WhatsApp y te atenderemos con gusto 🤍
      </p>

      <a
        href="https://wa.me/51906011424"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <FaWhatsapp className="icon" />
        Chatear por WhatsApp
      </a>

      <p className="phone-text" data-aos="fade-up" data-aos-delay="600">
        📞 También puedes llamarnos al <span>+51 985 228 282</span>
      </p>
    </div>
  );
};

export default Contacto;
