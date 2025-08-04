import React from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import WistiaEmbed from './WistiaEmbed';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-red-900 overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="hexagon-pattern"></div>
      </div>
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-hex hex-1"></div>
        <div className="floating-hex hex-2"></div>
        <div className="floating-hex hex-3"></div>
      </div>

      <div className="container mx-auto px-6 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="text-white animate-slide-in-left">
            {/* Logo with Shine Effect */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-black mb-2 logo-shine">
                IMPACTA
                <span className="text-2xl md:text-3xl font-medium align-top ml-1">vet</span>
              </h1>
            </div>

            {/* Headlines */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Eleve sua mentalidade.<br />
              Expanda seu impacto.<br />
              <span className="text-orange-300">Multiplique seus resultados.</span>
            </h2>

            <p className="text-xl md:text-2xl mb-6 text-orange-100">
              A imersão que vai virar a chave do seu negócio veterinário!
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-300" />
                <span>26 a 28 de Setembro</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-300" />
                <span>São Paulo/SP</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="cta-button group">
              <span className="relative z-10">GARANTA JÁ SUA VAGA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column - Video Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative flex flex-col items-center">
              <WistiaEmbed
                mediaId="1jwo5w6x2c"
                title="Apresentação IMPACTAvet"
                aspectRatio={0.5660377358490566}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;