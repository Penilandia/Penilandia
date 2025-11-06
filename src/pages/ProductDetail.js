import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart, ChevronDown } from "lucide-react";

const products = [
  { id: 1, name: "Camita naranja con rayas", image: "/Productos/cama 2.jpeg", price: "$18.000", description: "Camita suave con diseño a rayas naranja y blanco. Ideal para mascotas pequeñas, hecha a mano con materiales hipoalergénicos." },
  { id: 2, name: "Camita azul con hueso amarillo", image: "/Productos/cama 7.jpeg", price: "$28.000", description: "Camita acolchonada color azul con hueso decorativo amarillo. Perfecta para el descanso de tu mascota." },
  { id: 3, name: "Sillón de viaje con cinturón", image: "/Productos/cama de viaje con cinturon de seguridad.jpeg", price: "$35.000", description: "Sillón de viaje con cinturón de seguridad incluido, brinda comodidad y protección durante los viajes en auto." },
  { id: 4, name: "Camita naranja con perritos", image: "/Productos/cama 4.jpeg", price: "$33.000", description: "Camita color naranja con estampado de perritos. Con base antideslizante y tela lavable." },
  { id: 5, name: "Camita verde con hojas", image: "/Productos/cama 6.jpeg", price: "$18.000", description: "Camita verde inspirada en la naturaleza. Hecha con telas resistentes y suaves al tacto." },
  { id: 6, name: "Camita de colores", image: "/Productos/cama 3.jpeg", price: "$40.000", description: "Camita multicolor alegre y moderna. Ideal para darle un toque divertido a tu hogar." },
  { id: 7, name: "Gorro para el sol", image: "/Productos/gorros.jpeg", price: "$10.000", description: "Gorro liviano para proteger del sol a tu mascota durante los paseos.", variants: ["Rosa con rayas", "Rosa con dibujos", "Marron con patitas","Gris con dibujos", "Rosa y amarillo", "Dibujos multicolodr", "Azul con rayas"] },
  { id: 8, name: "Camita rosa", image: "/Productos/cama 5.jpeg", price: "$37.000", description: "Camita rosa pastel, muy mullida y cómoda. Confeccionada con mucho amor 💕." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div style={{ padding: "40px" }}>Producto no encontrado</div>;

  const handleAddToCart = () => {
    const productToAdd = selectedVariant
      ? { ...product, name: `${product.name} - ${selectedVariant}` }
      : product;
    addToCart(productToAdd);
  };

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Volver
      </button>

      <div className="product-detail-card">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-img" />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>

          {product.variants && (
            <div className="variant-selector">
              <p>Elegí tu gorro:</p>
              <div className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <button className="dropdown-btn">
                  {selectedVariant || "-- Seleccioná una opción --"} <ChevronDown size={16} />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-content">
                    {product.variants.map((v) => (
                      <div
                        key={v}
                        className="dropdown-item"
                        onClick={() => {
                          setSelectedVariant(v);
                          setDropdownOpen(false);
                        }}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="buttons">
            <button className="btn-add" onClick={handleAddToCart}>
              <ShoppingCart size={18} /> Agregar al carrito
            </button>

            <button
              className="btn-buy"
              onClick={() => {
                handleAddToCart();
                navigate("/carrito");
              }}
            >
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

