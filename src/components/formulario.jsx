import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import {
  FiSend,
  FiCheckCircle,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiArrowUpRight,
} from "react-icons/fi";
import "./../css/Formulario.css";

export const Formulario = () => {
  const [state, handleSubmit] = useForm("mqabdaae");
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <div className="contact-bg-grid"></div>

      <div className="contact-container">
        <div className="contact-info-card">
          <span className="contact-eyebrow">
            <FiMail />
            {t("formulario.eyebrow", "Contact")}
          </span>

          <h2>{t("formulario.title")}</h2>
   

          <div className="contact-mini-note">
            <FiArrowUpRight />
                <p>{t("formulario.paragraph")}</p>
          </div>
        </div>

        <div className="contact-form-card">
          {state.succeeded ? (
            <div className="mensaje-exito">
              <FiCheckCircle className="icono-exito" />
              <h3>{t("formulario.success_title", "Message sent")}</h3>
              <p>{t("formulario.success_message")}</p>
            </div>
          ) : (
            <form className="contacto-formulario" onSubmit={handleSubmit}>
              <label>
                <span>
                  <FiUser />
                  {t("formulario.name_label", "Name")}
                </span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={t("formulario.name_placeholder")}
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </label>

              <label>
                <span>
                  <FiMail />
                  {t("formulario.email_label", "Email")}
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t("formulario.email_placeholder")}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </label>

              <label>
                <span>
                  <FiMessageSquare />
                  {t("formulario.message_label", "Message")}
                </span>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("formulario.message_placeholder")}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </label>

              <button type="submit" disabled={state.submitting} className="btn-futurista">
                <FiSend className="icono-enviar" />
                {state.submitting
                  ? t("formulario.submitting", "Sending...")
                  : t("formulario.submit_button")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};