import React, { useState } from 'react';
import {
  GraduationCap,
  Search,
  Moon,
  Sun,
  BookOpen,
  Cpu,
  Award,
  FileSpreadsheet,
  LayoutGrid,
  Menu,
  X,
  Download
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function Navbar({
  currentView,
  setCurrentView,
  selectedCourseId,
  setSelectedCourseId,
  onOpenSearch,
  onOpenFormulas,
  onOpenDownload,
  darkMode,
  setDarkMode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'dashboard', label: 'All Courses', icon: LayoutGrid },
    { id: 'summaries', label: 'Chapter Summaries', icon: BookOpen },
    { id: 'visuals', label: 'Visuals Lab', icon: Cpu, badge: 'Interactive' },
    { id: 'quizzes', label: 'Practice Quizzes', icon: Award }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        <div
          onClick={() => { setCurrentView('dashboard'); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-white shadow-[0_12px_30px_rgba(14,165,233,0.28)] group-hover:scale-[1.03] transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                UniStudy<span className="text-sky-500">.</span>Master
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                Exam Hub
              </span>
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 block font-medium -mt-0.5">
              Ghana University & Floyd Exam Edition
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1.5 p-1 glass-sm rounded-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;

            return (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all relative ${
                  isActive
                    ? 'bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white shadow-sm border border-sky-200/60 dark:border-sky-500/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-500' : ''}`} />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold uppercase">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center">
            <select
              value={selectedCourseId}
              onChange={(e) => {
                setSelectedCourseId(e.target.value);
                if (currentView === 'dashboard') setCurrentView('summaries');
              }}
              className="text-xs font-bold py-2 px-3 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} – {c.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onOpenSearch}
            className="glass-button flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium"
            title="Search notes and formulas (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline text-[10px] bg-white/80 dark:bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 text-slate-400">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={onOpenFormulas}
            className="glass-button p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-2 text-violet-700 dark:text-violet-300"
            title="Open Formula Sheets"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span className="hidden sm:inline">Formulas</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-lg shadow-sky-500/20"
            title="Download Standalone Offline File"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-4 space-y-3 backdrop-blur-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentView(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-sky-500" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              onOpenDownload();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download Offline App</span>
          </button>

          <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
            <label className="text-[11px] font-bold text-slate-400 block mb-1">
              Select Active Course:
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => {
                setSelectedCourseId(e.target.value);
                setMobileMenuOpen(false);
                if (currentView === 'dashboard') setCurrentView('summaries');
              }}
              className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} – {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
