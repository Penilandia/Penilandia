import logo from "../Logo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false); 

  const goToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className="Logo">
        <img src={logo} alt="Penilandia Logo" className="logo-img" />
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`right-side ${menuOpen ? "active" : ""}`}>
        <nav className="nav">
          <button onClick={() => goToSection("inicio")}>Inicio</button>
          <button onClick={() => goToSection("productos")}>Productos</button>
          <button onClick={() => goToSection("personaliza")}>Personaliza</button>
          <Link to="/clientes">Clientes</Link>
          <button onClick={() => goToSection("contacto")}>Contacto</button>
        </nav>

        <div className="cart" onClick={() => navigate("/carrito")}>
          <ShoppingCart size={24} strokeWidth={2} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}


export default Header;
