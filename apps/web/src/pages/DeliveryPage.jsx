import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Clock, Truck, DollarSign, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MascotDecoration from '@/components/MascotDecoration.jsx';

function DeliveryPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    order: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hola! Quiero hacer un pedido:\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nDirección: ${formData.address}\nPedido: ${formData.order}`;
    const whatsappUrl = `https://wa.me/595985150247?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirigiendo a WhatsApp",
      description: "Te estamos llevando a WhatsApp para completar tu pedido."
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const deliveryInfo = [
    {
      icon: MapPin,
      title: 'Zona de cobertura',
      description: 'Delivery disponible en toda la zona de Sajonía'
    },
    {
      icon: Clock,
      title: 'Horario de delivery',
      description: 'Lunes a Sábados de 8:00 a 12:00'
    },
    {
      icon: Truck,
      title: 'Delivery gratis',
      description: 'Sin costo de envío en Sajonia'
    },
    {
      icon: DollarSign,
      title: 'Pedido mínimo',
      description: 'Sin monto mínimo de compra'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Delivery - Sajonnia Bar</title>
        <meta name="description" content="Delivery gratis en Sajonia de 8:00 a 12:00. Pedí por WhatsApp al 0985 150247. Sin monto mínimo de compra." />
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
                Delivery Gratis
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
                Recibí tu comida favorita en la puerta de tu casa sin costo de envío
              </p>
            </motion.div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-4">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Form */}
        <main className="flex-grow py-20 bg-muted">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Hacé tu pedido
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Completá el formulario y te contactaremos por WhatsApp para confirmar tu pedido
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Nombre completo</Label>
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
                  <Label htmlFor="phone" className="text-card-foreground">Teléfono</Label>
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
                  <Label htmlFor="address" className="text-card-foreground">Dirección de entrega</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Calle, número, barrio"
                    className="mt-2 text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="order" className="text-card-foreground">Detalle del pedido</Label>
                  <Textarea
                    id="order"
                    name="order"
                    required
                    value={formData.order}
                    onChange={handleChange}
                    placeholder="Ej: 2 Milanesas completas, 1 Bife a caballo..."
                    rows={4}
                    className="mt-2 text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full transition-all duration-200 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar pedido por WhatsApp
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  También podés llamarnos directamente al{' '}
                  <a href="tel:+595985150247" className="text-primary font-semibold hover:underline">
                    0985 150247
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default DeliveryPage;