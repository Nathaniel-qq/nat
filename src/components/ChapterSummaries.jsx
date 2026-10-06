import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Circle, 
  Copy, 
  Check, 
  Flame, 
  ChevronRight, 
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Share2,
  Printer,
  Compass
} from 'lucide-react';

export default function ChapterSummaries({ 
  course, 
  onNavigateToQuiz, 
  onNavigateToVisuals 
}) {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [completedUnits, setCompletedUnits] = useState(() => {
    try {
      const saved = localStorage.getItem(`mastered_${course.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'hotTopics' | 'checklist'

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`mastered_${course.id}`);
      setCompletedUnits(saved ? JSON.parse(saved) : {});
    } catch {
      setCompletedUnits({});
    }
    setSelectedUnitIdx(0);
  }, [course.id]);

  const toggleMastered = (unitNum) => {
    const updated = { ...completedUnits, [unitNum]: !completedUnits[unitNum] };
    setCompletedUnits(updated);
    try {
      localStorage.setItem(`mastered_${course.id}`, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const currentUnit = course.units[selectedUnitIdx] || course.units[0];
  const masteredCount = Object.values(completedUnits).filter(Boolean).length;
  const progressPercent = Math.round((masteredCount / course.units.length) * 100);

  const handleCopy = () => {
    const textToCopy = `[${course.code}] Unit ${currentUnit.unitNumber}: ${currentUnit.title}\n\n${currentUnit.summary}\n\n` +
      currentUnit.sections.map(s => `## ${s.title}\n${s.content}`).join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Course Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs font-bold tracking-wider backdrop-blur-sm border border-white/10">
                {course.code}
              </span>
              <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                Exam Priority: {course.rating}
              </span>
              <span className="text-xs text-slate-300">
                {course.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {course.title}
            </h1>
            <p className="text-sm text-slate-300">
              {course.subtitle}
            </p>
          </div>

          {/* Quick Actions & Progress */}
          <div className="flex flex-col sm:flex-row md:flex-col items-end gap-3 min-w-[200px]">
            <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10 text-right">
              <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                <span className="text-slate-300">Exam Readiness</span>
                <span className="font-bold font-mono text-emerald-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <div 
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] text-slate-400 block mt-1">
                {masteredCount} of {course.units.length} units marked mastered
              </span>
            </div>

            <div className="flex gap-2 w-full">
              <button
                onClick={() => onNavigateToQuiz(course.id)}
                className="flex-1 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 text-center"
              >
                Practice Exam Quiz
              </button>
              <button
                onClick={onNavigateToVisuals}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-all text-center"
                title="Open Interactive Visualizer"
              >
                Visuals Lab
              </button>
            </div>
          </div>
        </div>

        {/* Course Navigation Subtabs */}
        <div className="flex gap-3 border-t border-white/10 mt-6 pt-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-1 transition-all ${
              activeTab === 'notes'
                ? 'text-white border-b-2 border-emerald-400 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Chapter Summaries ({course.units.length} Units)
          </button>
          <button
            onClick={() => setActiveTab('hotTopics')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'hotTopics'
                ? 'text-white border-b-2 border-amber-400 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Exam Hot Topics
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'text-white border-b-2 border-sky-400 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            One-Night-Before Checklist
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {activeTab === 'notes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Unit Switcher Sidebar */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-sm space-y-2 sticky top-24">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Course Syllabus</span>
              <span>{course.units.length} Chapters</span>
            </div>

            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
              {course.units.map((unit, idx) => {
                const isSelected = selectedUnitIdx === idx;
                const isMastered = !!completedUnits[unit.unitNumber];

                return (
                  <button
                    key={unit.unitNumber}
                    onClick={() => setSelectedUnitIdx(idx)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md font-semibold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isMastered ? (
                        <CheckCircle className={`w-4 h-4 ${isSelected ? 'text-emerald-400 dark:text-emerald-600' : 'text-emerald-500'}`} />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-wider opacity-70">
                        Unit {unit.unitNumber}
                      </div>
                      <div className="text-xs truncate font-medium mt-0.5">
                        {unit.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unit Content Body */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-8">
            {/* Unit Header */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
                  Unit {currentUnit.unitNumber} of {course.units.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={() => toggleMastered(currentUnit.unitNumber)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      completedUnits[currentUnit.unitNumber]
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>
                      {completedUnits[currentUnit.unitNumber] ? 'Mastered ✓' : 'Mark as Mastered'}
                    </span>
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {currentUnit.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
                {currentUnit.summary}
              </p>
            </div>

            {/* In-depth Sections */}
            <div className="space-y-6">
              {currentUnit.sections.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {sec.title}
                  </h3>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>

            {/* High-Yield Rules & Exam Pitfalls */}
            {currentUnit.keyRules && currentUnit.keyRules.length > 0 && (
              <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Ghana Exam High-Yield Rules & Examiner Traps
                </div>
                <ul className="space-y-2 text-xs text-amber-900 dark:text-amber-200/90 font-medium">
                  {currentUnit.keyRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Navigation between units */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                disabled={selectedUnitIdx === 0}
                onClick={() => setSelectedUnitIdx(selectedUnitIdx - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                ← Previous Unit
              </button>

              <span className="text-xs font-mono text-slate-400">
                {selectedUnitIdx + 1} / {course.units.length}
              </span>

              <button
                disabled={selectedUnitIdx === course.units.length - 1}
                onClick={() => setSelectedUnitIdx(selectedUnitIdx + 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 disabled:opacity-40"
              >
                Next Unit →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exam Hot Topics Tab */}
      {activeTab === 'hotTopics' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
              Ghana University Examination Priority Guide
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Categorized by likelihood of appearance on mid-semester and final degree examinations.
            </p>
          </div>

          <div className="space-y-6">
            {/* 5 Star */}
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                  <span>★★★★★ Extremely Likely (Must Know)</span>
                </span>
                <span className="text-xs font-mono bg-rose-200/70 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 px-2 py-0.5 rounded-full font-bold">
                  {course.hotTopics.fiveStar.length} Topics
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {course.hotTopics.fiveStar.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-900/30 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Star */}
            <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-amber-900 dark:text-amber-200">
                  ★★★★☆ Important (Commonly Tested)
                </span>
                <span className="text-xs font-mono bg-amber-200/70 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold">
                  {course.hotTopics.fourStar.length} Topics
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {course.hotTopics.fourStar.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-900/30 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Star */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  ★★★☆☆ Moderate (Definitions & Viva Questions)
                </span>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-bold">
                  {course.hotTopics.threeStar.length} Topics
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {course.hotTopics.threeStar.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* One Night Before Checklist Tab */}
      {activeTab === 'checklist' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sky-500" />
                One-Night-Before-Exam Checklist
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Tick off every concept you have memorized. Progress automatically saves locally.
              </p>
            </div>

            <button
              onClick={() => {
                const updated = {};
                course.oneNightChecklist.forEach((_, idx) => { updated[`chk_${idx}`] = true; });
                setCompletedUnits((prev) => ({ ...prev, ...updated }));
              }}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
            >
              Check All Items
            </button>
          </div>

          <div className="space-y-2">
            {course.oneNightChecklist.map((item, idx) => {
              const key = `chk_${idx}`;
              const isChecked = !!completedUnits[key];

              return (
                <div
                  key={idx}
                  onClick={() => toggleMastered(key)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isChecked
                      ? 'bg-sky-50/60 dark:bg-sky-950/30 border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-200'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <div className="shrink-0">
                    {isChecked ? (
                      <CheckCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through opacity-80' : ''}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
