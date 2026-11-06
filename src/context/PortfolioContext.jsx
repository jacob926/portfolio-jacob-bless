import React, { createContext, useContext, useState } from 'react';
import { TRANSLATIONS } from '../data/translations';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('fr');
  const [selectedTech, setSelectedTech] = useState(null);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');
  
  const t = TRANSLATIONS[lang];

  return (
    <PortfolioContext.Provider value={{ 
      theme, toggleTheme, 
      lang, toggleLang, 
      t, 
      selectedTech, setSelectedTech 
    }}>
      <div className={theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}>
        {children}
      </div>
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);