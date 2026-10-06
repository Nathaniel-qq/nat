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
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function Navbar({
  currentView,
  setCurrentView,
  selectedCourseId,
  setSelectedCourseId,
  onOpenSearch,
  onOpenFormulas,
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

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => { setCurrentView('dashboard'); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                UniStudy<span className="text-emerald-500">.</span>Master
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                Exam Hub
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block font-medium -mt-0.5">
              Ghana University & Floyd Exam Edition
            </span>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;

            return (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all relative ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-500' : ''}`} />
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

        {/* Right Tools: Quick Course Dropdown, Search, Formula Sheet, Dark Mode */}
        <div className="flex items-center gap-2">
          {/* Active Course Selector (Compact on desktop) */}
          <div className="hidden lg:flex items-center">
            <select
              value={selectedCourseId}
              onChange={(e) => {
                setSelectedCourseId(e.target.value);
                if (currentView === 'dashboard') setCurrentView('summaries');
              }}
              className="text-xs font-bold py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} – {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Search trigger button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors"
            title="Search notes and formulas (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline text-[10px] bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Formulas Cheat Sheet Button */}
          <button
            onClick={onOpenFormulas}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors text-xs font-bold flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800"
            title="Open Formula Sheets"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span className="hidden sm:inline">Formulas</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
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
                    <Icon className="w-4 h-4 text-emerald-500" />
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

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
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
              className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
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
