import React from "react";
import "./Slider.css";
import "./PromoSections.css";
import "./CelebramosEsteMes.css";
import "./ConsumoConsciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div data-aos="fade-up">
      {/* === SLIDER === */}
      <div className="Slider_embla__Tej07">
        <div className="Slider_embla__viewport__Xz3g0">
          <div className="Slider_embla__container__Uk_9a">
            <div className="Slider_embla__slide__99RXI">
              <div className="Slider_embla__slide__inner__H8bQ6">
                <a href="">
                  <img
                    className="Slider_embla__slide__img__D4Lt7 banner_web"
                    src="https://i.postimg.cc/W3TV5c6b/Diseno-sin-titulo-2.png"
                    alt="Doña Martha"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === SECCIONES === */}
      <div className="sections-container">
        {/* NOVEDADES */}
        <div className="novedades-section">
          <div className="novedades-left">
            <h2 className="novedades-title">Novedades</h2>
            <p className="novedades-description">
              Descubre lo más reciente de Doña Martha: productos, promociones y más.
            </p>
          </div>
          <div className="novedades-right">
            <a href="/novedades">
              <FontAwesomeIcon className="novedades-icon" icon={faNewspaper} />
            </a>
          </div>
        </div>

        {/* PROMOCIÓN */}
        <div className="promo-section">
          <div className="promo-left">
            <h2 className="promo-title">MOMENTOS DOÑA MARTHA</h2>

            <p className="promo-description">
              Descubre los momentos más especiales que compartimos en ferias y actividades.
            </p>

            <a href="/momentos" className="promo-button">
              VER GALERÍA
            </a>
          </div>

          <div className="promo-right"></div>
        </div>


        {/* CELEBRAMOS */}
        <section className="celebramos-section">
          <h2 className="celebramos-title">🎉 Celebramos este mes</h2>
          <div className="celebramos-content">
            <div className="celebramos-left">
              <img
                src="https://i.postimg.cc/R0dq3Xc5/Gemini-Generated-Image-1h8mmm1h8mmm1h8m.png"
                alt="Imagen Celebración"
                className="celebramos-image"
              />
            </div>
            <div className="celebramos-right">
              <div className="celebramos-momentos">
                <p className="momentos-text">
                  Momentos <strong>Diciembre</strong>
                </p>
                <img
                  src="https://i.postimg.cc/5tK6yx0T/579433135-1404740238325673-8779690184477216696-n.jpg"
                  alt="Producto"
                  className="momentos-producto"
                />
              </div>
              <div className="celebramos-recetas">
                <button className="invierno-button">#Invierno</button>
                <h3 className="recetas-title">RECETAS</h3>
                <button className="ver-button">VER</button>
              </div>
            </div>
          </div>
        </section>

        {/* CONSUMO CONSCIENTE */}
        <section className="consumo-section">
          <div className="consumo-container">
            <h2 className="consumo-title">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1343/1343122.png"
                alt="Consumo consciente"
                className="consumo-icon"
              />
              Consumo consciente
            </h2>
            <div className="consumo-content">
              <div className="consumo-img-wrapper">
                <img
                  src="https://i.postimg.cc/kMR9LqT6/475105676-1143201507528069-6218345678664763561-n.jpg"
                  alt="Consumo consciente"
                  className="consumo-img"
                />
              </div>

              <div className="consumo-text">
                <p>Aprende a disfrutar mejor el momento.</p>
                <a href="/snack-consciente" className="consumo-button">
                  ¡Quiero saber más!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Slider;
