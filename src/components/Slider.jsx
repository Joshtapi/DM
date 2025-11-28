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

{/* NUESTROS ALIADOS */}
<section className="aliados-section" data-aos="fade-up">
  <h2 className="aliados-title">Nuestros Aliados</h2>

  <div className="aliados-slider">
    <div className="aliados-track">
      
      {/* LOGO 1 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/RVZMLHKp/images-(5).png" alt="Marca 1" />
        <p>San Jorge</p>
      </div>

      {/* LOGO 2 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/NGW352bR/images-(6).png" alt="Marca 2" />
        <p>Cooper</p>
      </div>

      {/* LOGO 3 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/25yY4RWH/475302487-1382605189766886-3232713079728852400-n.jpg" alt="Marca 3" />
        <p>Vitaly</p>
      </div>

      {/* LOGO 4 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/LXHHQCnV/433571681-806545931512555-3643785243559779178-n.jpg" alt="Marca 4" />
        <p>Kimberly-Clark</p>
      </div>

      {/* LOGO 5 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/hjr3MMdd/847fd603-710d-4f0c-9c9d-d3e0d7e68c7f.jpg" alt="Marca 5" />
        <p>De la piedra</p>
      </div>

      {/* LOGO 6 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/J4cvhrnB/fa35b539-f829-4f27-b591-e5f715440ad9.jpg" alt="Marca 6" />
        <p>Belen</p>
      </div>

      {/* LOGO 7 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/JhfCkTWS/1a6e8c23-37d4-4cdc-8fa6-f900bbd3f532.jpg" alt="Marca 7" />
        <p>Vicentina</p>
      </div>

      {/* === SE DUPLICAN PARA QUE NO HAYA ESPACIOS VACÍOS === */}
      {/* LOGO 1 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/RVZMLHKp/images-(5).png" alt="Marca 1" />
        <p>San Jorge</p>
      </div>

      {/* LOGO 2 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/NGW352bR/images-(6).png" alt="Marca 2" />
        <p>Cooper</p>
      </div>

      {/* LOGO 3 */}
      <div className="aliado-item">
        <img src="https://i.postimg.cc/25yY4RWH/475302487-1382605189766886-3232713079728852400-n.jpg" alt="Marca 3" />
        <p>Vitaly</p>
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
