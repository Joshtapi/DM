import React from "react";
import "./SnackConsciente.css";

const SnackConsciente = () => (
  <div className="snack-container">

    <h1 className="snack-title">Consumo Consciente</h1>

    <p className="snack-desc">
      Tomar decisiones inteligentes sobre lo que consumimos no solo beneficia a nuestro cuerpo,
      sino que también contribuye al bienestar del planeta.  
      Pequeños cambios hacen una gran diferencia 🌱✨
    </p>

    <img
      src="https://i.postimg.cc/zGnTmmG4/475147597-1143201547528065-2847451351992207329-n.jpg"
      alt="Consumo Responsable"
      className="snack-hero-img"
    />

    {/* === SECCIÓN DE TARJETAS === */}
    <div className="snack-grid">

      <div className="snack-card">
        <div className="snack-icon">🌽</div>
        <h3 className="snack-card-title">Elige Ingredientes Reales</h3>
        <p>
          Prefiere insumos naturales como cereales andinos, menestras y harinas artesanales.
        </p>
      </div>

      <div className="snack-card">
        <div className="snack-icon">📦</div>
        <h3 className="snack-card-title">Compra en la Medida Correcta</h3>
        <p>
          Presentaciones grandes o pequeñas según tu consumo para evitar desperdicios.
        </p>
      </div>

      <div className="snack-card">
        <div className="snack-icon">🔥</div>
        <h3 className="snack-card-title">Cocina Más en Casa</h3>
        <p>
          Mazamorras, sopas y postres caseros son saludables, económicos y riquísimos.
        </p>
      </div>

      <div className="snack-card">
        <div className="snack-icon">🌿</div>
        <h3 className="snack-card-title">Reduce Procesados</h3>
        <p>
          Menos aditivos y más sabor auténtico. Una decisión que tu cuerpo agradece.
        </p>
      </div>

      <div className="snack-card">
        <div className="snack-icon">🛒</div>
        <h3 className="snack-card-title">Apoya Producción Local</h3>
        <p>
          Cada compra ayuda al trabajo de agricultores y productores nacionales.
        </p>
      </div>

      <div className="snack-card">
        <div className="snack-icon">❤️</div>
        <h3 className="snack-card-title">Come con Propósito</h3>
        <p>
          Alimentarte bien es una forma de cuidarte y cuidar lo que te rodea.
        </p>
      </div>

    </div>
  </div>
);

export default SnackConsciente;
