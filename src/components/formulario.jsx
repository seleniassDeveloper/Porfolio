import React, { useState } from "react";
import "./../css/Formulario.css";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarDatos = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nombre,
          email: correo,
          message: mensaje,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("¡Mensaje enviado con éxito!");
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Ocurrió un error al enviar.");
      console.error(error);
    }
  };

  return (
    <section className="contacto-container py-5">
      <div className="contacto-contenido">
        <h2>¿Querés trabajar conmigo?</h2>
        <p>
          Completá el formulario o escribime por redes sociales. Estoy lista
          para crear algo increíble juntos.
        </p>

        <form className="contacto-formulario" onSubmit={enviarDatos}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <textarea
            placeholder="Tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
