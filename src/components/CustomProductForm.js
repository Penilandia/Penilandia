import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function CustomProductForm() {
  const { addToCart } = useCart();
  const [selectedFabric, setSelectedFabric] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

 const telas = [
  { id: "tela1", img: "/Telas/Tela1.jpeg" },
  { id: "tela2", img: "/Telas/Tela2.jpeg" },
  { id: "tela3", img: "/Telas/Tela3.jpeg" },
  { id: "tela4", img: "/Telas/Tela4.jpeg" },
  { id: "tela5", img: "/Telas/Tela5.jpeg" },
  { id: "tela6", img: "/Telas/Tela13.jpeg" },
  { id: "tela7", img: "/Telas/Tela7.jpeg" },
  { id: "tela8", img: "/Telas/Tela8.jpeg" },
  { id: "tela9", img: "/Telas/Tela9.jpeg" },
  { id: "tela10", img: "/Telas/Tela10.jpeg" },
  { id: "tela11", img: "/Telas/Tela11.jpeg" },
  { id: "tela12", img: "/Telas/Tela12.jpeg" },
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
