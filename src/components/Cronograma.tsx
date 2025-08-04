import React from 'react';
import { Calendar, Clock, Coffee, Users } from 'lucide-react';

const Cronograma = () => {
  const cronograma = [
    {
      dia: '26/09',
      titulo: 'Dia 1 - Fundamentos',
      atividades: [
        { hora: '07:15 às 08:00', atividade: 'Credenciamento', icon: Users },
        { hora: '08:00 às 12:15', atividade: 'Vanderlei P. Mello Junior', subtitulo: 'Apetite ao Risco e Vendas', icon: Calendar },
        { hora: '12:15 às 13:00', atividade: 'Vanderlei P. Mello Junior - Mentoria Coletiva', icon: Users },
        { hora: '13:00 às 14:00', atividade: 'Lunch Time', icon: Coffee },
        { hora: '14:00 às 18:15', atividade: 'Daltro Galli', subtitulo: 'Finanças Descomplicadas para Tomada de Decisão', icon: Calendar },
        { hora: '18:15 às 19:00', atividade: 'Daltro Galli - Mentoria Coletiva', icon: Users },
        { hora: '19:00 às 20:00', atividade: 'Happy Hour', icon: Coffee }
      ]
    },
    {
      dia: '27/09',
      titulo: 'Dia 2 - Estratégias',
      atividades: [
        { hora: '07:30 às 08:00', atividade: 'Credenciamento', icon: Users },
        { hora: '08:00 às 12:15', atividade: 'Gabriel Maia', subtitulo: 'Posicionamento Digital e Experiência do Cliente', icon: Calendar },
        { hora: '12:15 às 13:00', atividade: 'Gabriel Maia - Mentoria Coletiva', icon: Users },
        { hora: '13:00 às 14:00', atividade: 'Lunch Time', icon: Coffee },
        { hora: '14:00 às 18:15', atividade: 'Vinicius Tavares', subtitulo: 'O INVISÍVEL QUE SUSTENTA - Liderança e Saúde emocional nas equipes veterinárias', icon: Calendar },
        { hora: '18:15 às 19:00', atividade: 'Vinicius Tavares - Mentoria Coletiva', icon: Users },
        { hora: '19:00 às 20:00', atividade: 'Happy Hour', icon: Coffee }
      ]
    },
    {
      dia: '28/09',
      titulo: 'Dia 3 - Inovação',
      atividades: [
        { hora: '07:30 às 08:00', atividade: 'Credenciamento', icon: Users },
        { hora: '08:00 às 12:15', atividade: 'Filipe Santos', subtitulo: 'Inteligência Artificial Aplicada aos Negócios', icon: Calendar },
        { hora: '12:15 às 13:00', atividade: 'Filipe Santos - Mentoria Coletiva', icon: Users },
        { hora: '13:00 às 14:00', atividade: 'Lunch Time', icon: Coffee },
        { hora: '14:00 às 18:15', atividade: 'Ana C. Maistrovicz', subtitulo: 'Do caos a alta performance: construindo times que entregam!', icon: Calendar },
        { hora: '18:15 às 19:00', atividade: 'Ana C. Maistrovicz - Mentoria Coletiva', icon: Users },
        { hora: '19:00 às 19:15', atividade: 'Encerramento', icon: Clock },
        { hora: '19:15 às 21:15', atividade: 'Happy Hour', icon: Coffee }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Passo a passo da sua transformação!
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-16"></div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cronograma.map((dia, index) => (
            <div
              key={index}
              className="cronograma-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glassmorphism-card">
                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-orange-400 mb-2">
                    {dia.dia}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {dia.titulo}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {dia.atividades.map((atividade, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <atividade.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-orange-300 font-semibold text-sm">
                          {atividade.hora}
                        </div>
                        <div className="text-white font-medium">
                          {atividade.atividade}
                        </div>
                        {atividade.subtitulo && (
                          <div className="text-gray-300 text-sm">
                            {atividade.subtitulo}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cronograma;