import React, { useEffect, useRef } from 'react';
// import anime from 'animejs/lib/anime.es.js';



interface HeartWithInitialsProps {
  initials: string;
}

const HeartWithInitials: React.FC<HeartWithInitialsProps> = ({ initials }) => {
  const heartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heartRef.current) return;
    
    // Pulsing animation for the heart
    // const animation = anime({
    //   targets: heartRef.current,
    //   scale: [1, 1.1, 1],
    //   opacity: [0.9, 1, 0.9],
    //   easing: 'easeInOutSine',
    //   duration: 1500,
    //   loop: true
    // });
    
    return () => {
      // animation.pause();
    };
  }, []);
  
  return (
    <div ref={heartRef} className="relative flex items-center justify-center w-40 h-40 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-80 rounded-full blur-xl"></div>
      <div className="relative">
        {/* Heart shape with CSS */}
        <div className="w-32 h-32 relative">
          <div className="absolute w-full h-full transform rotate-45 origin-bottom-right">
            <div className="w-3/4 h-3/4 bg-gradient-to-br from-red-400 to-pink-600 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-none"></div>
          </div>
          <div className="absolute w-full h-full transform -rotate-45 origin-bottom-left">
            <div className="w-3/4 h-3/4 bg-gradient-to-br from-red-400 to-pink-600 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-none"></div>
          </div>
          {/* Initials */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 font-dancing text-2xl font-bold text-white">
            {initials}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartWithInitials;