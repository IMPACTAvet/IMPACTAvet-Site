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

const InteractiveSpeakers2 = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      id: 'vinicius',
      name: 'Vinicius Tavares',
      specialty: 'O INVISÍVEL QUE SUSTENTA - Liderança e Saúde emocional',
      image: 'https://i.postimg.cc/R0hYJD63/Whats-App-Image-2025-07-09-at-17-02-22.jpg',
      bio: 'Consultor em liderança e desenvolvimento de equipes de alta performance, especializado em saúde emocional e bem-estar organizacional.',
      achievements: [
        'Consultor de +300 líderes empresariais',
        'Especialista em saúde mental corporativa',
        'Metodologia própria de liderança sustentável'
      ],
      position: 'left'
    },
    {
      id: 'gabriel',
      name: 'Gabriel Maia',
      specialty: 'Posicionamento Digital e Experiência do Cliente',
      image: 'https://i.postimg.cc/T2g4bmwc/Whats-App-Image-2025-07-04-at-19-22-53-1.jpg',
      bio: 'Especialista em marketing digital e experiência do cliente no setor PET, com foco em estratégias de posicionamento e engajamento.',
      achievements: [
        'Transformou +150 marcas veterinárias',
        'Expert em marketing digital PET',
        'Palestrante em eventos internacionais'
      ],
      position: 'center'
    },
    {
      id: 'ana',
      name: 'Ana C. Maistrovicz',
      specialty: 'Do caos a alta performance: construindo times que entregam!',
      image: 'https://i.postimg.cc/wM84PxWJ/Whats-App-Image-2025-07-09-at-15-48-19.jpg',
      bio: 'Consultora em gestão de pessoas e construção de equipes eficientes, especializada em transformar equipes disfuncionais em times de alta performance.',
      achievements: [
        'Reestruturou +200 equipes empresariais',
        'Metodologia exclusiva de team building',
        'Consultora certificada em gestão de pessoas'
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
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 py-20 overflow-hidden">
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
              Quem vai te guiar nessa jornada
            </h2>
            <p className="text-xl md:text-2xl text-orange-200 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              
            </p>
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

export default InteractiveSpeakers2;