import React from 'react';
import { TrendingUp, Users, BarChart3, Zap, Heart, Cog } from 'lucide-react';

const BeneficiosPos = () => {
  const beneficios = [
    {
      icon: Users,
      title: 'Contratar, treinar e liderar pessoas com eficiência',
      description: 'Metodologias práticas para formar equipes que entregam resultados excepcionais'
    },
    {
      icon: BarChart3,
      title: 'Analisar números e tomar decisões com segurança',
      description: 'Ferramentas financeiras para decisões estratégicas baseadas em dados reais'
    },
    {
      icon: TrendingUp,
      title: 'Criar modelo de negócio escalável',
      description: 'Estruturas e processos que permitem crescimento sustentável e lucrativo'
    },
    {
      icon: Zap,
      title: 'Gerar demanda qualificada e vender com consistência',
      description: 'Estratégias de marketing e vendas que garantem fluxo constante de clientes'
    },
    {
      icon: Heart,
      title: 'Encantar cliente e aumentar retenção',
      description: 'Experiências memoráveis que transformam clientes em verdadeiros embaixadores'
    },
    {
      icon: Cog,
      title: 'Construir processos que sustentam crescimento',
      description: 'Sistemas organizacionais que garantem qualidade mesmo com expansão'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aprender foi só o começo.
          </h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Agora é hora de agir.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="benefit-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container-benefit mb-6">
                <beneficio.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosPos;