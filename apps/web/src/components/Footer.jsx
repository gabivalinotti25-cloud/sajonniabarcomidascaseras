import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import MascotDecoration from './MascotDecoration.jsx';

function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/595985150247', '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MascotDecoration size="md" />
              <div>
                <span className="text-2xl font-bold text-secondary">Sajonnia Bar</span>
                <p className="text-sm text-primary-foreground/80">Hecho como en casa, para vos</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Comida casera de calidad con el sabor que te gusta. Delivery gratis en Sajonia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-secondary mb-4 block">Enlaces rápidos</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                Inicio
              </Link>
              <Link to="/menu" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                Menú
              </Link>
              <Link to="/almuerzo-diario" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                Almuerzo Diario
              </Link>
              <Link to="/delivery" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                Delivery
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold text-secondary mb-4 block">Contacto</span>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>0985 150247</span>
              </button>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span>8:00 - 12:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Sajonia, Paraguay</span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <span className="text-lg font-semibold text-secondary mb-4 block">Delivery</span>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-primary-foreground/80">
                <span className="font-semibold text-secondary">Gratis</span> en Sajonia
              </p>
              <p className="text-sm text-primary-foreground/80">
                Horario: 8:00 - 12:00
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://facebook.com/SajonniaBarComidasyTragos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/bar_sajonnia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Sajonnia Bar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
