import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Camita naranja con rayas", image: "/Productos/cama 2.jpeg", price: "$12.500" },
  { id: 2, name: "Camita azul con hueso amarillo", image: "/Productos/cama 7.jpeg", price: "$11.000" },
  { id: 3, name: "Sillon de viaje con cinturon de seguridad", image: "/Productos/cama de viaje con cinturon de seguridad.jpeg", price: "$15.000" },
  { id: 4, name: "Camita naranja con perritos", image: "/Productos/cama 4.jpeg", price: "$12.500" },
  { id: 5, name: "Camita verde con ojas", image: "/Productos/cama 6.jpeg", price: "$13.000" },
  { id: 6, name: "Camita de colores", image: "/Productos/cama 3.jpeg", price: "$11.800" },
  { id: 7, name: "Gorro para el sol", image: "/Productos/gorros.jpeg", price: "$5.000" },
  { id: 8, name: "Camita rosa", image: "/Productos/cama 5.jpeg", price: "$11.200" },
];

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <button className="btn-small" onClick={() => navigate(`/producto/${product.id}`)}>
        Ver
      </button>
    </div>
  );
}

export default function ProductList() {
  return (
    <section id="productos" className="products-section">
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

