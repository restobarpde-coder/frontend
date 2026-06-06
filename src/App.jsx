import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import caLogo from './assets/LOGO CA - PAYSANDÚ.webp'
import caLogoWhite from './assets/LOGO CA - PAYSANDÚ - BLANCO.webp'
import whatsappLogo from './assets/LOGO WSP.svg'
import './App.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
]

const values = [
  ['Trayectoria', 'Más de 27 años de experiencia sostienen una práctica orientada a resultados serios y verificables.'],
  ['Atención directa', 'Cada consulta recibe análisis personalizado, comunicación clara y seguimiento profesional.'],
  ['Criterio integral', 'Unificamos mirada jurídica y notarial para resolver cada asunto con mayor profundidad.'],
]

const processSteps = [
  {
    eyebrow: 'Primer paso',
    title: 'Evaluación profesional',
    subtitle: 'Jurídico · Notarial',
    chips: ['Consulta inicial', 'Análisis del caso', 'Próximos pasos'],
    cta: 'Iniciar por WhatsApp',
  },
  {
    eyebrow: 'Segundo paso',
    title: 'Definición de estrategia',
    subtitle: 'Asesoramiento personalizado',
    chips: ['Alternativas', 'Enfoque legal', 'Documentación'],
    cta: 'Hablar con un profesional',
  },
  {
    eyebrow: 'Tercer paso',
    title: 'Seguimiento claro',
    subtitle: 'Atención cercana',
    chips: ['Acompañamiento', 'Comunicación', 'Resolución'],
    cta: 'Escribinos ahora',
  },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeValue, setActiveValue] = useState(0)
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  const servicesCarouselRef = useRef(null)
  const valuesCarouselRef = useRef(null)

  // GSAP refs
  const landingRef = useRef(null)
  const heroEyebrowRef = useRef(null)
  const heroH1Ref = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroActionsRef = useRef(null)
  const heroPanelRef = useRef(null)
  const counter27Ref = useRef(null)
  const counter3Ref = useRef(null)

  useGSAP(() => {
    // === HERO: stagger fade+slideUp on mount ===
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTl
      .from(heroEyebrowRef.current, { autoAlpha: 0, y: 20, duration: 0.55 })
      .from(heroH1Ref.current,      { autoAlpha: 0, y: 28, duration: 0.65 }, '-=0.35')
      .from(heroSubtitleRef.current, { autoAlpha: 0, y: 20, duration: 0.55 }, '-=0.35')
      .from(heroActionsRef.current, { autoAlpha: 0, y: 16, duration: 0.50 }, '-=0.30')
      .from(heroPanelRef.current,   { autoAlpha: 0, x: 32, duration: 0.70 }, '-=0.50')

    // === HERO PANEL: animated counters (fire on load, slight delay) ===
    const obj27 = { val: 0 }
    gsap.to(obj27, {
      val: 27,
      duration: 2,
      delay: 0.8,
      ease: 'power2.out',
      onUpdate() {
        if (counter27Ref.current) counter27Ref.current.textContent = Math.round(obj27.val) + '+'
      },
    })

    const obj3 = { val: 0 }
    gsap.to(obj3, {
      val: 3,
      duration: 1.4,
      delay: 1,
      ease: 'power2.out',
      onUpdate() {
        if (counter3Ref.current) counter3Ref.current.textContent = Math.round(obj3.val)
      },
    })

    // === SERVICES: heading fade-up, cards stagger ===
    gsap.from('.services .section-heading', {
      autoAlpha: 0,
      y: 36,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.services .section-heading', start: 'top 82%' },
    })

    gsap.from('.service-card', {
      autoAlpha: 0,
      y: 36,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.services-grid', start: 'top 82%' },
    })

    // === TEAM: copy from left, list from right ===
    gsap.from('.team .section-heading', {
      autoAlpha: 0,
      x: -40,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.team .split-section', start: 'top 80%' },
    })

    gsap.from('.team-list', {
      autoAlpha: 0,
      x: 40,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.team .split-section', start: 'top 80%' },
    })

    // === VALUES: fade-up the section wrapper (cards are in a scroll container — avoid y-transform inside it) ===
    gsap.from('.values', {
      autoAlpha: 0,
      y: 24,
      duration: 0.65,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.values', start: 'top 85%' },
    })

    // === CTA: fade + scale-in, then stagger children ===
    const ctaTl = gsap.timeline({
      scrollTrigger: { trigger: '#contacto', start: 'top 80%' },
    })
    ctaTl
      .from('#contacto.cta', { autoAlpha: 0, scale: 0.97, duration: 0.6, ease: 'power3.out' })
      .from('#contacto .cta-copy > *', { autoAlpha: 0, y: 18, duration: 0.55, stagger: 0.12, ease: 'power3.out' }, '-=0.3')
  }, { scope: landingRef })

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })

    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const carousel = servicesCarouselRef.current
    const mediaQuery = window.matchMedia('(max-width: 640px)')

    if (!carousel || !mediaQuery.matches) return undefined

    const interval = window.setInterval(() => {
      const nextIndex = (activeService + 1) % services.length
      const nextCard = carousel.children[nextIndex]

      if (nextCard) {
        carousel.scrollTo({
          left: nextCard.offsetLeft - carousel.children[0].offsetLeft,
          behavior: 'smooth',
        })
      }
    }, 4200)

    return () => window.clearInterval(interval)
  }, [activeService])

  useEffect(() => {
    const carousel = valuesCarouselRef.current
    const mediaQuery = window.matchMedia('(max-width: 640px)')

    if (!carousel || !mediaQuery.matches) return undefined

    const interval = window.setInterval(() => {
      const nextIndex = (activeValue + 1) % values.length
      const nextCard = carousel.children[nextIndex]

      if (nextCard) {
        carousel.scrollTo({
          left: nextCard.offsetLeft - carousel.children[0].offsetLeft,
          behavior: 'smooth',
        })
      }
    }, 2000)

    return () => window.clearInterval(interval)
  }, [activeValue])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProcessStep((step) => (step + 1) % processSteps.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  const handleServicesScroll = () => {
    const carousel = servicesCarouselRef.current
    if (!carousel) return

    const cardWidth = carousel.firstElementChild?.getBoundingClientRect().width || 1
    const gap = 12
    const nextIndex = Math.round(carousel.scrollLeft / (cardWidth + gap))

    setActiveService(Math.max(0, Math.min(services.length - 1, nextIndex)))
  }

  const handleValuesScroll = () => {
    const carousel = valuesCarouselRef.current
    if (!carousel) return

    const cardWidth = carousel.firstElementChild?.getBoundingClientRect().width || 1
    const gap = 12
    const nextIndex = Math.round(carousel.scrollLeft / (cardWidth + gap))

    setActiveValue(Math.max(0, Math.min(values.length - 1, nextIndex)))
  }

  const closeMenu = () => setIsMenuOpen(false)
  const currentProcessStep = processSteps[activeProcessStep]

  return (
    <div className="landing" ref={landingRef}>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="Centro de Asesoramiento inicio" onClick={closeMenu}>
            <img className="brand-logo" src={caLogo} alt="Centro de Asesoramiento" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            id="main-navigation"
            className={`nav ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Navegación principal"
          >
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#equipo" onClick={closeMenu}>Equipo</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a href="#contacto" className="nav-cta" onClick={closeMenu}>Solicitar consulta</a>
          </nav>
        </div>
      </header>
      <button
        className={`menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Cerrar menú"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow" ref={heroEyebrowRef}>Asesoramiento profesional</span>
              <h1 ref={heroH1Ref}>Respaldo legal para decidir con seguridad.</h1>
              <p className="hero-subtitle" ref={heroSubtitleRef}>
                Asesoramiento jurídico y notarial claro, estratégico y personalizado.
              </p>
              <div className="hero-actions" ref={heroActionsRef}>
                <a href="#contacto" className="btn btn-primary">Solicitar consulta</a>
                <a href="#servicios" className="btn btn-secondary">Ver servicios</a>
              </div>
              <div className="mobile-hero-visual">
                <div className="visual-document">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-seal">CA</div>
                <div className="visual-content" key={currentProcessStep.title}>
                  <small>{currentProcessStep.eyebrow}</small>
                  <strong>{currentProcessStep.title}</strong>
                  <span>{currentProcessStep.subtitle}</span>
                  <div className="visual-chips">
                    {currentProcessStep.chips.map((chip) => (
                      <em key={chip}>{chip}</em>
                    ))}
                  </div>
                  <a href="https://wa.me/59896832925">
                    <img className="whatsapp-logo" src={whatsappLogo} alt="" aria-hidden="true" />
                    {currentProcessStep.cta}
                  </a>
                </div>
                <div className="visual-dots" aria-hidden="true">
                  {processSteps.map((step, index) => (
                    <span
                      className={index === activeProcessStep ? 'is-active' : ''}
                      key={step.eyebrow}
                    />
                  ))}
                </div>
              </div>
            </div>

            <aside className="hero-panel" ref={heroPanelRef} aria-label="Resumen del estudio">
              <p className="panel-kicker">Atención profesional</p>
              <h2>Soluciones claras para casos importantes.</h2>
              <dl>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3l7 4v5c0 4.8-2.9 7.6-7 9-4.1-1.4-7-4.2-7-9V7z" />
                      <path d="M9 12l2 2 4-5" />
                    </svg>
                  </span>
                  <dt ref={counter27Ref}>0+</dt>
                  <dd>años de experiencia</dd>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                      <path d="M8 4v16" />
                      <path d="M16 4v16" />
                    </svg>
                  </span>
                  <dt ref={counter3Ref}>0</dt>
                  <dd>áreas coordinadas</dd>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </span>
                  <dt>1:1</dt>
                  <dd>seguimiento personalizado</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="servicios" className="section services">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nuestros servicios</span>
              <h2>Asesoramiento ordenado, preciso y confiable.</h2>
              <p>
                Cada área se aborda con rigor profesional, lenguaje claro y una
                estrategia ajustada al caso concreto.
              </p>
            </div>
            <div
              className="services-grid"
              ref={servicesCarouselRef}
              onScroll={handleServicesScroll}
            >
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="service-dots" aria-hidden="true">
              {services.map((service, index) => (
                <span
                  className={index === activeService ? 'is-active' : ''}
                  key={service.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="section team">
          <div className="container split-section">
            <div className="section-heading align-left">
              <span className="eyebrow">Equipo profesional</span>
              <h2>Una práctica cercana, discreta y técnicamente sólida.</h2>
              <p>
                Profesionales con vocación de servicio y experiencia en asuntos
                jurídicos y notariales de distinta complejidad.
              </p>
              <figure className="team-mobile-image">
                <img
                  src="/legal-office-mobile.jpg"
                  alt="Espacio profesional del estudio jurídico"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="team-list">
              <article>
                <span className="team-marker" aria-hidden="true">FS</span>
                <h3>Dr. Fernando Salvatierra</h3>
                <p>Abogado</p>
              </article>
              <article>
                <span className="team-marker" aria-hidden="true">GB</span>
                <h3>Gonzalo Bentancor Choca</h3>
                <p>Abogado</p>
              </article>
              <article>
                <span className="team-marker" aria-hidden="true">NC</span>
                <h3>Esc. Natalia Cabrera Villagra</h3>
                <p>Escribana</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section values">
          <div className="container">
            <div
              className="values-grid"
              ref={valuesCarouselRef}
              onScroll={handleValuesScroll}
            >
              {values.map(([title, text]) => (
                <article className="value-card" key={title}>
                  <span>{title}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="value-dots" aria-hidden="true">
              {values.map(([title], index) => (
                <span
                  className={index === activeValue ? 'is-active' : ''}
                  key={title}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="cta">
          <div className="container cta-inner">
            <div className="cta-copy">
              <span className="eyebrow">Consulta inicial</span>
              <h2>Recibí asesoramiento claro para avanzar con seguridad.</h2>
              <p>
                Escribinos para evaluar tu situación, entender qué documentación
                necesitás y definir los próximos pasos con acompañamiento profesional.
              </p>
              <a
                href="https://wa.me/59896832925"
                className="btn btn-primary whatsapp-btn"
                target="_blank"
                rel="noreferrer"
              >
                <img className="whatsapp-logo" src={whatsappLogo} alt="" aria-hidden="true" />
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <img className="footer-logo" src={caLogoWhite} alt="Centro de Asesoramiento" />
          </div>
          <div>
            <h3>Contacto</h3>
            <p>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              contacto@centrodeasesoramiento.com
            </p>
            <p>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.2 19.2 0 0 1-5.9-5.9A19.7 19.7 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.1z" />
                </svg>
              </span>
              +598 96 832 925
            </p>
            <p>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              18 de Julio 1169 - Paysandú
            </p>
          </div>
          <div>
            <h3>Horario</h3>
            <p>
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l3 2" />
                </svg>
              </span>
              Lunes a viernes
            </p>
            <p>8:00 a 18:00</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 Centro de Asesoramiento. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/59896832925"
        className="mobile-whatsapp-bar"
        target="_blank"
        rel="noreferrer"
      >
        <img className="whatsapp-logo" src={whatsappLogo} alt="" aria-hidden="true" />
        Escribinos por WhatsApp
      </a>
    </div>
  )
}

export default App
