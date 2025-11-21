import React, { useState } from "react";
import "./Productos.css";

const productos = [
    { nombre: "Gelatina Chicle", peso: "100 gr", imagen: "https://i.postimg.cc/0N6Ftndm/f8d6f64e-f017-46d8-a637-95dd950849db.jpg", descripcion: "Postre colorido sabor a chicle." },
    { nombre: "Gelatina Fresa", peso: "100 gr", imagen: "https://i.postimg.cc/26GQnRbt/31796b6c-5aa8-42af-a183-7ca367b1802c.jpg", descripcion: "Gelatina sabor a fresa natural." },
    { nombre: "Gelatina Naranja", peso: "100 gr", imagen: "https://i.postimg.cc/4Nm6H0JS/77537f08-5067-4a41-802c-1e49af92a609.jpg", descripcion: "Gelatina sabor a naranja refrescante." },
    { nombre: "Gelatina Piña", peso: "100 gr", imagen: "https://i.postimg.cc/DzKLDy1Y/023ec4b0-a813-41ee-b84f-e9b727e66c7b.jpg", descripcion: "Gelatina sabor tropical a piña." },
    { nombre: "Gelatina Fresa", peso: "150 gr", imagen: "https://i.postimg.cc/T1hDmyXM/9c09072e-9624-4907-aa3b-e38c5bb6cea2.jpg", descripcion: "Gelatina sabor a fresa natural." },
    { nombre: "Gelatina Naranja", peso: "150 gr", imagen: "https://i.postimg.cc/W10JMLxw/2d59306c-ec5c-4b71-8710-89e71e2afae6.jpg", descripcion: "Gelatina sabor a naranja refrescante." },
    { nombre: "Gelatina Piña", peso: "150 gr", imagen: "https://i.postimg.cc/ydpJVVSs/938f10dc-a6dc-4214-8077-9c7d13acae76.jpg", descripcion: "Gelatina sabor tropical a piña." },
    { nombre: "Mazamorra Durazno", peso: "100 gr", imagen: "https://i.postimg.cc/BnfjZ7t1/bd910237-0a15-48d9-be2c-92c214172082.jpg", descripcion: "Postre instantáneo sabor a durazno." },
    { nombre: "Mazamorra Morada", peso: "100 gr", imagen: "https://i.postimg.cc/bJrJVKVB/5baf6105-c68a-4180-b0eb-c8185dafd725.jpg", descripcion: "Clásico postre peruano de maíz morado." },
    { nombre: "Mazamorra Piña", peso: "100 gr", imagen: "https://i.postimg.cc/yW48dW6z/ceaeccaa-7bb2-441f-9889-d48f428d3e30.jpg", descripcion: "Postre sabor tropical a piña." },
    { nombre: "Mazamorra Durazno", peso: "200 gr", imagen: "https://i.postimg.cc/tgCWyvmx/aff4634b-835b-40b1-8f41-21fb4e2d383a.jpg", descripcion: "Tamaño familiar del postre sabor a durazno." },
    { nombre: "Mazamorra Morada", peso: "200 gr", imagen: "https://i.postimg.cc/nzXm9jxm/d38e4765-6044-4d1c-b468-3515c136e769.jpg", descripcion: "Tamaño familiar del postre morado tradicional." },
    { nombre: "Mazamorra Piña", peso: "200 gr", imagen: "https://i.postimg.cc/zDRWJgpp/db6217e6-562c-42a6-a69a-11848554d8ec.jpg", descripcion: "Versión familiar del postre sabor a piña." },
    { nombre: "Flan de Chocolate", peso: "100 gr", imagen: "https://i.postimg.cc/L6t1PFcT/4e168e73-1c26-4366-897d-7ac74c9c8b3c.jpg", descripcion: "Postre instantáneo sabor a chocolate." },
    { nombre: "Flan de Vainilla", peso: "100 gr", imagen: "https://i.postimg.cc/tgTZ8ZYF/03934ee1-10aa-46b8-8f96-9988868f4f9a.jpg", descripcion: "Postre instantáneo sabor a vainilla." },
    { nombre: "Pudín", peso: "150 gr", imagen: "https://i.postimg.cc/j2VDWMvF/6ccf75bb-e78b-40ad-b07a-664c01310adc.jpg", descripcion: "Postre instantáneo cremoso y delicioso." },
    { nombre: "7 Cereales", peso: "150 gr", imagen: "https://i.postimg.cc/nVgcd9GR/9019d56d-49f1-4b12-98b0-e480cfca6693.jpg", descripcion: "Mezcla natural de 7 granos andinos, fuente de energía y fibra." },
    { nombre: "Api", peso: "150 gr", imagen: "https://i.postimg.cc/FzdCsHzP/317df8fe-7ef3-47d3-9dce-385faaa2ee52.jpg", descripcion: "Bebida tradicional andina hecha a base de maíz morado y especias." },
    { nombre: "Chococañihua", peso: "150 gr", imagen: "https://i.postimg.cc/3wrTr2TX/aba33d9f-0108-4213-952a-e17d62558158.jpg", descripcion: "Mezcla energética con cañihua y cacao natural, ideal para el desayuno." },
    { nombre: "Maca con Naranja", peso: "150 gr", imagen: "https://i.postimg.cc/Df4Kz2tR/cb8125da-800b-49a9-99b0-aeffa6469593.jpg", descripcion: "Delicioso mix con maca andina y esencia natural de naranja." },
    { nombre: "Quinua con Manzana", peso: "140 gr", imagen: "https://i.postimg.cc/cJLpGZ7S/fc62a8a0-b64e-4b2d-9a38-c2d26f61896e.jpg", descripcion: "Harina instantánea de quinua con sabor natural a manzana." },
    { nombre: "Soya con Plátano", peso: "150 gr", imagen: "https://i.postimg.cc/Df4Kz2tR/cb8125da-800b-49a9-99b0-aeffa6469593.jpg", descripcion: "Fusión de soya y plátano, rica en proteínas vegetales." },
    { nombre: "Crema de Habas", peso: "150 gr", imagen: "https://i.postimg.cc/SKPv09N9/8000e2db-b80b-4e93-9f27-61ee8c23692c.jpg", descripcion: "Crema instantánea de habas, nutritiva y fácil de preparar." },
    { nombre: "Maizena", peso: "100 gr", imagen: "https://i.postimg.cc/CxF9TDkj/7ebf3501-f633-4bc8-ba83-11bd90ccd622.jpg", descripcion: "Almidón de maíz, ideal para postres y salsas." },
    { nombre: "Maizena", peso: "200 gr", imagen: "https://i.postimg.cc/1zddqj2P/d7c260db-ccf3-46ac-9022-602c5fa0e82a.jpg", descripcion: "Presentación mediana de maizena pura." },
    { nombre: "Maizena", peso: "4 kg", imagen: "https://i.postimg.cc/PJWV0rx5/a357a1ab-1982-48c8-bce5-6d1b57bf06c9.jpg", descripcion: "Uso industrial en repostería o panadería." },
    { nombre: "Chuño", peso: "100 gr", imagen: "https://i.postimg.cc/zXNcKWtB/730ef054-f9de-4cef-a9ee-bad30218a90a.jpg", descripcion: "Papa deshidratada andina, ideal para sopas." },
    { nombre: "Chuño", peso: "200 gr", imagen: "https://i.postimg.cc/gkKBDJQS/fb148000-5340-4019-b20e-7fcbf6a38d94.jpg", descripcion: "Versión más grande para uso familiar." },
    { nombre: "Mandioca", peso: "4 kg", imagen: "https://i.postimg.cc/SxvdTzrc/b073ae74-9325-40cd-ade7-7b955c47d6ff.jpg", descripcion: "Yuca seca molida, ideal para guisos." },
    { nombre: "Harina", peso: "4 kg", imagen: "https://i.postimg.cc/6Q8jth3k/ead125bf-4750-4bd1-96cb-a7841ee9a77b.jpg", descripcion: "Harina blanca de uso general para repostería." },
    { nombre: "Harina", peso: "200 gr", imagen: "https://i.postimg.cc/kMsxYbMr/33b510d3-a3b8-42a7-84cb-39e0ac67b9dd.jpg", descripcion: "Presentación pequeña para uso doméstico." },
    { nombre: "Azúcar Blanca", peso: "1 kg", imagen: "https://i.postimg.cc/gJYx3gZy/32b193a1-0621-4a0f-9cf1-e211e3b9d896.jpg", descripcion: "Azúcar refinada de alta pureza." },
    { nombre: "Azúcar Blanca", peso: "5 kg", imagen: "https://i.postimg.cc/pXgysWjb/69f30bd6-5b94-471c-bdbc-c966e78cb76e.jpg", descripcion: "Presentación familiar de azúcar blanca." },
    { nombre: "Azúcar Impalpable", peso: "150 gr", imagen: "https://i.postimg.cc/fyVTvpTv/c298b003-adff-433d-8bb8-974435b8fa6a.jpg", descripcion: "Perfecta para repostería y glaseados." },
    { nombre: "Azúcar Rubia", peso: "1 kg", imagen: "https://i.postimg.cc/wBxtmWJw/3479039b-e5d7-4eff-90b8-c0fef7f0fce2.jpg", descripcion: "Azúcar rubia natural, menos procesada y con sabor suave." },
    { nombre: "Azúcar Rubia", peso: "5 kg", imagen: "https://i.postimg.cc/hGCXb91t/57bae9ec-2912-445c-8bb8-349a19179c68.jpg", descripcion: "Presentación económica de azúcar rubia." },
    { nombre: "Bicarbonato de Sodio", peso: "100 gr", imagen: "https://i.postimg.cc/bYSZkSGx/a946c083-8282-4fbe-a73c-c9e77f32e20b.jpg", descripcion: "Multiusos: cocina, limpieza y repostería." },
    { nombre: "Chaquepa", peso: "5 kg", imagen: "https://i.postimg.cc/5NwjkcSY/15d86c44-3d9c-4143-b5ec-dfa82091b895.jpg", descripcion: "Grano andino rico en proteínas y fibra." },
    { nombre: "Colapiz", peso: "20 gr", imagen: "https://i.postimg.cc/T301frS1/7b469dbd-f760-48df-8521-11ed0389db75.jpg", descripcion: "Gelatina sin sabor, ideal para postres." },
    { nombre: "Polvo de Hornear", peso: "20 gr", imagen: "https://i.postimg.cc/QCv5gpsH/321389de-edcf-40fe-849b-de0d5bf5bbbc.jpg", descripcion: "Leudante esencial para repostería." },
    { nombre: "Esencia de Vainilla", peso: "30 ml", imagen: "https://i.postimg.cc/bvFv2qqh/b4457a7c-fd1a-4a1d-b828-e9f218b7e46e.jpg", descripcion: "Aroma clásico para postres." },
    { nombre: "Esencia de Vainilla", peso: "90 ml", imagen: "https://i.postimg.cc/3RsJn9ys/6a018bb0-4647-4f46-8205-2ee691e85785.jpg", descripcion: "Esencia con aroma intenso y duradero." },
    { nombre: "Esencia de Vainilla", peso: "1 litro", imagen: "https://i.postimg.cc/vT58j9f5/6175d763-a6f7-477c-b9ce-a07cea7139d6.jpg", descripcion: "Ideal para panaderías o repostería comercial." },
    { nombre: "Filete de Atún", peso: "170 gr", imagen: "https://i.postimg.cc/Hs4s9wTX/51dafeb6-ac29-4696-ac51-2577db8c7ece.jpg", descripcion: "Filete de atún en conserva, rico en proteínas." },
    { nombre: "Grated de Anchoveta Coral Azul", peso: "170 gr", imagen: "https://i.postimg.cc/GpbMs1qx/bc85f456-a716-4b73-a4df-4710b3ab9682.jpg", descripcion: "Práctico grated de anchoveta, listo para servir y rico en Omega 3." },
    { nombre: "Filete de Caballa Coral Azul", peso: "170 gr", imagen: "https://i.postimg.cc/Hs7vqzrz/61537cc2-e0fe-47ea-897c-6f6e8c61c9d5.jpg", descripcion: "Filetes de caballa de gran sabor y alto contenido nutritivo." },
    { nombre: "Frejol", peso: "500 gr", imagen: "https://i.postimg.cc/28mCy1nw/283efafc-c130-4a52-b732-fa4c5280594a.jpg", descripcion: "Frejol nacional seleccionado." },
    { nombre: "Frejol Importado", peso: "5 kg", imagen: "https://i.postimg.cc/Mp96hzMT/a3a2661c-c5d2-4685-89fe-3895603dff80.jpg", descripcion: "Frejol importado de alta calidad." },
    { nombre: "Garbanzo", peso: "1 kg", imagen: "https://i.postimg.cc/xTjBBMvr/9dc3d195-fe97-4123-8b7e-67f7685ce5eb.jpg", descripcion: "Grano nutritivo ideal para sopas y ensaladas." },
    { nombre: "Harina de 7 Cereales", peso: "200 gr", imagen: "https://i.postimg.cc/FH8qf62r/f0596bff-4433-4598-be0a-f7db2b55550d.jpg", descripcion: "Mezcla nutritiva de 7 cereales molidos." },
    { nombre: "Harina de 7 Cereales", peso: "5 kg", imagen: "https://i.postimg.cc/FRQBpLr0/5d379a6d-e9d8-4e46-af4e-a6ae62958bc3.jpg", descripcion: "Presentación industrial de harina de cereales." },
    { nombre: "Harina de Chuño Negro", peso: "5 kg", imagen: "https://i.postimg.cc/sxj0dCZS/81d38fd3-8a11-4906-86ac-03b5fe2334e4.jpg", descripcion: "Chuño molido fino, ideal para postres tradicionales." },
    { nombre: "Harina de Habas", peso: "5 kg", imagen: "https://i.postimg.cc/jdjkMKb9/44b46747-5070-423d-bb70-0caa2d51a660.jpg", descripcion: "Harina rica en proteínas vegetales." },
    { nombre: "Lenteja BB", peso: "5 kg", imagen: "https://i.postimg.cc/y8gpzPWg/a9fec0c8-40a5-4230-8c4e-ffb3c978005a.jpg", descripcion: "Lenteja de alta calidad para sopas y guisos." },
    { nombre: "Lenteja", peso: "200 gr", imagen: "https://i.postimg.cc/Cx3PMqqh/4e6f6a1c-314c-4ce8-92cb-6573a31cdf0d.jpg", descripcion: "Presentación doméstica de lentejas seleccionadas." },
    { nombre: "Lenteja", peso: "500 gr", imagen: "https://i.postimg.cc/28mCy1nw/283efafc-c130-4a52-b732-fa4c5280594a.jpg", descripcion: "Lenteja lista para cocinar." },
    { nombre: "Lentejón", peso: "5 kg", imagen: "https://i.postimg.cc/pLcvsk4D/e89ecff1-bba5-46b1-a186-f85c05849953.jpg", descripcion: "Variedad de lenteja más grande y sabrosa." },
    { nombre: "Machacado", peso: "4 kg", imagen: "https://i.postimg.cc/NFtvKn9n/f09c4a23-f4b5-4348-8aea-f80888075fd1.jpg", descripcion: "Maíz tostado triturado, ideal para bebidas." },
    { nombre: "Maiz Cabanita", peso: "4 kg", imagen: "https://i.postimg.cc/rFQ2pQVF/dc6a5a8e-5249-4682-80af-88190d9b5a0f.jpg", descripcion: "Maíz tradicional de los Andes peruanos." },
    { nombre: "Maíz Santo Tomás", peso: "4 kg", imagen: "https://i.postimg.cc/B6MBFLXS/c48364bf-13b3-4502-bd50-4a623c66cf78.jpg", descripcion: "Variedad de maíz blanco de alta calidad." },
    { nombre: "Morón", peso: "5 kg", imagen: "https://i.postimg.cc/cCz7DpR9/7cfa4a07-5094-4387-9dad-7a072d11bc26.jpg", descripcion: "Maíz molido grueso usado para sopas y guisos." },
    { nombre: "Pallar", peso: "5 kg", imagen: "https://i.postimg.cc/L6q3qsR9/4f320296-9930-43ff-8a9d-f4ac9d699fde.jpg", descripcion: "Grano andino de gran tamaño y sabor suave." },
    { nombre: "Pallar", peso: "500 gr", imagen: "https://i.postimg.cc/PqHWFzDC/412481c2-af3a-4ed7-ab20-8b65f754740b.jpg", descripcion: "Presentación familiar de pallares frescos." },
    { nombre: "Pan Molido", peso: "20 gr", imagen: "https://i.postimg.cc/HxsQTYBV/f2e816ef-e485-4465-b2ae-0e08dec760b0.jpg", descripcion: "Ideal para apanados y croquetas." },
    { nombre: "Pop Corn", peso: "200 gr", imagen: "https://i.postimg.cc/L6Zj90BX/2d13c906-aeab-4f6c-abaa-26270e93f557.jpg", descripcion: "Maíz para canchita de excelente calidad." },
    { nombre: "Pop Corn", peso: "500 gr", imagen: "https://i.postimg.cc/tTMVyhsn/a96e29a8-5f34-45af-b2da-dbf342826b18.jpg", descripcion: "Tamaño familiar para preparar en casa." },
    { nombre: "Pop Corn", peso: "5 kg", imagen: "https://i.postimg.cc/3WM40YCT/666d75ae-b2c0-4f3f-a5cf-4dfa1ef9a1b1.jpg", descripcion: "Presentación industrial para negocio." },
    { nombre: "Arveja", peso: "5 kg", imagen: "https://i.postimg.cc/rwBWRGjn/9cdb69f6-68ad-42d5-b521-0f54a6ae9c2d.jpg", descripcion: "Arveja seleccionada, ideal para sopas y guisos." },
    { nombre: "Arveja", peso: "500 gr", imagen: "https://i.postimg.cc/sfTh4CKj/826be78b-3105-4204-83f0-03f90ebcd5c6.jpg", descripcion: "Arveja partida lista para cocinar." },
    { nombre: "Sal Yodada Doña Martha", peso: "1 kg", imagen: "https://i.postimg.cc/mZPm9jNX/342073b6-1209-4201-9688-034589d5a4af.jpg", descripcion: "Sal yodada de calidad para uso diario." },
    { nombre: "Sal Parrilera", peso: "750 gr", imagen: "https://i.postimg.cc/FscGWK6P/81b0ed40-a9d4-454f-9889-4dc30a251df3.jpg", descripcion: "Sal gruesa ideal para parrillas y asados, realza el sabor de cada preparación." },
    { nombre: "Sémola", peso: "200 gr", imagen: "https://i.postimg.cc/mrZwgygj/2dce55fa-7bc0-4a1f-b8de-a0c07af13996.jpg", descripcion: "Ideal para postres y sopas." },
    { nombre: "Soya", peso: "4 kg", imagen: "https://i.postimg.cc/N0Nx92y9/a477cebc-bee3-4f91-9f27-66ebac556027.jpg", descripcion: "Grano de soya natural, alto en proteínas." },
    { nombre: "Trigo Pelado", peso: "5 kg", imagen: "https://i.postimg.cc/ZR2Fjkxb/567251fb-a753-4a63-bd4b-13ce2d5ab2be.jpg", descripcion: "Trigo pelado tradicional para guisos." },
    { nombre: "Trigo Mote", peso: "5 kg", imagen: "https://i.postimg.cc/J7HQ0nM9/3bd3043e-e8a4-4512-807e-d278001d162f.jpg", descripcion: "Grano de trigo cocido y seco, típico de la sierra." },
    { nombre: "Trigor", peso: "5 kg", imagen: "https://i.postimg.cc/zfPnXmMz/fd392855-a15b-45a9-82d4-8927ecf7574d.jpg", descripcion: "Producto a base de trigo molido." },
];

const Productos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // FILTRAR PRODUCTOS
  const productosFiltrados = productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="productos-container">
      <h1 className="titulo">Nuestros Productos</h1>
      <p className="descripcion">
        Descubre la familia de productos Doña Martha 🌾  
        Calidad y tradición para tu hogar.
      </p>

      {/* 🔎 BARRA DE BÚSQUEDA */}
      <input
        type="text"
        placeholder="Buscar producto..."
        className="buscador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* GRID */}
      <div className="productos-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod, index) => (
            <div
              key={index}
              className="producto-card"
              onClick={() => setProductoSeleccionado(prod)}
            >
              <img src={prod.imagen} alt={prod.nombre} className="producto-img" />
              <h3>{prod.nombre}</h3>
              <p className="peso">{prod.peso}</p>
            </div>
          ))
        ) : (
          <p className="no-resultados">No se encontró ningún producto.</p>
        )}
      </div>

      {/* MODAL */}
      {productoSeleccionado && (
        <div className="modal-overlay" onClick={() => setProductoSeleccionado(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar-btn" onClick={() => setProductoSeleccionado(null)}>✕</button>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              className="modal-img"
            />
            <h2>{productoSeleccionado.nombre}</h2>
            <p className="modal-peso">{productoSeleccionado.peso}</p>
            <p className="modal-descripcion">{productoSeleccionado.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;