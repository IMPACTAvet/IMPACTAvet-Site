import React from 'react';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import PublicoAlvo from './components/PublicoAlvo';
import InteractiveSpeakers from './components/InteractiveSpeakers';
import InteractiveSpeakers2 from './components/InteractiveSpeakers2';
import Aprendizados from './components/Aprendizados';
import Cronograma from './components/Cronograma';
import PricingSection from './components/PricingSection';
import BeneficiosPos from './components/BeneficiosPos';
import FooterCTA from './components/FooterCTA';
import './styles/animations.css';
import './styles/speakers.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CountdownTimer />
      <PublicoAlvo />
      <InteractiveSpeakers />
      <InteractiveSpeakers2 />
      <Aprendizados />
      <Cronograma />
      <PricingSection />
      <BeneficiosPos />
      <FooterCTA />
    </div>
  );
}

export default App;