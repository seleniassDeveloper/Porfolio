import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./../css/Formulario.css";

export const Formulario = () => {
  const [state, handleSubmit] = useForm("mqabdaae"); 

  return (
    <section className="contacto-container py-5">
      <div className="contacto-contenido">
        <h2>¿Querés trabajar conmigo?</h2>
        <p>
          Completá el formulario o escribime por redes sociales. Estoy lista
          para crear algo increíble juntos.
        </p>

        {state.succeeded ? (
          <p className="mensaje-exito">¡Mensaje enviado con éxito!</p>
        ) : (
          <form className="contacto-formulario" onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Tu mensaje..."
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
