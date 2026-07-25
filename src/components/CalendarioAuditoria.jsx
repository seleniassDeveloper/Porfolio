import React, { useState, useEffect } from "react";
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
  FiLock,
  FiSun,
  FiMoon,
  FiArrowLeft
} from "react-icons/fi";
import "../css/CalendarioAuditoria.css";

const MORNING_SLOTS = ["08:00", "09:00", "10:00", "11:00", "12:00"];
const AFTERNOON_SLOTS = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

const TIMEZONES = [
  { id: "America/Argentina/Buenos_Aires", name: "🇦🇷 Hora Argentina (ART / UTC-3)", offsetHours: -3 },
  { id: "America/New_York", name: "🇺🇸 EE.UU. Este (EST / UTC-5)", offsetHours: -5 },
  { id: "America/Los_Angeles", name: "🇺🇸 EE.UU. Pacífico (PST / UTC-8)", offsetHours: -8 },
  { id: "America/Mexico_City", name: "🇲🇽 México (CST / UTC-6)", offsetHours: -6 },
  { id: "America/Bogota", name: "🇨🇴 Colombia / Perú (COT/PET / UTC-5)", offsetHours: -5 },
  { id: "America/Santiago", name: "🇨🇱 Chile (CLT / UTC-3)", offsetHours: -3 },
  { id: "Europe/Madrid", name: "🇪🇸 España / Europa (CET / UTC+1)", offsetHours: 1 }
];

export const CalendarioAuditoria = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [formspreeState, handleSubmitFormspree] = useForm("mqabdaae");

  const today = new Date();
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(new Date()); // Pre-select today for immediate clarity
  const [selectedSlot, setSelectedSlot] = useState("14:00");
  const [selectedTimezone, setSelectedTimezone] = useState("America/Argentina/Buenos_Aires");
  
  // Persistence for booked slots in localStorage
  const [bookedSlots, setBookedSlots] = useState(() => {
    try {
      const saved = localStorage.getItem("audit_booked_slots");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: ""
  });

  // Mark slot as booked upon successful submission
  useEffect(() => {
    if (formspreeState.succeeded && selectedDate && selectedSlot) {
      const dateKey = getDateKey(selectedDate);
      const slotKey = `${dateKey}_${selectedSlot}`;
      if (!bookedSlots.includes(slotKey)) {
        const updated = [...bookedSlots, slotKey];
        setBookedSlots(updated);
        try {
          localStorage.setItem("audit_booked_slots", JSON.stringify(updated));
        } catch (e) {
          console.error("Error saving booked slots:", e);
        }
      }
    }
  }, [formspreeState.succeeded]);

  const getDateKey = (dateObj) => {
    if (!dateObj) return "";
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const isSlotBooked = (dateObj, slot) => {
    if (!dateObj) return false;
    const key = `${getDateKey(dateObj)}_${slot}`;
    return bookedSlots.includes(key);
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

  // Calculate local time for selected timezone
  const getConvertedTimeText = (slotStr) => {
    if (selectedTimezone === "America/Argentina/Buenos_Aires") return `${slotStr} hs (ART)`;

    const targetTz = TIMEZONES.find((tz) => tz.id === selectedTimezone);
    if (!targetTz) return `${slotStr} hs`;

    const [h, m] = slotStr.split(":").map(Number);
    const diff = targetTz.offsetHours - (-3);
    let convertedH = h + diff;
    if (convertedH < 0) convertedH += 24;
    if (convertedH >= 24) convertedH -= 24;

    const formattedH = String(convertedH).padStart(2, "0");
    return `${slotStr} ART (${formattedH}:${String(m).padStart(2, "0")} tu hora local)`;
  };

  // Create Google Calendar link
  const getGoogleCalendarUrl = () => {
    if (!selectedDate) return "#";
    const [hours, minutes] = selectedSlot.split(":").map(Number);
    const startObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), hours, minutes);
    const endObj = new Date(startObj.getTime() + 45 * 60 * 1000); // 45 min call

    const formatGCalDate = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const title = encodeURIComponent(`Auditoría Técnica 1 a 1 - ${formData.name || "Cliente"}`);
    const details = encodeURIComponent(
      `Call de Auditoría con Selenia Sanchez.\nCliente: ${formData.name}\nEmail: ${formData.email}\nEmpresa/Web: ${formData.company || "N/A"}\nZona Horaria Seleccionada: ${selectedTimezone}\nDescripción/Notas: ${formData.notes || "N/A"}`
    );
    const dates = `${formatGCalDate(startObj)}/${formatGCalDate(endObj)}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}`;
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString(i18n.language === "en" ? "en-US" : "es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    : "";

  const selectedTzObj = TIMEZONES.find((tz) => tz.id === selectedTimezone) || TIMEZONES[0];

  const renderSlotButton = (slot) => {
    const booked = isSlotBooked(selectedDate, slot);
    const isSelectedSlot = selectedSlot === slot;

    return (
      <button
        type="button"
        key={slot}
        className={`time-slot-btn ${isSelectedSlot ? "selected" : ""} ${booked ? "booked" : ""}`}
        onClick={() => !booked && setSelectedSlot(slot)}
        disabled={booked}
      >
        {booked ? (
          <>
            <FiLock /> {t("auditoria.slot_booked", "Reservado")}
          </>
        ) : (
          <>
            {isSelectedSlot && <FiCheck />} {slot} hs
          </>
        )}
      </button>
    );
  };

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
          <div className="audit-header-title-box">
            <span className="audit-eyebrow">
              <FiCalendar />
              {t("auditoria.eyebrow", "Reserva de Llamada 1 a 1")}
            </span>
            <h2>{t("auditoria.title", "Agenda una Call de Auditoría Técnica")}</h2>
          </div>
          <span className="audit-badge-duration">
            ⏱️ {t("auditoria.badge_duration", "45 min · Videollamada 1 a 1")}
          </span>
        </div>

        {formspreeState.succeeded ? (
          <div className="audit-glass-card audit-success-box">
            <FiCheckCircle className="success-icon" />
            <h3>{t("auditoria.success_title", "¡Reserva Confirmada!")}</h3>
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
                {t("auditoria.schedule_another", "Agendar otra llamada")}
              </button>
            </div>
          </div>
        ) : (
          <form className="audit-grid" onSubmit={handleSubmitFormspree}>
            {/* COLUMNA IZQUIERDA: CALENDARIO, ZONA HORARIA & HORARIOS */}
            <div className="audit-glass-card">
              <h3 className="step-title">
                <FiCalendar /> {t("auditoria.select_date_title", "1. Selecciona Fecha y Hora")}
              </h3>

              {/* SELECTOR DE ZONA HORARIA */}
              <div className="timezone-picker-box">
                <label>
                  <span><FiGlobe /> {t("auditoria.timezone_label", "Zona Horaria de la Cita")}</span>
                  <select
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                  >
                    {TIMEZONES.map((tz) => (
                      <option key={tz.id} value={tz.id}>
                        {tz.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* CALENDARIO DE MES */}
              <div className="calendar-header">
                <button
                  type="button"
                  className="btn-month-nav"
                  onClick={prevMonth}
                  aria-label="Previous Month"
                >
                  <FiChevronLeft style={{ color: "#FFFFFF", fontSize: "1.3rem", strokeWidth: 3 }} />
                </button>
                <span className="month-year">
                  {currentMonthName} {currentYear}
                </span>
                <button
                  type="button"
                  className="btn-month-nav"
                  onClick={nextMonth}
                  aria-label="Next Month"
                >
                  <FiChevronRight style={{ color: "#FFFFFF", fontSize: "1.3rem", strokeWidth: 3 }} />
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
                      <span>{day}</span>
                    </button>
                  );
                })}
              </div>

              {/* BANNER DE FECHA SELECCIONADA */}
              {selectedDate && (
                <div className="selected-date-banner">
                  <span>📅 <strong>{formattedSelectedDate}</strong></span>
                  <span>🕒 {getConvertedTimeText(selectedSlot)}</span>
                </div>
              )}

              {/* HORARIOS ORGANIZADOS POR TURNO */}
              <div className="time-slots-container">
                <h3 className="step-title">
                  <FiClock /> {t("auditoria.select_time_title", "Horarios disponibles")}
                </h3>

                <div className="slot-shift-title">
                  <FiSun /> {i18n.language === "en" ? "Morning Shift" : "Turno Mañana (08:00 - 12:00)"}
                </div>
                <div className="time-slots-grid">
                  {MORNING_SLOTS.map(renderSlotButton)}
                </div>

                <div className="slot-shift-title">
                  <FiMoon /> {i18n.language === "en" ? "Afternoon Shift" : "Turno Tarde / Noche (13:00 - 20:00)"}
                </div>
                <div className="time-slots-grid">
                  {AFTERNOON_SLOTS.map(renderSlotButton)}
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: DATOS DE CONTACTO Y DESCRIPCIÓN DE LA REUNIÓN */}
            <div className="audit-glass-card">
              <h3 className="step-title">
                <FiUser /> {t("auditoria.client_details_title", "2. Tus Datos y Detalles de la Llamada")}
              </h3>

              <div className="audit-form">
                {/* CAMPOS ESTRUCTURADOS PARA RECIBIR EN EL EMAIL */}
                <input
                  type="hidden"
                  name="_subject"
                  value={`📅 RESERVA DE AUDITORÍA: ${formData.name || "Cliente"} - ${formattedSelectedDate} (${selectedSlot} hs ART)`}
                />
                <input type="hidden" name="RESERVA_FECHA" value={formattedSelectedDate || "No seleccionada"} />
                <input type="hidden" name="RESERVA_HORARIO_ART" value={`${selectedSlot} hs (Hora Argentina)`} />
                <input type="hidden" name="RESERVA_ZONA_HORARIA" value={selectedTzObj.name} />

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

                <label>
                  <span><FiFileText /> {t("auditoria.notes_label")}</span>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChangeInput}
                    placeholder={t("auditoria.notes_placeholder")}
                    required
                    style={{ minHeight: "120px" }}
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
                        <FiClock /> <span>{getConvertedTimeText(selectedSlot)}</span>
                      </div>
                      <div className="summary-item">
                        <FiGlobe /> <span>{selectedTzObj.name}</span>
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
