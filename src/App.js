import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Shield, Users, Star, Check, Apple, Menu, X } from 'lucide-react';

export default function OrthonCareLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Sécurisé et Confidentiel",
      description: "Vos données de santé sont protégées par un cryptage de niveau médical"
    },
    {
      icon: Users,
      title: "Suivi Patient Intelligent",
      description: "Gérez tous vos patients avec un système de suivi complet et intuitif"
    },
    {
      icon: Smartphone,
      title: "Accessible Partout",
      description: "Accédez à vos dossiers depuis n'importe quel appareil, à tout moment"
    },
    {
      icon: Star,
      title: "Interface Intuitive",
      description: "Une expérience utilisateur pensée pour les professionnels de santé"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Martin",
      role: "Orthodontiste",
      text: "OrthonCare a transformé ma pratique. Je gagne 3 heures par jour sur la gestion administrative.",
      rating: 5
    },
    {
      name: "Dr. Ahmed Benali",
      role: "Chirurgien-dentiste",
      text: "L'application la plus complète du marché. Mes patients adorent le suivi en temps réel.",
      rating: 5
    },
    {
      name: "Dr. Marie Dubois",
      role: "Orthodontiste pédiatrique",
      text: "Indispensable pour mon cabinet. Le support client est exceptionnel !",
      rating: 5
    }
  ];

  return (
    <div className="orthoncare-app" style={{
      fontFamily: "'Onest', 'General Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2942 50%, #0f2744 100%)',
      minHeight: '100vh',
      color: '#ffffff'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=Onest:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-blue: #0EA5E9;
          --deep-blue: #0c4a6e;
          --light-blue: #38bdf8;
          --accent-cyan: #22d3ee;
          --dark-bg: #0a1628;
          --card-bg: rgba(30, 58, 88, 0.6);
        }

        .orthoncare-app {
          overflow-x: hidden;
        }

        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          backdrop-filter: blur(20px);
          background: rgba(10, 22, 40, 0.85);
          border-bottom: 1px solid rgba(14, 165, 233, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-header.scrolled {
          padding: 1rem 2rem;
          background: rgba(10, 22, 40, 0.95);
          box-shadow: 0 10px 40px rgba(14, 165, 233, 0.15);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Epilogue', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-blue);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-blue);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hero-section {
          position: relative;
          padding: 180px 2rem 120px;
          max-width: 1400px;
          margin: 0 auto;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-blue);
          top: -100px;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: var(--accent-cyan);
          bottom: 10%;
          left: 5%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 350px;
          height: 350px;
          background: var(--light-blue);
          top: 40%;
          left: 40%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: rgba(14, 165, 233, 0.15);
          border: 1px solid rgba(14, 165, 233, 0.3);
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-family: 'Epilogue', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, var(--light-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-subtitle {
          font-size: 1.4rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards;
        }

        .download-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s backwards;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%);
          color: white;
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px rgba(14, 165, 233, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(14, 165, 233, 0.4);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--primary-blue);
          transform: translateY(-3px);
        }

        .stats-section {
          padding: 80px 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-card {
          padding: 2.5rem 2rem;
          background: var(--card-bg);
          border-radius: 24px;
          border: 1px solid rgba(14, 165, 233, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-blue);
          box-shadow: 0 20px 60px rgba(14, 165, 233, 0.25);
        }

        .stat-number {
          font-family: 'Epilogue', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .features-section {
          padding: 120px 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Epilogue', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, var(--light-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .feature-card {
          padding: 3rem 2.5rem;
          background: var(--card-bg);
          border-radius: 24px;
          border: 1px solid rgba(14, 165, 233, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-blue);
          box-shadow: 0 25px 70px rgba(14, 165, 233, 0.3);
        }

        .feature-card.active {
          border-color: var(--primary-blue);
          box-shadow: 0 20px 60px rgba(14, 165, 233, 0.25);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-family: 'Epilogue', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .feature-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .testimonials-section {
          padding: 120px 2rem;
          max-width: 1400px;
          margin: 0 auto;
          background: linear-gradient(180deg, transparent 0%, rgba(14, 165, 233, 0.05) 100%);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .testimonial-card {
          padding: 2.5rem;
          background: var(--card-bg);
          border-radius: 24px;
          border: 1px solid rgba(14, 165, 233, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-blue);
          box-shadow: 0 20px 60px rgba(14, 165, 233, 0.25);
        }

        .stars {
          display: flex;
          gap: 0.3rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 600;
          color: white;
          margin-bottom: 0.3rem;
        }

        .testimonial-role {
          color: var(--accent-cyan);
          font-size: 0.95rem;
        }

        .cta-section {
          padding: 120px 2rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-box {
          padding: 4rem 3rem;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(34, 211, 238, 0.1) 100%);
          border-radius: 32px;
          border: 1px solid rgba(14, 165, 233, 0.3);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-family: 'Epilogue', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, var(--light-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-text {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
        }

        .footer {
          padding: 3rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          border-top: 1px solid rgba(14, 165, 233, 0.2);
          text-align: center;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary-blue);
        }

        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 22, 40, 0.98);
            padding: 2rem;
            gap: 1.5rem;
            border-top: 1px solid rgba(14, 165, 233, 0.2);
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .download-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 140px 1rem 80px;
          }

          .logo {
            font-size: 1.5rem;
          }

          .badge {
            font-size: 0.85rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">OrthonCare</div>
          <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#features" className="nav-link">Fonctionnalités</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#download" className="nav-link">Télécharger</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="badge">
            <Star size={18} fill="currentColor" />
            <span>L'application n°1 pour les orthodontistes</span>
          </div>
          
          <h1 className="hero-title">
            Gérez votre cabinet avec excellence
          </h1>
          
          <p className="hero-subtitle">
            OrthonCare révolutionne la gestion de votre pratique orthodontique avec une solution complète, sécurisée et intuitive. Rejoignez plus de 5000 professionnels qui nous font confiance.
          </p>
          
{/* <div className="download-buttons" id="download">
  <a href="/download/app-release.apk" download className="btn btn-primary">
    <Download size={22} />
    <span>Télécharger pour Android</span>
  </a>
</div> */}

        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Professionnels actifs</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Patients suivis</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Note moyenne</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Disponibilité</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2 className="section-title">Tout ce dont vous avez besoin</h2>
        <p className="section-subtitle">
          Une suite complète d'outils conçus spécifiquement pour les orthodontistes modernes
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
            >
              <div className="feature-icon">
                <feature.icon size={32} color="white" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">Ce que disent nos utilisateurs</h2>
        <p className="section-subtitle">
          Des milliers de professionnels satisfaits à travers le monde
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#22d3ee" color="#22d3ee" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à transformer votre pratique ?</h2>
            <p className="cta-text">
              Rejoignez la révolution OrthonCare et découvrez une nouvelle façon de gérer votre cabinet
            </p>
            <div className="download-buttons">
              <a href="#" className="btn btn-primary">
                <Download size={22} />
                <span>Commencer maintenant</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="copyright">
            © 2024 OrthonCare. Tous droits réservés.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Confidentialité</a>
            <a href="#" className="footer-link">Conditions</a>
            <a href="#" className="footer-link">Support</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}