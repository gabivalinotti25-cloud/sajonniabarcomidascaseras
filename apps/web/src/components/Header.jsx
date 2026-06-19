import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MascotDecoration from './MascotDecoration.jsx';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/menu', label: 'Menú' },
    { path: '/almuerzo-diario', label: 'Almuerzo Diario' },
    { path: '/delivery', label: 'Delivery' },
    { path: '/contact', label: 'Contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open('https://wa.me/595985150247', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Mascot */}
          <Link to="/" className="flex items-center gap-3 group">
            <MascotDecoration size="sm" className="transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h1 className="text-2xl font-bold text-secondary" style={{ letterSpacing: '-0.02em' }}>
                Sajonnia Bar
              </h1>
              <p className="text-xs text-primary-foreground/80">Hecho como en casa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button - Desktop */}
          <Button
            onClick={handleWhatsApp}
            variant="secondary"
            className="hidden md:flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleWhatsApp}
              variant="secondary"
              className="w-full mt-4 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactar por WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;