import React from 'react';
import { Users, DollarSign, Target, Bot, Brain, Star } from 'lucide-react';

const Aprendizados = () => {
  const aprendizados = [
    {
      icon: Users,
      title: 'Construir equipes que entregam resultados',
      description: 'Metodologias comprovadas para formar e liderar times de alta performance'
    },
    {
      icon: DollarSign,
      title: 'Tomar decisões financeiras com clareza',
      description: 'Ferramentas práticas para análise financeira e tomada de decisão estratégica'
    },
    {
      icon: Target,
      title: 'Vender com estratégia e coragem',
      description: 'Técnicas avançadas de vendas e superação de objeções no mercado veterinário'
    },
    {
      icon: Bot,
      title: 'Usar IA de forma prática no negócio',
      description: 'Implementação real de inteligência artificial para otimizar operações'
    },
    {
      icon: Brain,
      title: 'Cuidar da Saúde Mental',
      description: 'Estratégias para manter o equilíbrio emocional em ambientes de alta pressão'
    },
    {
      icon: Star,
      title: 'Posicionar sua marca e encantar o cliente',
      description: 'Diferenciação no mercado e criação de experiências memoráveis'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          O que você vai aprender
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aprendizados.map((item, index) => (
            <div
              key={index}
              className="learning-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aprendizados;