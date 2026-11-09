import React, { useEffect, useState } from 'react';
import { ConceptAssistant } from './components/ConceptAssistant';
import { ConceptDemoSection } from './components/ConceptDemoSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { HumanConnectionSection } from './components/HumanConnectionSection';
import { MobilePreviewSection } from './components/MobilePreviewSection';
import { Navbar } from './components/Navbar';
import { StatementSection } from './components/StatementSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ValuePillarsSection } from './components/ValuePillarsSection';
import { VisionRoadmapSection } from './components/VisionRoadmapSection';
import { WaitlistModal } from './components/WaitlistModal';
import { WaitlistSection } from './components/WaitlistSection';
import { LanguageProvider } from './context/LanguageContext';

const THEME_STORAGE_KEY = 'lingora-theme';

export const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch {
      // ignore storage errors
    }
    return true;
  });

  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  useEffect(() => {
    const themeValue = dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = themeValue;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeValue);
    } catch {
      // ignore storage errors
    }
  }, [dark]);

  return (
    <LanguageProvider>
      <Navbar
        dark={dark}
        setDark={setDark}
        onOpenWaitlist={() => setWaitlistModalOpen(true)}
      />

      <main>
        <HeroSection onOpenWaitlist={() => setWaitlistModalOpen(true)} />
        <ValuePillarsSection />
        <ConceptDemoSection />
        <HowItWorksSection />
        <HumanConnectionSection />
        <UseCasesSection />
        <MobilePreviewSection />
        <StatementSection />
        <VisionRoadmapSection />
        <FaqSection />
        <WaitlistSection />
      </main>

      <Footer onOpenWaitlist={() => setWaitlistModalOpen(true)} />

      <ConceptAssistant />

      {waitlistModalOpen && (
        <WaitlistModal onClose={() => setWaitlistModalOpen(false)} />
      )}
    </LanguageProvider>
  );
};

export default App;
