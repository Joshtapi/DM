import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros-container">

      <h1 className="nosotros-title">Sobre Nosotros</h1>

      <section className="nosotros-section">
        <h2>Misión</h2>
        <p>
          Aspiramos a satisfacer las necesidades de nuestros clientes,
          generando altas expectativas al momento de la adquisición de
          nuestros productos.
        </p>
      </section>

      <section className="nosotros-section">
        <h2>Visión</h2>
        <p>
          Ser líderes en el mercado, en la producción y comercialización
          de productos a partir de materias primas que garanticen calidad a
          nuestros clientes.
        </p>
      </section>

      <section className="nosotros-section">
        <h2>Valores</h2>

        <ul className="nosotros-valores">
          <li>
            <strong>Compromiso:</strong> Buscamos generar compromisos con nuestros
            clientes brindando productos que superen sus expectativas.
          </li>

          <li>
            <strong>Excelencia:</strong> Buscamos siempre la mejora continua de nuestros
            procesos para ofrecer productos de alta calidad.
          </li>

          <li>
            <strong>Puntualidad:</strong> Nos caracterizamos por nuestra puntualidad
            en fechas pactadas de entrega, generando confianza a nuestros
            clientes y distribuidores locales.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default Nosotros;
