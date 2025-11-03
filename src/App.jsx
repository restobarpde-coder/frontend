import './App.css'

function App() {
  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Legal Studio</div>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Estudio Jurídico - Notarial - Contable</h1>
            <p className="hero-subtitle">Más de 20 años de experiencia brindando soluciones legales integrales</p>
            <p className="hero-description">
              Somos un equipo de profesionales con vocación de servicio, comprometidos con la 
              atención personalizada y la defensa de sus intereses en vía judicial y extrajudicial.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-primary">Consulta Gratuita</a>
              <a href="#servicios" className="btn btn-secondary">Nuestros Servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Asesoría Jurídica</h3>
              <p>Asesoramiento legal integral en derecho civil, comercial, laboral y más.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M9 15l3 3 3-3"></path>
                </svg>
              </div>
              <h3>Servicios Notariales</h3>
              <p>Escrituras públicas, poderes, certificaciones y trámites notariales.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Asesoría Contable</h3>
              <p>Servicios contables, impositivos y de gestión empresarial.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3>Defensa Judicial</h3>
              <p>Representación legal en procesos judiciales y extrajudiciales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section id="equipo" className="team">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="team-intro">
            Equipo de profesionales con vocación de servicio, comprometidos con la excelencia
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Dr. Fernando Salvatierra</h3>
              <p>Abogado</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Dra. Verónica Cardozo</h3>
              <p>Abogada</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Esc. Natalia Cabrera Villagra</h3>
              <p>Escribana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Por qué elegirnos</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Experiencia</h3>
              <p>Más de 20 años en el rubro respaldando nuestro servicio</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Atención Personalizada</h3>
              <p>Cada cliente recibe un trato único y dedicado</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3>Compromiso</h3>
              <p>Defensa de sus intereses con la mayor eficiencia</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Soluciones Integrales</h3>
              <p>Servicios jurídicos, notariales y contables en un solo lugar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="cta">
        <div className="container">
          <h2>¿Necesita Asesoramiento Legal?</h2>
          <p>Estamos aquí para ayudarle. Contáctenos para una consulta inicial gratuita.</p>
          <div className="cta-buttons">
            <a href="tel:+595" className="btn btn-primary">Llamar Ahora</a>
            <a href="mailto:info@legalstudio.com" className="btn btn-secondary">Enviar Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Legal Studio</h4>
              <p>Estudio Jurídico - Notarial - Contable</p>
              <p>Más de 20 años de experiencia</p>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>📧 info@legalstudio.com</p>
              <p>📱 +595 XXX XXX XXX</p>
              <p>📍 Asunción, Paraguay</p>
            </div>
            <div className="footer-section">
              <h4>Horario</h4>
              <p>Lunes a Viernes</p>
              <p>8:00 AM - 18:00 PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Legal Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
