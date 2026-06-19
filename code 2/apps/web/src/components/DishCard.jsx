import React from 'react';
import { motion } from 'framer-motion';
import OrderButton from './OrderButton.jsx';

function DishCard({ image, title, description, price, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {category && (
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <OrderButton dishName={title} />
        </div>
      </div>
    </motion.div>
  );
}

export default DishCard;