import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'star';
}

const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    // Create random floating elements
    const newElements: FloatingElement[] = [];
    const elementCount = window.innerWidth < 768 ? 10 : 20;
    
    for (let i = 0; i < elementCount; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100, // random position as percentage of viewport
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5, // random size between 0.5 and 2
        duration: Math.random() * 20 + 20, // random duration between 20 and 40 seconds
        delay: Math.random() * 10, // random delay for start
        type: Math.random() > 0.3 ? 'heart' : 'star' // 70% hearts, 30% stars
      });
    }
    
    setElements(newElements);
  }, []);

  // Star component using SVG
  const Star = ({ size }: { size: number }) => (
    <svg width={size * 10} height={size * 10} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
            fill="rgba(255, 255, 255, 0.5)" />
    </svg>
  );
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: ['0%', '100%'],
            x: [`${element.x}%`, `${element.x + (Math.random() * 20 - 10)}%`]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {element.type === 'heart' ? (
            <Heart 
              size={element.size * 15} 
              className="text-pink-400 fill-pink-400" 
            />
          ) : (
            <Star size={element.size} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;