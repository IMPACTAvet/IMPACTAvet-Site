import React, { useState } from 'react';
import { X, Award, Users, TrendingUp } from 'lucide-react';

interface Speaker {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  achievements: string[];
  position: 'left' | 'center' | 'right';
}

const InteractiveSpeakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      id: 'filipe',
      name: 'Filipe Santos',
      specialty: 'Inteligência Artificial Aplicada aos Negócios',
      image: 'https://i.postimg.cc/Y9mybLxM/Whats-App-Image-2025-07-09-at-15-48-11.jpg',
      bio: 'Pioneer em implementação de IA no mercado veterinário brasileiro, com mais de 15 anos de experiência em transformação digital.',
      achievements: [
        'Implementou IA em +200 clínicas veterinárias',
        'Palestrante internacional em tecnologia',
        'Autor de 3 livros sobre inovação'
      ],
      position: 'left'
    },
    {
      id: 'vanderlei',
      name: 'Vanderlei P. Mello Júnior',
      specialty: 'Apetite ao Risco e Vendas',
      image: 'https://i.postimg.cc/qqsDdfYF/Whats-App-Image-2025-07-09-at-15-48-02.jpg',
      bio: 'Especialista em estratégias de vendas e gestão de riscos, com track record de aumentar faturamento em até 300%.',
      achievements: [
        'Consultor de +500 empresas veterinárias',
        'Metodologia própria de vendas',
        'Resultados comprovados há 20 anos'
      ],
      position: 'center'
    },
    {
      id: 'daltro',
      name: 'Daltro Galli',
      specialty: 'Finanças Descomplicadas para Tomada de Decisão',
      image: 'https://i.postimg.cc/7LRW3n0K/Whats-App-Image-2025-07-09-at-15-49-05.jpg',
      bio: 'Expert em gestão financeira aplicada ao setor veterinário, transformando números complexos em decisões estratégicas.',
      achievements: [
        'CFO de grandes redes veterinárias',
        'Especialista em análise financeira',
        'Mentor de +1000 profissionais'
      ],
      position: 'right'
    }
  ];

  const openModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 py-20 overflow-hidden">
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
              Quem vai te guiar nessa jornada
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
          </div>

          {/* Speakers Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="speaker-interactive-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.3}s` }}
                onClick={() => openModal(speaker)}
              >
                {/* Specialty Tag */}
                <div className="specialty-tag">
                  {speaker.specialty}
                </div>

                {/* Speaker Image */}
                <div className="speaker-image-container">
                  <div className="speaker-image-wrapper">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="speaker-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                </div>

                {/* Speaker Name */}
                <div className="speaker-name-container">
                  <h3 className="speaker-name">
                    {speaker.name}
                  </h3>
                  <div className="click-indicator">
                    Clique para saber mais
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-2xl w-full relative border border-orange-500/20 modal-content">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Speaker Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500/50">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Speaker Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedSpeaker.name}
                </h3>
                <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {selectedSpeaker.specialty}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedSpeaker.bio}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-orange-400 font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Principais Conquistas
                  </h4>
                  {selectedSpeaker.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveSpeakers;