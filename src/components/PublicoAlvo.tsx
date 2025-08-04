import React from 'react';

const PublicoAlvo = () => {
  const publicoCards = [
    {
      emoji: '👩‍⚕️',
      title: 'Veterinários empreendedores',
      description: 'Profissionais que desejam expandir seus negócios e maximizar resultados'
    },
    {
      emoji: '🏥',
      title: 'Donos de clínicas ou hospitais',
      description: 'Proprietários que querem otimizar processos e aumentar a rentabilidade'
    },
    {
      emoji: '📈',
      title: 'Gestores e líderes do mercado PET & VET',
      description: 'Líderes que buscam estratégias avançadas de gestão e crescimento'
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Um evento pensado para
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {publicoCards.map((card, index) => (
            <div
              key={index}
              className="target-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 text-center">{card.emoji}</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicoAlvo;