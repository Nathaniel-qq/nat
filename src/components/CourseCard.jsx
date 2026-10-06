import React from 'react';
import { 
  Cpu, 
  Grid3X3, 
  Zap, 
  Monitor, 
  Code2, 
  Globe, 
  Activity, 
  FileText, 
  Binary,
  ArrowRight,
  BookOpen,
  Award,
  Flame,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Cpu,
  Grid3X3,
  Zap,
  Monitor,
  Code2,
  Globe,
  Activity,
  FileText,
  Binary
};

export default function CourseCard({ 
  course, 
  onSelectCourse, 
  onTakeQuiz, 
  onOpenVisuals 
}) {
  const IconComponent = iconMap[course.icon] || BookOpen;

  // Retrieve mastered count from localStorage
  let masteredCount = 0;
  try {
    const saved = localStorage.getItem(`mastered_${course.id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      masteredCount = Object.values(parsed).filter(Boolean).length;
    }
  } catch {
    masteredCount = 0;
  }
  const progressPercent = Math.min(100, Math.round((masteredCount / course.units.length) * 100));

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-105 transition-transform">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-slate-500 block">
                {course.code}
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {course.category}
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-200/50 dark:border-amber-900/40">
            {course.rating}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {course.subtitle}
          </p>
        </div>

        {/* Syllabus Highlights */}
        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <span>{course.units.length} Master Units</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              {progressPercent}% Mastered
            </span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <button
          onClick={() => onSelectCourse(course.id)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Chapter Notes</span>
        </button>

        <button
          onClick={() => onTakeQuiz(course.id)}
          className="px-3 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200 dark:border-emerald-800"
          title="Take Practice Quiz"
        >
          <Award className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenVisuals}
          className="px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          title="Interactive Visualizer"
        >
          <Activity className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
