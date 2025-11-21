import React, { useState, useEffect } from "react";
import "./Recetas.css";
import AOS from "aos";
import "aos/dist/aos.css";

// === LISTA DE RECETAS CON INGREDIENTES Y PREPARACIÓN ===
const recetas = [
    {
        nombre: "Mazamorra Morada",
        imagen: "https://i.postimg.cc/7ZLRB2Fh/Diseno-sin-titulo-17.png",
        descripcion: "Tradicional y deliciosa, perfecta para compartir en familia.",
        tiempo: "45 minutos",
        dificultad: "Fácil",
        ingredientes: [
            "1 taza de maíz morado",
            "8 tazas de agua",
            "Clavo y canela",
            "Azúcar al gusto",
            "Frutas picadas (manzana, piña)",
            "Chuño para espesar"
        ],
        preparacion: [
            "Hervir el maíz morado con canela y clavo por 25 minutos.",
            "Colar y agregar azúcar al gusto.",
            "Añadir fruta picada y dejar hervir 5 minutos.",
            "Agregar chuño disuelto para espesar.",
            "Servir caliente o frío."
        ]
    },

    {
        nombre: "Api de Maíz Morado",
        imagen: "https://i.postimg.cc/ZKqkQ23L/Diseno-sin-titulo-18.png",
        descripcion: "Una bebida caliente y nutritiva ideal para las mañanas.",
        tiempo: "20 minutos",
        dificultad: "Fácil",
        ingredientes: [
            "Harina de maíz morado",
            "Agua",
            "Canela y clavo",
            "Azúcar",
            "Cáscara de naranja"
        ],
        preparacion: [
            "Hervir agua con canela, clavo y cáscara de naranja.",
            "Mezclar harina de maíz morado con agua fría.",
            "Agregar la mezcla al hervor y mover.",
            "Cocinar 10 minutos y endulzar."
        ]
    },

    {
        nombre: "Panqueques con 7 Cereales",
        imagen: "https://i.postimg.cc/R07D2cTn/Diseno-sin-titulo-19.png",
        descripcion: "Suaves, nutritivos y perfectos para el desayuno.",
        tiempo: "15 minutos",
        dificultad: "Fácil",
        ingredientes: [
            "1 taza de harina de 7 cereales",
            "1 huevo",
            "½ taza de leche",
            "1 cucharada de azúcar",
            "1 cucharadita de polvo de hornear"
        ],
        preparacion: [
            "Mezclar todos los ingredientes.",
            "Calentar una sartén con un poco de mantequilla.",
            "Verter porciones pequeñas.",
            "Cocinar ambos lados hasta dorar."
        ]
    },

    {
        nombre: "Galletas de Quinua",
        imagen: "https://i.postimg.cc/BbBD0nVT/Diseno-sin-titulo-20.png",
        descripcion: "Crujientes y llenas de energía.",
        tiempo: "25 minutos",
        dificultad: "Media",
        ingredientes: [
            "1 taza de harina de quinua",
            "1 huevo",
            "3 cucharadas de azúcar",
            "Mantequilla (2 cucharadas)"
        ],
        preparacion: [
            "Mezclar la mantequilla con el azúcar.",
            "Agregar el huevo y la harina.",
            "Formar bolitas y aplastar suavemente.",
            "Hornear 12 minutos a 180°C."
        ]
    },
    {
        nombre: "Pudín de Chocolate Casero",
        imagen: "https://i.postimg.cc/gkpQqtyK/Diseno-sin-titulo-21.png",
        descripcion: "Un postre suave, fácil y perfecto para toda la familia.",
        tiempo: "10 minutos",
        dificultad: "Fácil",
        ingredientes: [
            "1 sobre de pudín 150 gr",
            "3 tazas de leche",
            "4 cucharadas de azúcar",
            "Esencia de vainilla (opcional)"
        ],
        preparacion: [
            "Mezclar el pudín con el azúcar en una olla.",
            "Agregar la leche poco a poco y mover para evitar grumos.",
            "Cocinar a fuego medio sin dejar de mover hasta espesar.",
            "Agregar un toque de esencia de vainilla si deseas.",
            "Servir en vasos y refrigerar antes de consumir."
        ]
    },
    {
        nombre: "Galletas de Soya con Plátano",
        imagen: "https://i.postimg.cc/WpYq0xP0/Diseno-sin-titulo-22.png",
        descripcion: "Galletas suaves, nutritivas y con un sabor dulce natural.",
        tiempo: "20 minutos",
        dificultad: "Fácil",
        ingredientes: [
            "4 cucharadas de Soya con Plátano (150 g)",
            "1 huevo",
            "2 cucharadas de azúcar",
            "2 cucharadas de mantequilla derretida",
            "4 cucharadas de harina",
            "1 cucharadita de polvo de hornear"
        ],
        preparacion: [
            "Mezclar la mantequilla derretida con el azúcar.",
            "Agregar el huevo y batir bien.",
            "Añadir la soya con plátano y mezclar.",
            "Incorporar la harina y el polvo de hornear.",
            "Formar pequeñas bolitas y colocarlas en una bandeja.",
            "Aplastar suavemente y hornear 10–12 minutos a 180°C."
        ]
    }


];

const Recetas = () => {
    const [modalReceta, setModalReceta] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="recetas-page bg-[#fff8f8] min-h-screen py-16 px-6">
            <h1 className="titulo-principal">
                Recetas Doña Martha 🍽️
            </h1>

            <p className="texto-intro">
                Deliciosas ideas preparadas con nuestros mejores productos.
                ¡Haz clic en cualquier receta para ver cómo prepararla!
            </p>

            {/* === GRID DE RECETAS === */}
            <div className="recetas-grid">
                {recetas.map((r, index) => (
                    <div
                        key={index}
                        className="receta-card"
                        data-aos="fade-up"
                    >
                        <img src={r.imagen} className="receta-img" alt={r.nombre} />
                        <h3 className="receta-title">{r.nombre}</h3>
                        <p className="receta-desc">{r.descripcion}</p>

                        <button
                            className="receta-btn"
                            onClick={() => setModalReceta(r)}
                        >
                            Ver receta
                        </button>
                    </div>
                ))}
            </div>

            {/* === MODAL === */}
            {modalReceta && (
                <div className="modal-overlay" onClick={() => setModalReceta(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setModalReceta(null)}>✕</button>

                        <img src={modalReceta.imagen} className="modal-img" alt="" />

                        <h2 className="modal-title">{modalReceta.nombre}</h2>

                        <p className="modal-sub">
                            <strong>Tiempo:</strong> {modalReceta.tiempo} |
                            <strong> Dificultad:</strong> {modalReceta.dificultad}
                        </p>

                        <h3 className="modal-section-title">Ingredientes:</h3>
                        <ul className="modal-list">
                            {modalReceta.ingredientes.map((i, idx) => (
                                <li key={idx}>• {i}</li>
                            ))}
                        </ul>

                        <h3 className="modal-section-title">Preparación:</h3>
                        <ol className="modal-list">
                            {modalReceta.preparacion.map((p, idx) => (
                                <li key={idx}>{idx + 1}. {p}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recetas;
