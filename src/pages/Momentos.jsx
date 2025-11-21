import React from "react";
import "./Momentos.css";

const Momentos = () => {
  return (
    <div className="momentos-container" data-aos="fade-up">
      <h1 className="momentos-title">Momentos Doña Martha</h1>
      <p className="momentos-description">
        Revive los momentos más especiales que compartimos en ferias, eventos y actividades
        junto a nuestras familias. Cada fotografía refleja tradición, unión y el cariño de Doña Martha.
      </p>

      {/* ===== GALERÍA ===== */}
      <div className="momentos-gallery">

        {/* ---- Ejemplos, aquí puedes reemplazar las fotos ---- */}
        <div className="gallery-item" data-aos="zoom-in">
          <img src="https://i.postimg.cc/4yXhrWFB/131353282-182545916926971-5969667863466803664-n.jpg" alt="Evento Doña Martha" />
        </div>

        <div className="gallery-item" data-aos="zoom-in">
          <img src="https://i.postimg.cc/SKbHF8k9/489568901-1206118681521164-2925867084148411520-n.jpg" alt="Feria Doña Martha" />
        </div>

        <div className="gallery-item" data-aos="zoom-in">
          <img src="https://i.postimg.cc/XYdD8JdW/475036360-1143216274193259-1449845802259599401-n.jpg" alt="Stand Doña Martha" />
        </div>

        <div className="gallery-item" data-aos="zoom-in">
          <img src="https://i.postimg.cc/fT0HzLHd/490595954-1207833358016363-5182046119763184610-n.jpg" alt="Productos en feria" />
        </div>

        <div className="gallery-item" data-aos="zoom-in">
            <img src="https://i.postimg.cc/yY4VYJVQ/494110295-1226019086197790-1384636431927961304-n.jpg" alt="Clientes Doña Martha" />
        </div>

        <div className="gallery-item" data-aos="zoom-in">
          <img src="https://i.postimg.cc/CLggpW7z/496154231-1235759028557129-1340484816383123595-n.jpg" alt="Clientes Doña Martha" />
        </div>

      </div>
    </div>
  );
};

export default Momentos;
