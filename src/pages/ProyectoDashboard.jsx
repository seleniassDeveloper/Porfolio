import { useNavigate } from "react-router-dom";
import "../css/ProyectoDashboard.css";

import dashboard1 from "../assets/imagenes/Dashboard/Dashboard1.png";
import dashboard2 from "../assets/imagenes/Dashboard/Dasboard2.png";
import dashboard3 from "../assets/imagenes/Dashboard/Dashboard3.png";
import dashboard4 from "../assets/imagenes/Dashboard/Dashboard4.png";

export default function ProyectoDashboard() {
  const navigate = useNavigate();

  return (
    <div className="pd-container">

      {/* HERO */}
      <section className="pd-hero">
        <div className="pd-hero-text">
          <span className="pd-badge">AI-Powered SaaS Platform</span>

          <h1 className="pd-title">
            Smart Appointment & Analytics Dashboard
          </h1>

          <p className="pd-subtitle">
            Plataforma completa de gestión de citas con métricas dinámicas,
            análisis automatizado con IA y arquitectura preparada para escalar
            como producto SaaS.
          </p>

          <button
            className="pd-btn-primary"
            onClick={() => navigate("/proyectos")}
          >
            Volver a proyectos
          </button>
        </div>

        <div className="pd-hero-image">
          <img src={dashboard1} alt="Dashboard principal" />
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="pd-section split">
        <div className="pd-image">
          <img src={dashboard2} alt="Sistema de citas" />
        </div>

        <div className="pd-text">
          <h2>Gestión inteligente de citas</h2>
          <p>
            Permite crear, editar y administrar citas con validaciones
            estructuradas y sincronización automática.
            Incluye control total de estados y filtros avanzados por rango y estado.
          </p>

          <ul>
            <li>Estados dinámicos (Pendiente, Confirmada, Cancelada, Finalizada)</li>
            <li>Filtros combinables por fecha y estado</li>
            <li>Paginación inteligente</li>
            <li>Sincronización automática post actualización</li>
          </ul>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="pd-section split reverse">
        <div className="pd-text">
          <h2>Dashboard analítico en tiempo real</h2>
          <p>
            Métricas dinámicas calculadas desde base de datos, con visualización
            gráfica por servicio y trabajador.
          </p>

          <ul>
            <li>KPI total y por estado</li>
            <li>Gráficos tipo torta por servicio</li>
            <li>Gráficos por trabajador</li>
            <li>Datos en tiempo real</li>
          </ul>
        </div>

        <div className="pd-image">
          <img src={dashboard3} alt="Métricas y gráficos" />
        </div>
      </section>

      {/* IA */}
      <section className="pd-section split">
        <div className="pd-image">
          <img src={dashboard4} alt="Chat IA analítico" />
        </div>

        <div className="pd-text">
          <h2>Motor Analítico con IA</h2>
          <p>
            Chat integrado que permite generar reportes estructurados con
            KPIs dinámicos y visualizaciones generadas automáticamente.
          </p>

          <ul>
            <li>Interfaz tipo SaaS con chat flotante</li>
            <li>Generación de reportes estructurados</li>
            <li>Fallback automático si OpenAI falla</li>
            <li>Widgets visuales generados dinámicamente</li>
          </ul>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section className="pd-final">
        <h2>Arquitectura preparada para SaaS</h2>
        <p>
          Backend REST con Prisma, separación frontend/backend,
          Context API para estado global, manejo de errores centralizado
          y sistema preparado para producción.
        </p>
      </section>

    </div>
  );
}