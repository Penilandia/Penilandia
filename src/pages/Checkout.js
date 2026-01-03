import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);

  const handleWhatsApp = () => {
    const itemsList = cartItems
      .map(item => `- ${item.name} x ${item.quantity || 1}`)
      .join("%0A");

    const message =
      `Hola! Quiero hacer un pedido %0A%0A` +
      `Productos:%0A${itemsList}%0A%0A` +
      `Total: $${total.toLocaleString()}`;

    const phoneNumber = "5492342512132";

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>No hay productos en el carrito</h2>
        <button className="btn-back" onClick={() => navigate("/")}>
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Resumen de tu pedido</h2>

      <ul className="checkout-list">
        {cartItems.map(item => (
          <li key={item.id} className="checkout-item">
            <img
              src={item.image}
              alt={item.name}
              className="checkout-item-img"
            />

            <div className="checkout-item-info">
              <span className="checkout-item-name">{item.name}</span>
              <span className="checkout-item-price">
                {item.quantity || 1} x {item.price}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="checkout-total">
        Total: ${total.toLocaleString()}
      </h3>

      <button className="btn-confirm" onClick={handleWhatsApp}>
        Finalizar pedido por WhatsApp
      </button>
    </div>
  );
}
