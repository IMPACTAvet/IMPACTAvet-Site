import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="hexagon-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            GARANTA JÁ SUA VAGA!
          </h2>
          
          <p className="text-2xl md:text-3xl text-orange-200 mb-8 font-semibold">
            UM CURSO 100% EXCLUSIVO QUE VAI TRANSFORMAR O SEU NEGÓCIO!
          </p>
          
          {/* Final Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
          </div>
          
          {/* Final CTA */}
          <button className="cta-button-final group mb-8">
            <span className="relative z-10 flex items-center gap-3">
              TRANSFORMAR MEU NEGÓCIO AGORA
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Security and Payment Info */}
          <div className="text-white/80 space-y-2">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>🔒 Pagamento 100% Seguro</span>
              <span>💳 12x sem juros</span>
              <span>✅ Garantia de 7 dias</span>
            </div>
            <p className="text-xs opacity-70">
              Processamento seguro via PagSeguro, PicPay e principais cartões de crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;