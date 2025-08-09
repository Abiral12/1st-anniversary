import React, { useEffect, useRef } from 'react';
// import anime from 'animejs';

const Background: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!bgRef.current) return;
    
    // Subtle background animation
    // anime({
    //   targets: '.gradient-circle',
    //   translateX: function() { return anime.random(-10, 10) + 'px'; },
    //   translateY: function() { return anime.random(-10, 10) + 'px'; },
    //   scale: function() { return 0.9 + anime.random(0, 0.3); },
    //   easing: 'easeInOutQuad',
    //   duration: 8000,
    //   complete: function(anim) {
    //     anime({
    //       targets: '.gradient-circle',
    //       translateX: function() { return anime.random(-10, 10) + 'px'; },
    //       translateY: function() { return anime.random(-10, 10) + 'px'; },
    //       scale: function() { return 0.9 + anime.random(0, 0.3); },
    //       easing: 'easeInOutQuad',
    //       duration: 8000,
    //       loop: true
    //     });
    //   }
    // });
  }, []);
  
  return (
    <div ref={bgRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-900 to-purple-950"></div>
      
      {/* Animated gradient circles */}
      <div className="gradient-circle absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="gradient-circle absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-red-500/20 to-pink-600/20 blur-3xl opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
      <div className="gradient-circle absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl opacity-50"></div>
      
      {/* Starry background - subtle dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-[2px] h-[2px] bg-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 7}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;