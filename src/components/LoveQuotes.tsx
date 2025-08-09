import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const loveQuotes = [
  "Every moment with you feels like a beautiful dream I never want to wake up from.",
  "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my mate.",
  "I never knew what love was until I met you, and now I never want to be without it.",
  "You're my favorite place to go when my mind searches for peace.",
  "I love you not only for what you are, but for what I am when I'm with you.",
  "My love for you grows stronger with each passing day.",
  "You are the missing piece I've been searching for all my life.",
  "Every beat of my heart belongs to you."
];

const LoveQuotes: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % loveQuotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-32 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-3">
        <QuoteIcon className="w-5 h-5 mr-1 text-pink-400" />
        <h3 className="text-xl font-medium">From My Heart to Yours</h3>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuoteIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center font-dancing text-xl text-pink-200 italic px-4"
        >
          {loveQuotes[currentQuoteIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default LoveQuotes;