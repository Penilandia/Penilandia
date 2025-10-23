import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // 👈 importamos el contexto

function CustomProductForm() {
  const { addToCart } = useCart(); // 👈 hook del carrito
  const [selectedFabric, setSelectedFabric] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const telas = [
    { id: "tela1", img: "/telas/Tela 1.jpeg" },
    { id: "tela2", img: "/telas/Tela 2.jpeg" },
    { id: "tela3", img: "/telas/Tela 3.jpeg" },
    { id: "tela4", img: "/telas/Tela 4.jpeg" },
    { id: "tela5", img: "/telas/Tela 5.jpeg" },
    { id: "tela6", img: "/telas/Tela 7.jpeg" },
    { id: "tela7", img: "/telas/Tela 8.jpeg" },
    { id: "tela8", img: "/telas/Tela 9.jpeg" },
    { id: "tela9", img: "/telas/Tela 10.jpeg" },
    { id: "tela10", img: "/telas/Tela 11.jpeg" },
    { id: "tela11", img: "/telas/Tela 12.jpeg" },
    { id: "tela12", img: "/telas/Tela 13.jpeg" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFabric || !length || !width) {
      alert("Por favor completá todas las opciones antes de agregar al carrito.");
      return;
    }

    const product = {
      id: Date.now(), 
      name: `Camita personalizada`,
      image: telas.find((t) => t.id === selectedFabric)?.img,
      price: "$20.000", // string para evitar errores en Cart.js
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

