import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 1,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-26T08:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          NOS VEMOS EM:
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className="countdown-box animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 countdown-number">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-white/90 font-semibold uppercase tracking-wide text-sm">
                  {unit === 'days' ? 'Dias' : 
                   unit === 'hours' ? 'Horas' : 
                   unit === 'minutes' ? 'Min' : 'Seg'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;