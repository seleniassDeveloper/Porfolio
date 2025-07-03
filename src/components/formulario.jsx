import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import "./../css/Formulario.css";

export const Formulario = () => {
  const [state, handleSubmit] = useForm("mqabdaae");
  const { t } = useTranslation();

  return (
    <section className="contacto-container py-5">
      <div className="contacto-contenido">
        <h2 className="manrope">{t("formulario.title")}</h2>
        <p>{t("formulario.paragraph")}</p>

        {state.succeeded ? (
          <div className="mensaje-exito">
            <FaCheckCircle className="icono-exito" />
            <p>{t("formulario.success_message")}</p>
          </div>
        ) : (
          <form className="contacto-formulario" onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t("formulario.name_placeholder")}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("formulario.email_placeholder")}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder={t("formulario.message_placeholder")}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="btn-futurista"
            >
              <FaPaperPlane className="icono-enviar" />
              {t("formulario.submit_button")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};