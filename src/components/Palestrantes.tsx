import React from 'react';

const Palestrantes = () => {
  const palestrantes = [
    {
      initials: 'VM',
      name: 'Vanderlei P. Mello Júnior',
      topic: 'Apetite ao Risco e Vendas',
      description: 'Especialista em estratégias de vendas e gestão de riscos no mercado veterinário'
    },
    {
      initials: 'DG',
      name: 'Daltro Galli',
      topic: 'Finanças Descomplicadas para Tomada de Decisão',
      description: 'Expert em gestão financeira aplicada ao setor veterinário'
    },
    {
      initials: 'FS',
      name: 'Filipe Santos',
      topic: 'Inteligência Artificial Aplicada aos Negócios',
      description: 'Pioneer em implementação de IA no mercado veterinário brasileiro'
    },
    {
      initials: 'VT',
      name: 'Vinicius Tavares',
      topic: 'O INVISÍVEL QUE SUSTENTA - Liderança e Saúde emocional',
      description: 'Consultor em liderança e desenvolvimento de equipes de alta performance'
    },
    {
      initials: 'GM',
      name: 'Gabriel Maia',
      topic: 'Posicionamento Digital e Experiência do Cliente',
      description: 'Especialista em marketing digital e experiência do cliente no setor PET'
    },
    {
      initials: 'AM',
      name: 'Ana C. Maistrovictz',
      topic: 'Do caos a alta performance: construindo times que entregam!',
      description: 'Consultora em gestão de pessoas e construção de equipes eficientes'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Quem vai te guiar nessa jornada
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palestrantes.map((palestrante, index) => (
            <div
              key={index}
              className="speaker-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="avatar-gradient mb-6">
                <span className="text-2xl font-black text-white">
                  {palestrante.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {palestrante.name}
              </h3>
              <h4 className="text-lg font-semibold text-orange-600 mb-3">
                {palestrante.topic}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {palestrante.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Palestrantes;