import React, { useRef, useEffect } from "react";

const AliadosSlider = () => {
  const trackRef = useRef(null);
  
  useEffect(() => {
    const track = trackRef.current;
    // Duplicar los elementos dentro del track para crear el bucle infinito
    const items = Array.from(track.children);
    items.forEach(item => {
      track.appendChild(item.cloneNode(true));  // Clonamos cada item y lo añadimos al final
    });
  }, []);
  
  return (
    <section className="aliados-section" data-aos="fade-up">
      <h2 className="aliados-title">Nuestros Aliados</h2>
      <div className="aliados-slider">
        <div className="aliados-track" ref={trackRef}>
          {/* Los elementos de los aliados */}
          <div className="aliado-item">
            <img src="https://i.postimg.cc/RVZMLHKp/images-(5).png" alt="Marca 1" />
            <p>San Jorge</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/NGW352bR/images-(6).png" alt="Marca 2" />
            <p>Cooper</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/25yY4RWH/475302487-1382605189766886-3232713079728852400-n.jpg" alt="Marca 3" />
            <p>Vitaly</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/LXHHQCnV/433571681-806545931512555-3643785243559779178-n.jpg" alt="Marca 4" />
            <p>Kimberly-Clark</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/hjr3MMdd/847fd603-710d-4f0c-9c9d-d3e0d7e68c7f.jpg" alt="Marca 5" />
            <p>De la piedra</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/J4cvhrnB/fa35b539-f829-4f27-b591-e5f715440ad9.jpg" alt="Marca 6" />
            <p>Belen</p>
          </div>
          <div className="aliado-item">
            <img src="https://i.postimg.cc/JhfCkTWS/1a6e8c23-37d4-4cdc-8fa6-f900bbd3f532.jpg" alt="Marca 7" />
            <p>Vicentina</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AliadosSlider;
