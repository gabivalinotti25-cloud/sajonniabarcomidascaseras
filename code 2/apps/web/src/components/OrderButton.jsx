import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function OrderButton({ dishName, variant = 'default', className = '' }) {
  const handleOrder = () => {
    const message = dishName 
      ? `Hola! Me gustaría pedir: ${dishName}`
      : 'Hola! Me gustaría hacer un pedido';
    const whatsappUrl = `https://wa.me/595985150247?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleOrder}
      variant={variant}
      className={`transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Pedir
    </Button>
  );
}

export default OrderButton;