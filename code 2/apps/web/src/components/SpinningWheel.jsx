import React from 'react';

const DISHES = [
  "Asado a la olla", "Tallarín", "Vorí vorí", "Bife koygua", 
  "Cazuela de mondongo", "Tarta de pollo", "Ñoqui", "Mostaccioli", 
  "Pastelón", "Lasaña", "Vacío", "Cerdo", "Chupín de pollo", 
  "Fugazza", "Guiso", "Poroto", "Stroganoff", "Salteado", 
  "Estofado", "Soyo", "Muslo", "Feijoada", "Hígado", 
  "Ravioles", "Fetuccine"
];

function SpinningWheel() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[450px] md:max-w-[550px] aspect-square mx-auto my-8">
      {/* SVG Wheel with continuous spin */}
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full animate-[spin_60s_linear_infinite] drop-shadow-xl"
        aria-hidden="true"
      >
        <circle 
          cx="250" 
          cy="250" 
          r="240" 
          fill="hsl(var(--primary))" 
          stroke="hsl(var(--secondary))" 
          strokeWidth="8" 
        />
        
        {DISHES.map((dish, i) => {
          const angle = i * (360 / DISHES.length);
          return (
            <g key={i} transform={`rotate(${angle}, 250, 250)`}>
              {/* Divider lines between slices */}
              <line 
                x1="250" 
                y1="250" 
                x2="250" 
                y2="10" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="1" 
                opacity="0.3" 
              />
              {/* Dish Text */}
              <text
                x="250"
                y="170"
                fill="hsl(var(--secondary))"
                fontSize="12.5"
                fontWeight="600"
                fontFamily="inherit"
                textAnchor="start"
                dominantBaseline="middle"
                transform="rotate(-90, 250, 170)"
                style={{ 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.03em' 
                }}
              >
                {dish}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Center Static Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[42%] bg-background rounded-full border-[6px] border-secondary flex flex-col items-center justify-center p-3 sm:p-5 text-center shadow-inner z-10">
        <span className="text-primary font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase mb-1">
          Rotativo
        </span>
        <span className="text-foreground font-medium text-[10px] sm:text-xs md:text-sm leading-tight text-balance">
          Consulta el<br/>plato del día
        </span>
      </div>

      {/* Top Pointer Arrow */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-secondary z-20 drop-shadow-md" />
    </div>
  );
}

export default SpinningWheel;