import React, { useState } from "react";
import { useCart } from "../context/CartContext";

// IMPORTAMOS TODAS LAS TELAS
import tela1 from "../assets/telas/Tela1.jpeg";
import tela2 from "../assets/telas/Tela2.jpeg";
import tela3 from "../assets/telas/Tela3.jpeg";
import tela4 from "../assets/telas/Tela4.jpeg";
import tela5 from "../assets/telas/Tela5.jpeg";
import tela6 from "../assets/telas/Tela6.jpeg";
import tela7 from "../assets/telas/Tela7.jpeg";
import tela8 from "../assets/telas/Tela8.jpeg";
import tela9 from "../assets/telas/Tela9.jpeg";
import tela10 from "../assets/telas/Tela10.jpeg";
import tela11 from "../assets/telas/Tela11.jpeg";
import tela12 from "../assets/telas/Tela12.jpeg";

function CustomProductForm() {
  const { addToCart } = useCart();
  const [selectedFabric, setSelectedFabric] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const telas = [
    { id: "tela1", img: tela1 },
    { id: "tela2", img: tela2 },
    { id: "tela3", img: tela3 },
    { id: "tela4", img: tela4 },
    { id: "tela5", img: tela5 },
    { id: "tela6", img: tela6 },
    { id: "tela7", img: tela7 },
    { id: "tela8", img: tela8 },
    { id: "tela9", img: tela9 },
    { id: "tela10", img: tela10 },
    { id: "tela11", img: tela11 },
    { id: "tela12", img: tela12 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFabric || !length || !width) {
      alert("Por favor completá todas las opciones antes de agregar al carrito.");
      return;
    }

    const product = {
      id: Date.now(),
      name: "Camita personalizada",
      image: telas.find((t) => t.id === selectedFabric)?.img,
      price: "$20.000",
      description: `Tela: ${selectedFabric}, Tamaño: ${length}x${width} cm`,
      length,
      width,
      fabric: selectedFabric,
    };

    addToCart(product);

    setSelectedFabric("");
    setLength("");
    setWidth("");
  };

  return (
    <form
      id="formulario-camita"
      className="custom-box horizontal-form"
      onSubmit={handleSubmit}
    >
      <div className="preview">
        <h4>Vista previa</h4>
        <div className="bed-preview">
          {selectedFabric ? (
            <img
              src={telas.find((t) => t.id === selectedFabric)?.img}
              alt="Vista previa"
            />
          ) : (
            <p>Seleccioná una tela</p>
          )}
          {length && width && <p>{length} x {width} cm</p>}
        </div>
      </div>

      <div className="options">
        <p>Elegí la tela:</p>
        <div className="telas-grid">
          {telas.map((tela) => (
            <label key={tela.id}>
              <input
                type="radio"
                name="tela"
                value={tela.id}
                checked={selectedFabric === tela.id}
                onChange={(e) => setSelectedFabric(e.target.value)}
                required
              />
              <img src={tela.img} alt={tela.id} />
            </label>
          ))}
        </div>

        <p>Ingresá las medidas del colchón (cm):</p>
        <div className="size-inputs">
          <input
            type="number"
            placeholder="Largo"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="10"
            max="200"
            required
          />
          <input
            type="number"
            placeholder="Ancho"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            min="10"
            max="200"
            required
          />
        </div>

        <button className="btn-hero" type="submit">
          Enviar al carrito
        </button>
      </div>
    </form>
  );
}

export default CustomProductForm;
