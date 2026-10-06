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
    <div className="glass-card flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,165,233,0.12)]">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-sky-500/15 via-cyan-500/10 to-emerald-500/15 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-500/20 shadow-sm">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 block">
                {course.code}
              </span>
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                {course.category}
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-amber-600 bg-amber-100/80 dark:bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-200/70 dark:border-amber-900/40">
            {course.rating}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            {course.subtitle}
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-white/40 dark:bg-slate-950/45 border border-slate-200/70 dark:border-slate-800/80 space-y-1.5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <span>{course.units.length} Master Units</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              {progressPercent}% Mastered
            </span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2">
        <button
          onClick={() => onSelectCourse(course.id)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Chapter Notes</span>
        </button>

        <button
          onClick={() => onTakeQuiz(course.id)}
          className="px-3 py-2.5 rounded-xl text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 transition-colors"
          title="Take Practice Quiz"
        >
          <Award className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenVisuals}
          className="px-3 py-2.5 rounded-xl text-xs font-bold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/60 transition-colors"
          title="Interactive Visualizer"
        >
          <Activity className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

