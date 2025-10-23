import React from "react";

const clients = [
  { id: 1, img: "/Clientes/Reseña1.jpeg" },
  { id: 2, img: "/Clientes/Reseña2.jpeg" },
  { id: 3, img: "/Clientes/Reseña3.jpeg" },
  { id: 4, img: "/Clientes/Reseña4.jpeg" },
  { id: 5, img: "/Clientes/Reseña5.jpeg" },
  { id: 6, img: "/Clientes/Reseña6.jpeg" },
  { id: 7, img: "/Clientes/Reseña7.jpeg" },
  { id: 8, img: "/Clientes/Reseña8.jpeg" },
  { id: 9, img: "/Clientes/Reseña9.jpeg" },
  { id: 10, img: "/Clientes/Reseña10.jpeg" },
  { id: 11, img: "/Clientes/Reseña11.jpeg" },
  { id: 12, img: "/Clientes/Reseña12.jpeg" },
];

export default function ClientsGallery() {
  return (
    <section id="clientes" className="clients-section">
      <h2>Clientes Felices</h2>
      <div className="clients-grid">
        {clients.map((c) => (
          <div key={c.id} className="client-card">
            <img src={c.img} alt={`Cliente ${c.id}`} className="client-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
