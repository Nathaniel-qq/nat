import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import ChapterSummaries from './components/ChapterSummaries';
import VisualsLab from './components/VisualsLab';
import PracticeQuiz from './components/PracticeQuiz';
import FormulaSheetModal from './components/FormulaSheetModal';
import SearchModal from './components/SearchModal';
import DownloadModal from './components/DownloadModal';
import { coursesData } from './data/coursesData';
import {
  BookOpen,
  Cpu,
  Award,
  Sparkles,
  Flame,
  FileSpreadsheet,
  Search,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Layers,
  HelpCircle,
  Download
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState('csns141');
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme_dark');
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme_dark', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }
  }, [darkMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentView('summaries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTakeQuiz = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentView('quizzes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourseUnitFromSearch = (courseId, unitIdx) => {
    setSelectedCourseId(courseId);
    setCurrentView('summaries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  const categories = [
    'all',
    'Hardware & Systems',
    'Pure & Applied Mathematics',
    'Physical Sciences',
    'Foundations of Computing',
    'Software Development',
    'Languages & Humanities',
    'Communication & Writing',
    'Theoretical Computer Science'
  ];

  const filteredCourses = filterCategory === 'all'
    ? coursesData
    : coursesData.filter((c) => c.category === filterCategory);

  const totalUnits = coursesData.reduce((acc, c) => acc + c.units.length, 0);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_42%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.20),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.20),_transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_40%,#020817_100%)] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-sky-500 selection:text-white">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCourseId={selectedCourseId}
        setSelectedCourseId={setSelectedCourseId}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenFormulas={() => setIsFormulaModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="relative overflow-hidden rounded-[32px] glass-lg p-8 sm:p-12 text-slate-900 dark:text-white shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.18),transparent_35%)]" />
              <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
              <div className="absolute -left-10 bottom-8 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-sm text-xs font-semibold text-sky-700 dark:text-sky-200 border border-sky-300/50 dark:border-sky-400/20">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  Ghana University Exam Edition & Apple-inspired study flow
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                  Master Computer Science & Engineering Exams
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Comprehensive chapter summaries, Floyd-style digital electronics notes, step-by-step visual guides, and Ghana university practice exam questions—crafted in a clean system-inspired interface.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => { setSelectedCourseId('csns141'); setCurrentView('summaries'); }}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-lg shadow-sky-500/30 transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Start Revision (CSNS 141)</span>
                  </button>

                  <button
                    onClick={() => setCurrentView('visuals')}
                    className="glass-button flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-100"
                  >
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span>Open Visuals Lab</span>
                  </button>

                  <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="glass-button flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-100"
                  >
                    <Download className="w-4 h-4 text-violet-500" />
                    <span>Download App (.html / .zip)</span>
                  </button>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/80 dark:border-white/10">
                <div className="glass-sm rounded-2xl p-4">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-sky-600 dark:text-sky-400">9</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 block font-medium mt-1">Accredited Courses</span>
                </div>
                <div className="glass-sm rounded-2xl p-4">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-violet-600 dark:text-violet-400">{totalUnits}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 block font-medium mt-1">Chapter Summaries</span>
                </div>
                <div className="glass-sm rounded-2xl p-4">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">7</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 block font-medium mt-1">Interactive Visualizers</span>
                </div>
                <div className="glass-sm rounded-2xl p-4">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-amber-600 dark:text-amber-400">35+</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 block font-medium mt-1">Exam Practice MCQs</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">
                    Available Degree Courses
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Select a course to review its comprehensive unit summaries or test your knowledge.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold glass-button text-sky-700 dark:text-sky-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Files</span>
                  </button>

                  <button
                    onClick={() => setIsFormulaModalOpen(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold glass-button text-violet-700 dark:text-violet-300"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Formula Sheets</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      filterCategory === cat
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                        : 'glass-button text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60 border border-white/30 dark:border-white/10'
                    }`}
                  >
                    {cat === 'all' ? 'All Curricula (9 Courses)' : cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelectCourse={handleSelectCourse}
                    onTakeQuiz={handleTakeQuiz}
                    onOpenVisuals={() => setCurrentView('visuals')}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'summaries' && (
          <div className="animate-fadeIn">
            <ChapterSummaries
              course={selectedCourse}
              onNavigateToQuiz={handleTakeQuiz}
              onNavigateToVisuals={() => setCurrentView('visuals')}
            />
          </div>
        )}

        {currentView === 'visuals' && (
          <div className="animate-fadeIn">
            <VisualsLab />
          </div>
        )}

        {currentView === 'quizzes' && (
          <div className="animate-fadeIn">
            <PracticeQuiz
              initialCourseId={selectedCourseId}
              onNavigateToNotes={handleSelectCourse}
            />
          </div>
        )}
      </main>

      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCourseUnit={handleSelectCourseUnitFromSearch}
      />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <footer className="mt-16 border-t border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-sky-500" />
            <span className="font-bold text-slate-700 dark:text-slate-200">
              UniStudy ExamMaster Hub
            </span>
            <span>• Ghana University Examination Edition & Floyd Digital Electronics System</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="hover:text-sky-500 transition-colors font-bold text-sky-600 dark:text-sky-400"
            >
              Download Offline App
            </button>
            <button
              onClick={() => setIsFormulaModalOpen(true)}
              className="hover:text-violet-500 transition-colors"
            >
              Formula Sheets
            </button>
            <button
              onClick={() => setCurrentView('visuals')}
              className="hover:text-emerald-500 transition-colors"
            >
              Visuals Lab
            </button>
            <button
              onClick={() => { setSelectedCourseId('all'); setCurrentView('quizzes'); }}
              className="hover:text-amber-500 transition-colors"
            >
              Mock Exams
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

