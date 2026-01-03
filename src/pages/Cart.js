import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Tu carrito está vacío </h2>
        <button className="btn-back" onClick={() => navigate("/")}>
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Mi carrito </h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="quantity">
                <span>Cantidad: {item.quantity || 1}</span>
              </div>
            </div>
            <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h3>Total: ${total.toLocaleString()}</h3>
        <div className="cart-actions">
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button
            className="btn-checkout"
            onClick={() => navigate("/checkout")} 
          >
            Iniciar compra
          </button>
        </div>
      </div>
    </div>
  );
}
