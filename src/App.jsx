import { useEffect } from 'react'
import './App.css'

const services = [
  {
    title: 'Asesoramiento jurídico',
    text: 'Acompañamiento integral en asuntos civiles, comerciales, laborales y patrimoniales, con criterio técnico y mirada estratégica.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v5h5" />
        <path d="M9 13h7" />
        <path d="M9 17h5" />
      </svg>
    ),
  },
  {
    title: 'Servicios notariales',
    text: 'Escrituras, poderes, certificaciones y trámites notariales gestionados con precisión, reserva y cumplimiento formal.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v16H7z" />
        <path d="M10 8h4" />
        <path d="M10 12h4" />
        <path d="M9 20l3-2 3 2" />
      </svg>
    ),
  },
  {
    title: 'Defensa judicial',
    text: 'Representación en instancias judiciales y extrajudiciales, priorizando claridad, seguimiento y protección de sus intereses.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M7 7l-4 7h8z" />
        <path d="M17 7l-4 7h8z" />
      </svg>
    ),
  },
  {
    title: 'Gestión contable',
    text: 'Soporte contable, impositivo y administrativo para personas y empresas que requieren orden, previsión y respaldo.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h14v18H5z" />
        <path d="M8 7h8" />
        <path d="M8 11h2" />
        <path d="M12 11h4" />
        <path d="M8 15h2" />
        <path d="M12 15h4" />
      </svg>
    ),
  },
]

const values = [
  ['Trayectoria', 'Más de 20 años de experiencia sostienen una práctica orientada a resultados serios y verificables.'],
  ['Atención directa', 'Cada consulta recibe análisis personalizado, comunicación clara y seguimiento profesional.'],
  ['Criterio integral', 'Unificamos mirada jurídica, notarial y contable para resolver con mayor profundidad.'],
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing">
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="Legal Studio inicio">
            <span className="brand-mark">LS</span>
            <span>
              <strong>Legal Studio</strong>
              <small>Jurídico · Notarial · Contable</small>
            </span>
          </a>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
            <a href="#contacto" className="nav-cta">Solicitar consulta</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal is-visible">
              <span className="eyebrow">Centro de asesoramiento profesional</span>
              <h1>Respaldo jurídico serio para decisiones importantes.</h1>
              <p className="hero-subtitle">
                Estudio jurídico, notarial y contable con más de 20 años de trayectoria.
              </p>
              <p className="hero-description">
                Brindamos asesoramiento claro, reservado y estratégico para personas,
                familias y empresas que necesitan defender sus intereses con seguridad.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn btn-primary">Solicitar consulta</a>
                <a href="#servicios" className="btn btn-secondary">Ver servicios</a>
              </div>
            </div>

            <aside className="hero-panel reveal is-visible" aria-label="Resumen del estudio">
              <div className="panel-line" />
              <p className="panel-kicker">Atención profesional</p>
              <h2>Soluciones legales con análisis integral.</h2>
              <dl>
                <div>
                  <dt>20+</dt>
                  <dd>años de experiencia</dd>
                </div>
                <div>
                  <dt>3</dt>
                  <dd>áreas coordinadas</dd>
                </div>
                <div>
                  <dt>1:1</dt>
                  <dd>seguimiento personalizado</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="servicios" className="section services">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Nuestros servicios</span>
              <h2>Asesoramiento ordenado, preciso y confiable.</h2>
              <p>
                Cada área se aborda con rigor profesional, lenguaje claro y una
                estrategia ajustada al caso concreto.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contacto">Consultar área</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="section team">
          <div className="container split-section">
            <div className="section-heading align-left reveal">
              <span className="eyebrow">Equipo profesional</span>
              <h2>Una práctica cercana, discreta y técnicamente sólida.</h2>
              <p>
                Profesionales con vocación de servicio y experiencia en asuntos
                jurídicos, notariales y contables de distinta complejidad.
              </p>
            </div>
            <div className="team-list reveal">
              <article>
                <h3>Dr. Fernando Salvatierra</h3>
                <p>Abogado</p>
              </article>
              <article>
                <h3>Dra. Verónica Cardozo</h3>
                <p>Abogada</p>
              </article>
              <article>
                <h3>Esc. Natalia Cabrera Villagra</h3>
                <p>Escribana</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section values">
          <div className="container values-grid">
            {values.map(([title, text]) => (
              <article className="value-card reveal" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="cta reveal">
          <div className="container cta-inner">
            <span className="eyebrow">Consulta inicial</span>
            <h2>Conversemos sobre su caso con la reserva que requiere.</h2>
            <p>
              Coordine una consulta para evaluar alternativas, próximos pasos y
              documentación necesaria.
            </p>
            <div className="cta-actions">
              <a href="tel:+595" className="btn btn-primary">Llamar ahora</a>
              <a href="mailto:info@legalstudio.com" className="btn btn-secondary">Enviar email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h2>Legal Studio</h2>
            <p>Estudio jurídico, notarial y contable con atención personalizada.</p>
          </div>
          <div>
            <h3>Contacto</h3>
            <p>info@legalstudio.com</p>
            <p>+595 XXX XXX XXX</p>
            <p>Asunción, Paraguay</p>
          </div>
          <div>
            <h3>Horario</h3>
            <p>Lunes a viernes</p>
            <p>8:00 a 18:00</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 Legal Studio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
