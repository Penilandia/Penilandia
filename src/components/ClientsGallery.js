import React from "react";

const clients = [
  { id: 1, img: "/Clientes/reseña 1.jpeg" },
  { id: 2, img: "/Clientes/reseña 2.jpeg" },
  { id: 3, img: "/Clientes/reseña 3.jpeg" },
  { id: 4, img: "/Clientes/reseña 4.jpeg" },
  { id: 5, img: "/Clientes/reseña 5.jpeg" },
  { id: 6, img: "/Clientes/reseña 6.jpeg" },
  { id: 7, img: "/Clientes/reseña 7.jpeg" },
  { id: 8, img: "/Clientes/reseña 8.jpeg" },
  { id: 9, img: "/Clientes/reseña 9.jpeg" },
  { id: 10, img: "/Clientes/reseña 10.jpeg" },
  { id: 11, img: "/Clientes/reseña 11.jpeg" },
  { id: 12, img: "/Clientes/reseña 12.jpeg" },
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
