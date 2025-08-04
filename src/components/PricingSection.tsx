import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="hexagon-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold mb-8 animate-pulse">
            <Zap className="w-5 h-5" />
            VAGAS LIMITADAS!
          </div>
          
          {/* Pricing */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
            <div className="text-white mb-4">
              <span className="text-2xl">Por somente</span>
            </div>
            <div className="text-6xl md:text-7xl font-black text-orange-400 mb-4">
              R$ 9.900
            </div>
            <div className="text-orange-200 text-lg mb-6">
              ou 12x de R$ 993,98
            </div>
            
            {/* Scarcity */}
            <div className="bg-red-600/80 text-white py-3 px-6 rounded-xl mb-6">
              <div className="font-bold">Válida para os 15 primeiros inscritos</div>
              <div className="text-sm opacity-90">Restam apenas 7 vagas!</div>
            </div>
            
            {/* Features */}
            <div className="text-left mb-8">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  '3 dias de imersão completa',
                  'Material didático exclusivo',
                  'Certificado de participação',
                  'Acesso vitalício ao conteúdo',
                  'Mentorias individuais',
                  'Networking com especialistas'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="cta-button-large group mb-4">
            <span className="relative z-10">GARANTA JÁ SUA VAGA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <div className="text-white/80 text-sm">
            💳 Parcelamento em até 12x sem juros<br />
            🔒 Pagamento 100% seguro
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;