import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleScrollTo = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src="/logo.png" alt="Logo Penilandia" className="footer-logo" />
          <p>
            Accesorios artesanales para mascotas, hechos con amor y dedicación 💖
            En Penilandia creemos que cada peludo merece algo único.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Información</h3>
            <ul>
              <li>
                <Link to="/about">Acerca de nosotros</Link>
              </li>
              <li>
                <button onClick={() => handleScrollTo("personaliza")}>
                  Diseñá tu producto
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("productos")}>
                  Nuestros productos
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("contacto")}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3>Categorías</h3>
            <ul>
              <li>Camas</li>
              <li>Ropa</li>
              <li>Collares</li>
              <li>Accesorios</li>
            </ul>
          </div>

          <div>
            <h3>Seguinos</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/penilandiaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/marialaura.hernandez.12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/2342512132"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Penilandia. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
