import React from "react";

export default function HomeSection() {
  const handleScrollToCustomForm = () => {
    const seccion = document.getElementById("personaliza");
    if (seccion) {
      const offset = seccion.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      seccion.classList.add("active");
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <h1>Bienvenido a Penilandia</h1>
        <p>Diseñá tu camita soñada para tu mascota.</p>
        <button className="btn-hero" onClick={handleScrollToCustomForm}>
          Diseñá tu cama
        </button>
      </div>
      <div className="hero-img">
        <img src="/logo.png" alt="Perrito Penilandia" />
      </div>
    </section>
  );
}
