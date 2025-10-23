import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>Acerca de Nosotros</h2>
      <p className="about-text">
        <strong>Penilandia</strong> es un emprendimiento familiar que se 
        dedica a la elaboración de accesorios para mascotas de manera artesanal. 
        Entre sus productos se encuentran camas personalizadas del tamaño que se desee 
        y prendas de vestir de todo tipo, camperas, vestidos, gorros, entre otros. 
        Todo elaborado a mano, con mucho amor y dedicación. Creemos que cada peludo merece 
        algo único, hecho especialmente para él 💕
      </p>

      <div className="about-gallery">
        <img src="/Accesorios.jpeg" alt="Accesorio artesanal" />
        <img src="/Cliente.jpeg" alt="Mascota feliz" />
        <img src="/Productos.jpeg" alt="Productos Penilandia" />
      </div>

      <p className="about-text">
        En cada producto cuidamos los detalles y priorizamos
        la comodidad y felicidad de las mascotas. ¡Gracias por acompañarnos en
        este proyecto lleno de amor animal! 🐾
      </p>
    </section>
  );
}

export default AboutSection;
