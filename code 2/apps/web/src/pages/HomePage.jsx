import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Truck, ChefHat, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MascotDecoration from '@/components/MascotDecoration.jsx';
import DishCard from '@/components/DishCard.jsx';

function HomePage() {
  const featuredDishes = [
    {
      image: 'https://images.unsplash.com/photo-1600487204446-7de8d8f6e0bd',
      title: 'Milanesa Completa',
      description: 'Milanesa de carne con papas fritas, ensalada fresca y arroz. El clásico que nunca falla.',
      price: '35.000',
      category: 'Favorito'
    },
    {
      image: 'https://images.unsplash.com/photo-1702827496392-abe9bcadcd07',
      title: 'Bife a Caballo',
      description: 'Jugoso bife con huevo frito, acompañado de mandioca y ensalada mixta.',
      price: '38.000',
      category: 'Especial'
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Hecho como en casa',
      description: 'Preparamos cada plato con ingredientes frescos y el amor de la cocina casera.'
    },
    {
      icon: Clock,
      title: 'Horario 8:00 - 12:00',
      description: 'Abierto de lunes a sábados para que disfrutes de un almuerzo delicioso.'
    },
    {
      icon: Truck,
      title: 'Delivery gratis',
      description: 'Envío sin costo en toda la zona de Sajonia. Pedí por WhatsApp.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sajonnia Bar - Comida casera con delivery gratis en Sajonia</title>
        <meta name="description" content="Comida casera de calidad en Sajonía. Milanesas, bifes, grillé y más. Delivery gratis de 8:00 a 12:00. Pedí por WhatsApp al 0985 150247." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1561350512-3d40d412d73b)',
              filter: 'brightness(0.4)'
            }}
          />
          
          <div className="relative z-10 container-custom text-center text-white py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <MascotDecoration size="xl" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary"
              style={{ letterSpacing: '-0.02em' }}
            >
              Sajonnia Bar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Hecho como en casa, para vos
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-12 text-white/90 max-w-xl mx-auto"
            >
              Comida casera de calidad con delivery gratis en Sajonia. Abierto de 8:00 a 12:00.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/menu">Ver Menú Completo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/delivery">Pedir Delivery</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <MascotDecoration size="lg" className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary" style={{ letterSpacing: '-0.02em' }}>
              ¿Listo para pedir?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
              Contactanos por WhatsApp y recibí tu pedido en minutos. Delivery gratis en Sajonia.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/595985150247', '_blank')}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pedir por WhatsApp
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;