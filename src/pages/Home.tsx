import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { WhyChooseZylearn } from '@/components/sections/WhyChooseZylearn';
import { StatsCounterSection } from '@/components/sections/StatsCounterSection';
import { VideoPresentationSection } from '@/components/sections/VideoPresentationSection';
import { ProgramsMegaGrid } from '@/components/sections/ProgramsMegaGrid';
import { ChatbotWorkflow } from '@/components/sections/ChatbotWorkflow';
import { WhoItsForSection } from '@/components/sections/WhoItsForSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialsSlider } from '@/components/sections/TestimonialsSlider';

interface HomeProps {
  onJoinClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onJoinClick }) => {
  return (
    <div className="relative bg-[#ededed] text-[#2a2a2e]">
      <Hero onJoinClick={onJoinClick} />
      <WhyChooseZylearn />
      <StatsCounterSection onJoinClick={onJoinClick} />
      <VideoPresentationSection onJoinClick={onJoinClick} />
      <ProgramsMegaGrid onJoinClick={onJoinClick} />
      <ChatbotWorkflow />
      <WhoItsForSection />
      <FAQSection />
      <TestimonialsSlider />
    </div>
  );
};
