import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock8Icon } from 'lucide-react';

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCounter: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Start date: August 10, 2024 at midnight
    const startTime = new Date("2024-08-10T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - startTime;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeElapsed.days },
    { label: 'Hours', value: timeElapsed.hours },
    { label: 'Minutes', value: timeElapsed.minutes },
    { label: 'Seconds', value: timeElapsed.seconds }
  ];

  return (
    <div className="w-full">
      <h2 className="flex items-center justify-center text-xl md:text-2xl mb-4 font-medium">
        <Clock8Icon className="w-5 h-5 mr-2 text-pink-400" />
        <span>Time Together Since</span>
      </h2>

      <p className="text-center font-dancing text-2xl font-medium mb-6 text-pink-200">
        August 10, 2024
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-br from-purple-800/40 to-pink-700/40 border border-white/10 backdrop-blur-sm"
          >
            <motion.div
              key={`${unit.value}-${unit.label}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold"
            >
              {unit.value}
            </motion.div>
            <div className="text-sm font-medium mt-1 text-pink-200">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeCounter;
