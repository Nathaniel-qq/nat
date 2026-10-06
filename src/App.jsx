import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import ChapterSummaries from './components/ChapterSummaries';
import VisualsLab from './components/VisualsLab';
import PracticeQuiz from './components/PracticeQuiz';
import FormulaSheetModal from './components/FormulaSheetModal';
import SearchModal from './components/SearchModal';
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
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'summaries' | 'visuals' | 'quizzes'
  const [selectedCourseId, setSelectedCourseId] = useState('csns141');
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  // Dark mode setup
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

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
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

  // Categories for dashboard filtering
  const categories = ['all', 'Hardware & Systems', 'Pure & Applied Mathematics', 'Physical Sciences', 'Foundations of Computing', 'Software Development', 'Languages & Humanities', 'Communication & Writing', 'Theoretical Computer Science'];

  const filteredCourses = filterCategory === 'all'
    ? coursesData
    : coursesData.filter((c) => c.category === filterCategory);

  // Global stats calculation
  const totalUnits = coursesData.reduce((acc, c) => acc + c.units.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCourseId={selectedCourseId}
        setSelectedCourseId={setSelectedCourseId}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenFormulas={() => setIsFormulaModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* VIEW 1: DASHBOARD (ALL COURSES) */}
        {currentView === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Header */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-teal-500/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Ghana University Exam Edition & Floyd Style Architecture
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Master Computer Science & Engineering Exams
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Comprehensive chapter summaries, Floyd-style digital electronics notes, step-by-step matrix & circuit visualizers, and Ghana university practice exam questions.
                </p>

                {/* Quick Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => { setSelectedCourseId('csns141'); setCurrentView('summaries'); }}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Start Revision (CSNS 141)</span>
                  </button>

                  <button
                    onClick={() => setCurrentView('visuals')}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
                  >
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>Open Visuals Lab</span>
                  </button>

                  <button
                    onClick={() => { setSelectedCourseId('all'); setCurrentView('quizzes'); }}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-indigo-600/60 hover:bg-indigo-600 text-white transition-all border border-indigo-400/30"
                  >
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Take Master Mock Exam</span>
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">9</span>
                  <span className="text-xs text-slate-300 block font-medium">Accredited Courses</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-indigo-400">{totalUnits}</span>
                  <span className="text-xs text-slate-300 block font-medium">Chapter Summaries</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-amber-400">7</span>
                  <span className="text-xs text-slate-300 block font-medium">Interactive Visualizers</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-sky-400">35+</span>
                  <span className="text-xs text-slate-300 block font-medium">Exam Practice MCQs</span>
                </div>
              </div>
            </div>

            {/* Course Filter Tabs */}
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

                <button
                  onClick={() => setIsFormulaModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>View All Formula Sheets</span>
                </button>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      filterCategory === cat
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {cat === 'all' ? 'All Curricula (9 Courses)' : cat}
                  </button>
                ))}
              </div>

              {/* Course Cards Grid */}
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

        {/* VIEW 2: CHAPTER SUMMARIES (DETAILED NOTES) */}
        {currentView === 'summaries' && (
          <div className="animate-fadeIn">
            <ChapterSummaries
              course={selectedCourse}
              onNavigateToQuiz={handleTakeQuiz}
              onNavigateToVisuals={() => setCurrentView('visuals')}
            />
          </div>
        )}

        {/* VIEW 3: VISUALS LAB */}
        {currentView === 'visuals' && (
          <div className="animate-fadeIn">
            <VisualsLab />
          </div>
        )}

        {/* VIEW 4: PRACTICE QUIZZES */}
        {currentView === 'quizzes' && (
          <div className="animate-fadeIn">
            <PracticeQuiz
              initialCourseId={selectedCourseId}
              onNavigateToNotes={handleSelectCourse}
            />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCourseUnit={handleSelectCourseUnitFromSearch}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-slate-700 dark:text-slate-300">
              UniStudy ExamMaster Hub
            </span>
            <span>• Ghana University Examination Edition & Floyd Digital Electronics System</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFormulaModalOpen(true)}
              className="hover:text-emerald-500 transition-colors"
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
              className="hover:text-emerald-500 transition-colors"
            >
              Mock Exams
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
