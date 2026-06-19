import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChefHat } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import DishCard from '@/components/DishCard.jsx';
import MascotDecoration from '@/components/MascotDecoration.jsx';

function AlmuerzoPage() {
  const dailySpecials = [
    {
      day: 'Lunes',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Milanesa con Puré',
      description: 'Milanesa de carne jugosa acompañada de puré de papas cremoso, ensalada fresca y arroz blanco. Incluye bebida.',
      price: '32.000'
    },
    {
      day: 'Martes',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Pollo al Horno',
      description: 'Pechuga de pollo al horno con papas doradas, ensalada mixta y arroz. Incluye bebida.',
      price: '32.000'
    },
    {
      day: 'Miércoles',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Bife con Mandioca',
      description: 'Bife a la plancha con mandioca frita crocante, ensalada de tomate y arroz. Incluye bebida.',
      price: '35.000'
    },
    {
      day: 'Jueves',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Grillé Mixto',
      description: 'Carne, pollo y chorizo a la parrilla con mandioca, ensalada completa y arroz. Incluye bebida.',
      price: '38.000'
    },
    {
      day: 'Viernes',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Milanesa Napolitana',
      description: 'Milanesa napolitana con jamón y queso, papas fritas, ensalada y arroz. Incluye bebida.',
      price: '36.000'
    },
    {
      day: 'Sábado',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Asado Completo',
      description: 'Asado de tira con mandioca, ensalada de repollo, arroz y chimichurri casero. Incluye bebida.',
      price: '40.000'
    },
    {
      day: 'Domingo',
      image: 'https://images.unsplash.com/photo-1605231482169-71b0aeccaa16',
      title: 'Especial del Chef',
      description: 'Plato sorpresa del día preparado por nuestro chef con ingredientes frescos. Incluye bebida.',
      price: '35.000'
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Menú diario',
      description: 'Plato diferente cada día de la semana'
    },
    {
      icon: Clock,
      title: 'Disponible 8:00 - 12:00',
      description: 'Pedí tu almuerzo en nuestro horario'
    },
    {
      icon: ChefHat,
      title: 'Comida completa',
      description: 'Incluye plato principal, guarniciones y bebida'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Almuerzo Diario - Sajonnia Bar</title>
        <meta name="description" content="Menú de almuerzo diario con platos completos desde 32.000 Gs. Incluye bebida. Delivery gratis en Sajonia de 8:00 a 12:00." />
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
                Almuerzo Diario
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
                Comida completa de lunes a sábados con plato principal, guarniciones y bebida incluida
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-3">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Menu */}
        <main className="flex-grow py-20 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Menú de la Semana
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Cada día un plato especial preparado con ingredientes frescos
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/ExBb4y5h.jpg" 
                alt="Menú de la semana" 
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="mt-16 text-center bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                ¿Querés pedir tu almuerzo?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Contactanos por WhatsApp y recibí tu comida completa con delivery gratis en Sajonia
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AlmuerzoPage;