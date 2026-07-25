import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiMail,
  FiGlobe,
  FiFileText,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiSend,
  FiCheck,
  FiCode,
  FiCpu,
  FiZap,
  FiLayers,
  FiArrowLeft
} from "react-icons/fi";
import "../css/CalendarioAuditoria.css";

const TIME_SLOTS = ["09:00", "11:00", "14:00", "16:00", "18:00"];

export const CalendarioAuditoria = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [formspreeState, handleSubmitFormspree] = useForm("mqabdaae");

  const today = new Date();
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1]);
  const [auditType, setAuditType] = useState("frontend");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: ""
  });

  const auditTypeIcons = {
    frontend: <FiCode />,
    architecture: <FiLayers />,
    performance: <FiZap />,
    custom: <FiCpu />
  };

  // Month navigation
  const prevMonth = () => {
    setCurrentMonthDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonthDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const currentYear = currentMonthDate.getFullYear();
  const currentMonth = currentMonthDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  const monthNamesEN = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonthName = i18n.language === "en" ? monthNamesEN[currentMonth] : monthNames[currentMonth];

  const isPastDate = (day) => {
    const checkDate = new Date(currentYear, currentMonth, day, 23, 59, 59);
    return checkDate < today;
  };

  const isToday = (day) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const handleSelectDay = (day) => {
    if (isPastDate(day)) return;
    const chosen = new Date(currentYear, currentMonth, day);
    setSelectedDate(chosen);
  };

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create Google Calendar link
  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return "#";
    const [hours, minutes] = selectedSlot.split(":").map(Number);
    const startObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), hours, minutes);
    const endObj = new Date(startObj.getTime() + 45 * 60 * 1000); // 45 min call

    const formatGCalDate = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const title = encodeURIComponent(`Auditoría Técnica: ${t(`auditoria.types.${auditType}`)} - ${formData.name || "Cliente"}`);
    const details = encodeURIComponent(
      `Call de Auditoría con Selenia Sanchez.\nTipo: ${t(`auditoria.types.${auditType}`)}\nCliente: ${formData.name}\nEmail: ${formData.email}\nEmpresa: ${formData.company || "N/A"}\nNotas: ${formData.notes || "N/A"}`
    );
    const dates = `${formatGCalDate(startObj)}/${formatGCalDate(endObj)}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}`;
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString(i18n.language === "en" ? "en-US" : "es-ES", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    : "";

  return (
    <section className="audit-section" id="auditoria">
      <div className="audit-bg-glow"></div>

      <div className="audit-container">
        <div className="audit-nav-top">
          <button type="button" className="audit-back-btn" onClick={() => navigate("/")}>
            <FiArrowLeft /> {i18n.language === "en" ? "← Back to Portfolio" : "← Volver al Portafolio"}
          </button>
        </div>

        <div className="audit-header">
          <span className="audit-eyebrow">
            <FiCalendar />
            {t("auditoria.eyebrow", "Agendamiento & Consultoría")}
          </span>
          <h2>{t("auditoria.title", "Agenda una Call de Auditoría Técnica")}</h2>
          <p className="audit-subtitle">
            {t("auditoria.subtitle")}
          </p>
          <span className="audit-badge-duration">
            ⏱️ {t("auditoria.badge_duration", "45 min · 1 a 1")}
          </span>
        </div>

        {formspreeState.succeeded ? (
          <div className="audit-glass-card audit-success-box">
            <FiCheckCircle className="success-icon" />
            <h3>{t("auditoria.success_title", "¡Cita Agendada con Éxito!")}</h3>
            <p>{t("auditoria.success_message")}</p>

            <div className="actions-success">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gcal"
              >
                {t("auditoria.add_to_gcal", "Añadir a Google Calendar 📅")}
              </a>
              <button
                type="button"
                className="btn-reset"
                onClick={() => window.location.reload()}
              >
                {t("auditoria.schedule_another", "Agendar otra reunión")}
              </button>
            </div>
          </div>
        ) : (
          <form className="audit-grid" onSubmit={handleSubmitFormspree}>
            {/* COLUMNA IZQUIERDA: CALENDARIO & HORARIOS */}
            <div className="audit-glass-card">
              <h3 className="step-title">
                <FiCalendar /> {t("auditoria.select_date_title", "1. Seleccioná una fecha")}
              </h3>

              <div className="calendar-header">
                <button
                  type="button"
                  className="btn-month-nav"
                  onClick={prevMonth}
                  disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                >
                  <FiChevronLeft />
                </button>
                <span className="month-year">
                  {currentMonthName} {currentYear}
                </span>
                <button type="button" className="btn-month-nav" onClick={nextMonth}>
                  <FiChevronRight />
                </button>
              </div>

              <div className="calendar-weekdays">
                <span>{i18n.language === "en" ? "Su" : "Do"}</span>
                <span>{i18n.language === "en" ? "Mo" : "Lu"}</span>
                <span>{i18n.language === "en" ? "Tu" : "Ma"}</span>
                <span>{i18n.language === "en" ? "We" : "Mi"}</span>
                <span>{i18n.language === "en" ? "Th" : "Ju"}</span>
                <span>{i18n.language === "en" ? "Fr" : "Vi"}</span>
                <span>{i18n.language === "en" ? "Sa" : "Sá"}</span>
              </div>

              <div className="calendar-days-grid">
                {Array.from({ length: firstDayIndex }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="day-cell empty" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const day = idx + 1;
                  const disabled = isPastDate(day);
                  const active = isSelected(day);
                  const isCurrentDay = isToday(day);

                  return (
                    <button
                      type="button"
                      key={`day-${day}`}
                      className={`day-cell ${disabled ? "disabled" : ""} ${active ? "selected" : ""} ${isCurrentDay ? "today" : ""}`}
                      onClick={() => handleSelectDay(day)}
                      disabled={disabled}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* HORARIOS */}
              <div className="time-slots-container">
                <h3 className="step-title">
                  <FiClock /> {t("auditoria.select_time_title", "2. Seleccioná un horario")}
                </h3>
                <div className="time-slots-grid">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      className={`time-slot-btn ${selectedSlot === slot ? "selected" : ""}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {selectedSlot === slot && <FiCheck />} {slot} hs
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: DATOS DE CONTACTO & MOTIVO DE LA CALL */}
            <div className="audit-glass-card">
              <h3 className="step-title">
                <FiUser /> {t("auditoria.client_details_title", "2. Tus Datos de Contacto")}
              </h3>

              <div className="audit-form">
                {/* CAMPOS ESTRUCTURADOS PARA RECIBIR EN EL EMAIL */}
                <input
                  type="hidden"
                  name="_subject"
                  value={`📅 RESERVA DE AUDITORÍA: ${formData.name || "Cliente"} - ${formattedSelectedDate} (${selectedSlot} hs)`}
                />
                <input type="hidden" name="RESERVA_FECHA" value={formattedSelectedDate || "No seleccionada"} />
                <input type="hidden" name="RESERVA_HORARIO" value={`${selectedSlot} hs`} />
                <input type="hidden" name="RESERVA_TEMA_AUDITORIA" value={t(`auditoria.types.${auditType}`)} />

                <label>
                  <span><FiUser /> {t("auditoria.name_label")}</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChangeInput}
                    placeholder={t("auditoria.name_placeholder")}
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
                </label>

                <label>
                  <span><FiMail /> {t("auditoria.email_label")}</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeInput}
                    placeholder={t("auditoria.email_placeholder")}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                </label>

                <label>
                  <span><FiGlobe /> {t("auditoria.company_label")}</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChangeInput}
                    placeholder={t("auditoria.company_placeholder")}
                  />
                </label>

                <h3 className="step-title" style={{ marginTop: "1rem" }}>
                  <FiFileText /> {t("auditoria.select_type_title", "3. ¿De qué vamos a hablar?")}
                </h3>

                <div className="audit-types-list">
                  {["frontend", "architecture", "performance", "custom"].map((typeKey) => (
                    <div
                      key={typeKey}
                      className={`audit-type-card ${auditType === typeKey ? "selected" : ""}`}
                      onClick={() => setAuditType(typeKey)}
                    >
                      <div className="audit-type-title">
                        {auditTypeIcons[typeKey]}
                        {t(`auditoria.types.${typeKey}`)}
                      </div>
                      <div className="audit-type-desc">
                        {t(`auditoria.types_desc.${typeKey}`)}
                      </div>
                    </div>
                  ))}
                </div>

                <label>
                  <span><FiFileText /> {t("auditoria.notes_label")}</span>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChangeInput}
                    placeholder={t("auditoria.notes_placeholder")}
                    required
                  />
                  <ValidationError prefix="Notes" field="notes" errors={formspreeState.errors} />
                </label>

                {selectedDate && (
                  <div className="audit-summary-box">
                    <h4>{t("auditoria.summary_title", "Resumen de tu Reserva")}</h4>
                    <div className="summary-details">
                      <div className="summary-item">
                        <FiCalendar /> <span>{formattedSelectedDate}</span>
                      </div>
                      <div className="summary-item">
                        <FiClock /> <span>{selectedSlot} hs</span>
                      </div>
                      <div className="summary-item">
                        {auditTypeIcons[auditType]} <span>{t(`auditoria.types.${auditType}`)}</span>
                      </div>
                      {formData.name && (
                        <div className="summary-item">
                          <FiUser /> <span>{formData.name} ({formData.email || "S/N"})</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-submit-audit"
                  disabled={!selectedDate || formspreeState.submitting}
                >
                  <FiSend />
                  {formspreeState.submitting
                    ? t("auditoria.submitting")
                    : t("auditoria.submit_button")}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CalendarioAuditoria;
