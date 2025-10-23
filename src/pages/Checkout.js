import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css"; // Asegurate de tener el CSS que te pasé antes

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("domicilio");
  const [paymentMethod, setPaymentMethod] = useState("efectivo");

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);

  const handleNext = () => {
    if (step === 1 && (!email || !name)) return alert("Completá tu nombre y email");
    if (step === 2 && deliveryMethod === "domicilio" && !address) return alert("Ingresá tu dirección");
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleConfirm = () => {
    // Armar mensaje para WhatsApp
    const itemsList = cartItems
      .map(item => `${item.name} x ${item.quantity || 1}`)
      .join("%0A");

    const message = `¡Hola! Quiero realizar mi compra:%0A%0A` +
                    `Productos:%0A${itemsList}%0A%0A` +
                    `Total: $${total.toLocaleString()}%0A` +
                    `Nombre: ${name}%0A` +
                    `Email: ${email}%0A` +
                    (deliveryMethod === "domicilio" ? `Dirección: ${address}%0A` : "") +
                    `Forma de entrega: ${deliveryMethod}%0A` +
                    `Medio de pago: ${paymentMethod}`;

    // ⚠️ Reemplaza con tu número de WhatsApp (sin + ni espacios)
    const phoneNumber = "2342512132";

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    // Limpiar carrito y volver a inicio
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>No hay productos en el carrito</h2>
        <button className="btn-back" onClick={() => navigate("/")}>Volver a la tienda</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Finalizar Compra</h2>

      <div className="checkout-container">
        <div className="checkout-steps">
          {/* Step 1: Datos personales */}
          {step === 1 && (
            <div className="step-card">
              <h3>1. Tus datos</h3>
              <label>
                Nombre completo:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </label>
            </div>
          )}

          {/* Step 2: Dirección */}
          {step === 2 && (
            <div className="step-card">
              <h3>2. Dirección de entrega</h3>
              <label>
                Forma de entrega:
                <select value={deliveryMethod} onChange={e => setDeliveryMethod(e.target.value)}>
                  <option value="domicilio">Envío a domicilio</option>
                  <option value="retiro">Retiro en tienda</option>
                </select>
              </label>
              {deliveryMethod === "domicilio" && (
                <label>
                  Dirección:
                  <input type="text" value={address} onChange={e => setAddress(e.target.value)} required />
                </label>
              )}
            </div>
          )}

          {/* Step 3: Pago */}
          {step === 3 && (
            <div className="step-card">
              <h3>3. Método de pago</h3>
              <div className="payment-options">
                <label className={`payment-card ${paymentMethod === "efectivo" ? "selected" : ""}`}>
                  <input type="radio" value="efectivo" checked={paymentMethod==="efectivo"} onChange={e=>setPaymentMethod(e.target.value)} />
                  Efectivo
                </label>
                <label className={`payment-card ${paymentMethod === "tarjeta" ? "selected" : ""}`}>
                  <input type="radio" value="tarjeta" checked={paymentMethod==="tarjeta"} onChange={e=>setPaymentMethod(e.target.value)} />
                  Tarjeta
                </label>
                <label className={`payment-card ${paymentMethod === "transferencia" ? "selected" : ""}`}>
                  <input type="radio" value="transferencia" checked={paymentMethod==="transferencia"} onChange={e=>setPaymentMethod(e.target.value)} />
                  Transferencia
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Resumen */}
          {step === 4 && (
            <div className="step-card">
              <h3>4. Resumen de tu pedido</h3>
              <ul>
                {cartItems.map(item=>(
                  <li key={item.id}>{item.name} - {item.price} x {item.quantity || 1}</li>
                ))}
              </ul>
              <h3>Total: ${total.toLocaleString()}</h3>
            </div>
          )}

          <div className="step-buttons">
            {step > 1 && <button type="button" onClick={handlePrevious}>Anterior</button>}
            {step < 4 && <button type="button" onClick={handleNext}>Siguiente</button>}
            {step === 4 && <button type="button" onClick={handleConfirm} className="btn-confirm">Confirmar Compra</button>}
          </div>
        </div>

        {/* Resumen lateral */}
        <div className="checkout-summary">
          <h3>Resumen rápido</h3>
          <ul>
            {cartItems.map(item=>(
              <li key={item.id}>{item.name} - {item.price} x {item.quantity || 1}</li>
            ))}
          </ul>
          <h3>Total: ${total.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
}
