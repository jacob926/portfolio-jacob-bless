import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { usePortfolio } from '../../context/PortfolioContext';

export const ContactSection = () => {
  const { theme, t } = usePortfolio();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const SERVICE_ID = "service_nobwenc";
  const TEMPLATE_ID = "template_i3n172k";
  const PUBLIC_KEY = "FbKG2nZVj466LWUUQ";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => {
        console.error('Erreur EmailJS:', err);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto w-full">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.contact.title}</h2>
        <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Discutons de vos projets ou opportunités</p>
      </div>

      <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-6 rounded-2xl border p-4 sm:p-8 shadow-xl ${
        isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-white'
      }`}>
        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.contact.name}</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full rounded-xl border px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors ${
              isDark ? 'border-slate-700 bg-slate-950/50 text-slate-100 placeholder-slate-600' : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
            }`}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.contact.email}</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full rounded-xl border px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors ${
              isDark ? 'border-slate-700 bg-slate-950/50 text-slate-100 placeholder-slate-600' : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
            }`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.contact.message}</label>
          <textarea
            rows="4"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full rounded-xl border px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-indigo-500 focus:outline-none transition-colors ${
              isDark ? 'border-slate-700 bg-slate-950/50 text-slate-100 placeholder-slate-600' : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
            }`}
            placeholder="Votre message ici..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 sm:py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            t.contact.send
          )}
        </button>

        {submitted && (
          <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-center text-xs sm:text-sm font-medium">
            ✨ {t.contact.success}
          </div>
        )}

        {error && (
          <div className="p-3 sm:p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-center text-xs sm:text-sm font-medium">
            ❌ Une erreur est survenue lors de l'envoi. Veuillez réessayer.
          </div>
        )}
      </form>
    </section>
  );
};