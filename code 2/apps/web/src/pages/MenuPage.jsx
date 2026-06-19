import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import DishCard from '@/components/DishCard.jsx';
import SpinningWheel from '@/components/SpinningWheel.jsx';

function MenuPage() {
  const diarioItems = [
    {
      image: 'https://horizons-cdn.hostinger.com/9d8dce46-d857-4cc1-88f9-223b11875a03/f26399ab2ea200559b717cb15d3d778f.png',
      title: 'Marinera o milanesa de pollo',
      description: 'Clásica milanesa o marinera de pollo dorada y crujiente.',
      price: '22.000'
    },
    {
      image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80&w=800',
      title: 'Marinera o milanesa de carne',
      description: 'Milanesa o marinera de carne de primera calidad.',
      price: '25.000'
    },
    {
      image: 'https://i.imgur.com/DhJDuSth.jpg',
      title: 'Grillé de pollo',
      description: 'Pechuga de pollo a la plancha, jugosa y saludable.',
      price: '25.000'
    },
    {
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
      title: 'Grillé a la napolitana',
      description: 'Pollo grillé cubierto con salsa, jamón y queso gratinado.',
      price: '28.000'
    },
    {
      image: 'https://i.imgur.com/AvCZ4jsh.jpg',
      title: 'Bife a la plancha',
      description: 'Bife tierno cocinado a la plancha en su punto justo.',
      price: '26.000'
    },
    {
      image: 'https://i.imgur.com/8MNaRVLh.jpg',
      title: 'Milanesa a la napolitana de carne o pollo',
      description: 'Nuestra especialidad gratinada con salsa, jamón y queso.',
      price: '28.000'
    },
    {
      image: 'https://i.imgur.com/nQWzU4Hh.jpg',
      title: 'Bife a caballo',
      description: 'Bife a la plancha coronado con dos huevos fritos.',
      price: '30.000'
    },
    {
      image: 'https://horizons-cdn.hostinger.com/9d8dce46-d857-4cc1-88f9-223b11875a03/2ad97290202ff608d38bf0b11ca21400.png',
      title: 'Sándwich de mila de pollo completo',
      description: 'En pan fresco con lechuga, tomate, huevo, jamón y queso.',
      price: '20.000'
    },
    {
      image: 'https://i.imgur.com/rWVwyl7h.jpg',
      title: 'Sándwich de mila de carne completo',
      description: 'Abundante sándwich con todos los agregados.',
      price: '22.000'
    },
    {
      image: 'https://i.imgur.com/n0FjhzBh.jpg',
      title: 'Sándwich de carne',
      description: 'Clásico sándwich de carne tierna.',
      price: '24.000'
    }
  ];

  const guarniciones = [
    'Fideo al pesto',
    'Fideo a la crema',
    'Arroz quesú',
    'Fideo a la manteca',
    'Ensalada de arroz',
    'Ensalada de repollo',
    'Ensalada mixta'
  ];

  return (
    <>
      <Helmet>
        <title>Menú - Sajonnia Bar</title>
        <meta name="description" content="Explorá nuestro menú completo: platos rotativos del día, milanesas, grillé, sándwiches y más. Comida casera de calidad en Sajonia." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-20 bg-background">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Nuestro Menú
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comida casera, abundante y deliciosa. Disfrutá de nuestra rueda de especialidades rotativas o elegí tus clásicos favoritos de siempre.
              </p>
            </div>

            {/* Rotativo Section */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  PLATOS ROTATIVOS
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Cada día preparamos una selección diferente de platos especiales. ¡Comunicate con nosotros para consultar cuál toca hoy!
                </p>
                <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
              </div>
              
              <SpinningWheel />
            </section>

            {/* Diario Section */}
            <section className="mb-20">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  DIARIO CON GUARNICIÓN
                </h2>
                <p className="text-muted-foreground text-lg">
                  Nuestros clásicos de lunes a sábados. Incluyen una guarnición a elección.
                </p>
                <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diarioItems.map((item, index) => (
                  <DishCard
                    key={index}
                    {...item}
                    category="Clásico"
                  />
                ))}
              </div>
            </section>

            {/* Guarniciones Section */}
            <section className="mt-20 bg-secondary/30 rounded-3xl p-8 md:p-12 border border-secondary/50">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  GUARNICIONES
                </h2>
                <p className="text-muted-foreground">
                  Acompañá tus platos diarios con nuestras sabrosas opciones caseras
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {guarniciones.map((guarnicion, index) => (
                  <div 
                    key={index}
                    className="bg-background px-6 py-3 rounded-full shadow-sm border border-border text-foreground font-medium text-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    {guarnicion}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MenuPage;