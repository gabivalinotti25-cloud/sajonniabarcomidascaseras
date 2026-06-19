import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MascotDecoration from '@/components/MascotDecoration.jsx';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola! Me contacto desde el formulario web:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/595985150247?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Mensaje enviado",
      description: "Te estamos redirigiendo a WhatsApp para completar tu consulta."
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '0985 150247',
      action: () => window.open('https://wa.me/595985150247', '_blank')
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Sajonia, Paraguay',
      action: null
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Sábados\n8:00 - 12:00',
      action: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Sajonnia Bar</title>
        <meta name="description" content="Contactanos por WhatsApp al 0985 150247. Estamos en Sajonia, Paraguay. Horario: 8:00 a 12:00 de lunes a sábados." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MascotDecoration size="lg" className="mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary" style={{ letterSpacing: '-0.02em' }}>
                Contacto
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
                Estamos para ayudarte. Contactanos por WhatsApp o completá el formulario
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-card rounded-2xl p-6 shadow-lg text-center ${
                    info.action ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
                  }`}
                  onClick={info.action}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-4">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <main className="flex-grow py-20 bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Envianos un mensaje
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Completá el formulario y te responderemos a la brevedad por WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="mt-2 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="mt-2 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0981 234567"
                      className="mt-2 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      className="mt-2 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                    Contacto directo
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Preferís hablar directamente? Contactanos por WhatsApp y te atenderemos enseguida.
                  </p>
                  <Button
                    onClick={() => window.open('https://wa.me/595985150247', '_blank')}
                    size="lg"
                    className="w-full transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                    Seguinos en redes
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mantente al día con nuestras novedades, promociones y menú del día.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg">
                  <MascotDecoration size="md" className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary mb-2 text-center">
                    Delivery gratis
                  </h3>
                  <p className="text-sm text-primary-foreground/90 text-center">
                    Recordá que tenemos delivery sin costo en toda la zona de Sajonia de 8:00 a 12:00
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;