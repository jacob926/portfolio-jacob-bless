import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/layout/Navbar';
import { SkillCard } from './components/ui/SkillCard';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { SKILLS } from './data/skills';

const MainContent = () => {
  const { t } = usePortfolio();

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero / Présentation - Responsive sans débordement */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 text-center max-w-3xl mx-auto w-full break-words">
        <span className="text-indigo-500 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-2">
          {t.hero.greeting}
        </span>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-100 break-words">
          Jacob Bless
        </h1>
        
        <p className="text-base sm:text-xl text-slate-400 font-medium mb-6 leading-relaxed max-w-2xl mx-auto">
          {t.hero.role}
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-8 px-2">
          {t.about.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs mx-auto">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors text-center"
          >
            {t.hero.ctaProjects}
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-medium transition-colors text-center"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{t.skills.title}</h2>
        <p className="text-slate-400 text-xs sm:text-sm text-center mb-8 px-2">{t.skills.subtitle}</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {SKILLS.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projets */}
      <ProjectsSection />

      {/* Parcours */}
      <ExperienceSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <MainContent />
    </PortfolioProvider>
  );
}