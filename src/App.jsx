import { useEffect, useMemo, useState } from "react";

const services = [
  {
    title: "Logo Identity Design",
    description: "Clean, scalable logos with professional brand consistency."
  },
  {
    title: "Pamphlet Design",
    description: "Corporate-ready print layouts for offers, launches, and campaigns."
  },
  {
    title: "Graphic Design",
    description: "Social and marketing creatives designed for clear communication."
  },
  {
    title: "Frontend Web Design",
    description: "Responsive, modern website UI focused on trust and conversion."
  }
];

const blogCards = [
  {
    tag: "Brand Identity",
    title: "How a Strong Logo Builds Instant Trust",
    body: "A clean symbol, controlled spacing, and consistent color rules improve first impression across all channels.",
    meta: "By Jai Mehta"
  },
  {
    tag: "Marketing Design",
    title: "Pamphlet Layouts That Increase Response",
    body: "Offer hierarchy, white-space discipline, and clear CTA placement turn static pamphlets into conversion tools.",
    meta: "Digital Krantikari Studio"
  },
  {
    tag: "Web UI",
    title: "Professional Frontend Sections for Service Brands",
    body: "Structured hero blocks, predictable typography, and visual rhythm make websites look reliable and premium.",
    meta: "Service Design Notes"
  }
];

function CssLogo() {
  return (
    <div className="dk-logo" aria-label="Digital Krantikari logo">
      <div className="dk-logo-mark">
        <span className="flat-ring" />
        <span className="flat-node node-1" />
        <span className="flat-node node-2" />
        <span className="flat-node node-3" />
        <span className="flat-node node-4" />
        <span className="dk-initials">DK</span>
      </div>
      <div className="dk-logo-text">
        <span>DIGITAL</span>
        <span>KRANTIKARI</span>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 6.5h17a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a1 1 0 0 1 1-1z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.2 7.6L4 20l.8-4.1A8.5 8.5 0 1 1 20.5 11.7z" />
      <path d="M9.3 8.8c-.2-.4-.5-.4-.8-.4h-.7c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.5 3.9 2.2.8 2.6.6 3.1.6.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.2-.1-.1-.4-.2-.9-.5-.5-.2-1-.5-1.2-.5-.2-.1-.4-.1-.6.2-.2.2-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.2-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM4.8 9.8h2.4v8.7H4.8zM9.2 9.8h2.3V11h.1c.3-.6 1.1-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.8h-2.4v-4.3c0-1-.1-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.4H9.2z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.3 2.2.9 2.7.7.1-.6.3-.9.5-1.1-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.8 1a9.8 9.8 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.6a3.9 3.9 0 0 1 1 2.7c0 4-2.4 4.7-4.7 4.9.4.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5z" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.8" cy="7.2" r="1" />
    </svg>
  );
}

function App() {
  const basePath = import.meta.env.BASE_URL;
  const images = useMemo(
    () => Array.from({ length: 203 }, (_, index) => `${basePath}Minimal/pic${index + 1}.jpg`),
    [basePath]
  );

  const featured = images.slice(0, 10);
  const [activeSlide, setActiveSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [density, setDensity] = useState("comfortable");
  const [visibleCount, setVisibleCount] = useState(24);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowWelcome(false), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featured.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [featured.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % featured.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + featured.length) % featured.length);
  const goToSlide = (index) => setActiveSlide(index);
  const filteredImages = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return images;
    }
    return images.filter((image, idx) => {
      const label = `pic${idx + 1}`.toLowerCase();
      return label.includes(term) || image.toLowerCase().includes(term);
    });
  }, [images, searchTerm]);
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredImages.length;

  return (
    <div className="app">
      {showWelcome && (
        <div className="welcome-screen" aria-live="polite">
          <div className="welcome-glow welcome-glow-top" />
          <div className="welcome-glow welcome-glow-bottom" />
          <div className="welcome-grid" />
          <div className="welcome-content">
            <CssLogo />
            <p className="welcome-kicker">Digital Krantikari Studio</p>
            <h1>Designing clarity at the speed of ideas.</h1>
            <p className="welcome-note">Preparing your premium portfolio experience</p>
            <div className="welcome-progress" role="progressbar" aria-label="Loading">
              <span />
            </div>
          </div>
        </div>
      )}

      <header className="hero-shell">
        <div className="hero-frame">
          <div className="hero-noise" />
          <div className="hero-stars" />
          <div className="hero-gradient hero-gradient-top" />
          <div className="hero-gradient hero-gradient-bottom" />

          <div className="topbar">
            <CssLogo />
            <nav className="hero-nav">
              <a href="#services">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="hero-cta-links">
              <a className="ghost-btn" href="#contact">
                Email
              </a>
              <a className="solid-btn" href="#contact">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-copy hero-copy-centered">
            <p className="status-pill">Minimal Flat Animated Logo v4</p>
            <h1>
              Elevate Your Brand
              <br />
              Through Clean Design
            </h1>
            <p>
              Premium creative execution for logo systems, marketing graphics, and frontend
              page design with a modern studio workflow.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#portfolio">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero-orb" aria-hidden="true" />

          <article className="floating-card floating-left">
            <p className="mini-label">Design Quality</p>
            <h3>Unparalleled Visual Clarity</h3>
            <span>96%</span>
          </article>

          <article className="floating-card floating-right">
            <p className="mini-label">Delivery Score</p>
            <h3>Client Satisfaction</h3>
            <span>98%</span>
          </article>

          <div className="trust-row">
            <span>Logo Identity</span>
            <span>Print Creative</span>
            <span>Social Graphics</span>
            <span>Frontend UI</span>
            <span>Brand Systems</span>
          </div>
        </div>
      </header>

      <section id="services" className="panel">
        <h2>Services</h2>
        <p className="section-lead">
          End-to-end creative design support for brand identity, campaigns, and modern web
          interfaces.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="panel">
        <div className="section-head">
          <h2>Portfolio Slider</h2>
          <p>Professional showcase with smooth transitions and direct controls.</p>
        </div>

        <div className="slider-window">
          <button className="slider-nav slider-nav-left" onClick={prevSlide} aria-label="Previous slide">
            &#10094;
          </button>
          <button className="slider-nav slider-nav-right" onClick={nextSlide} aria-label="Next slide">
            &#10095;
          </button>
          <div className="slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {featured.map((image, index) => (
              <figure key={image} className="slide">
                <img src={image} alt={`Featured ${index + 1}`} loading="lazy" />
                <figcaption>
                  <button onClick={() => setPreviewImage(image)}>Preview</button>
                  <a href={image} download>
                    Download
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="slider-dots" role="tablist" aria-label="Choose slide">
          {featured.map((_, index) => (
            <button
              key={`dot-${index + 1}`}
              className={`dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={activeSlide === index}
              role="tab"
            />
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>All Images</h2>
        <p className="section-lead">Browse the full work archive with search, density control, and quick preview.</p>
        <div className="gallery-tools">
          <label className="gallery-search">
            <span>Search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setVisibleCount(24);
              }}
              placeholder="Type pic number (example: pic12)"
            />
          </label>
          <div className="gallery-density">
            <button
              className={density === "comfortable" ? "active" : ""}
              onClick={() => setDensity("comfortable")}
            >
              Comfortable
            </button>
            <button className={density === "compact" ? "active" : ""} onClick={() => setDensity("compact")}>
              Compact
            </button>
          </div>
          <p className="gallery-count">
            Showing {visibleImages.length} of {filteredImages.length}
          </p>
        </div>

        <div className={`gallery-grid ${density === "compact" ? "is-compact" : ""}`}>
          {visibleImages.map((image, index) => (
            <article key={image} className="gallery-item" style={{ animationDelay: `${(index % 8) * 70}ms` }}>
              <img
                src={image}
                alt={`Work ${index + 1}`}
                loading="lazy"
                onError={(event) => event.currentTarget.closest(".gallery-item")?.remove()}
              />
              <div className="item-actions">
                <button onClick={() => setPreviewImage(image)}>Preview</button>
                <a href={image} download>
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
        {hasMoreImages && (
          <div className="gallery-more">
            <button onClick={() => setVisibleCount((prev) => prev + 24)}>Load More</button>
          </div>
        )}
      </section>

      <section id="blog" className="panel">
        <h2>Design Blog</h2>
        <p className="section-lead">Practical design insights for branding, marketing visuals, and frontend clarity.</p>
        <div className="profile-grid blog-grid">
          {blogCards.map((card) => (
            <article key={card.title} className="card blog-card">
              <p className="blog-tag">{card.tag}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className="blog-meta">{card.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="panel">
        <h2>Contact</h2>
        <p className="section-lead">Direct channels for project discussion, timelines, and collaboration.</p>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:rajsuriya51@gmail.com">
            <span className="contact-icon" aria-hidden="true">
              <MailIcon />
            </span>
            <div>
              <h3>Email</h3>
              <p>rajsuriya51@gmail.com</p>
            </div>
          </a>
          <a className="contact-card" href="https://wa.me/919296353911" target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <WhatsAppIcon />
            </span>
            <div>
              <h3>WhatsApp</h3>
              <p>+91 92963 53911</p>
            </div>
          </a>
          <a className="contact-card" href="https://www.linkedin.com/in/jai1209/" target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <LinkedInIcon />
            </span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/jai1209</p>
            </div>
          </a>
          <a className="contact-card" href="https://github.com/JAI1209?tab=repositories" target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <GitHubIcon />
            </span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/JAI1209</p>
            </div>
          </a>
          <a className="contact-card" href="https://instagram.com/numbjai" target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              <InstagramIcon />
            </span>
            <div>
              <h3>Instagram</h3>
              <p>@numbjai</p>
            </div>
          </a>
        </div>
      </section>

      {previewImage && (
        <div className="modal" onClick={() => setPreviewImage("")}>
          <div className="modal-body" onClick={(event) => event.stopPropagation()}>
            <img src={previewImage} alt="Preview" />
            <div>
              <a href={previewImage} download>
                Download
              </a>
              <button onClick={() => setPreviewImage("")}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
