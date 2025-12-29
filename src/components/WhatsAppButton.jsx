import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.css'; // Asegúrate de tener este archivo con los estilos CSS

const WhatsAppButton = () => {
  // Estado para controlar la visibilidad del chat
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón flotante de WhatsApp */}
      <div
        className="whatsapp-button"
        onClick={toggleChat}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#ffffff" />
      </div>

      {/* Ventana emergente del chat */}
      <div className={`whatsapp-chat-box ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-chat-header">
          <h4>WhatsApp</h4>
          <button
            className="close-btn"
            onClick={toggleChat}
            title="Cerrar"
          >
            X
          </button>
        </div>

        <div className="whatsapp-chat-content">
          <p>Hola, ¿En qué podemos ayudarte?</p>
        </div>

        <div className="whatsapp-chat-footer">
          <a
            href="https://wa.me/51985228282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="start-chat-btn">
              Abrir chat
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
