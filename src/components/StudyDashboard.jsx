import React, { useMemo, useState } from 'react';
import { Brain, TrendingUp, Clock3, Download, Target, ShieldCheck, Sparkles } from 'lucide-react';
import {
  buildStudyDashboard,
  downloadStudyArchive,
  getStudyState,
  saveStudyState,
} from '../lib/studySystem';

const defaultNotes = `Sequential logic uses memory; combinational logic has no memory.\nKCL: sum of currents entering a node equals sum leaving the node.\nOhm's Law V = I * R.\nA full adder computes sum and carry using XOR and AND gates.`;

export default function StudyDashboard({ selectedCourse = 'General' }) {
  const [notes, setNotes] = useState(() => {
    try {
      return getStudyState().notes || defaultNotes;
    } catch {
      return defaultNotes;
    }
  });

  const dashboard = useMemo(() => buildStudyDashboard(notes, selectedCourse), [notes, selectedCourse]);

  const handleSave = () => {
    const state = getStudyState();
    saveStudyState({ ...state, notes });
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-violet-100 p-3 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Study Hub</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Adaptive Learning Dashboard</h2>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            Save notes
          </button>
          <button
            onClick={() => downloadStudyArchive('unistudy-study-export.html', selectedCourse)}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-xs font-bold text-white shadow-sm hover:bg-violet-500"
          >
            <Download className="h-3.5 w-3.5" />
            Export HTML
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3">
          <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Notes to analyze</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={10}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/70 dark:bg-emerald-950/20">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Study summary
            </p>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{dashboard.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <Target className="h-4 w-4" />
                Focus areas
              </p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">{dashboard.topics.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <TrendingUp className="h-4 w-4" />
                Formula cues
              </p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">{dashboard.formulas.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <ShieldCheck className="h-4 w-4" />
            Weak areas
          </p>
          <div className="space-y-3">
            {dashboard.weakAreas.map((item) => (
              <div key={item.topic} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{item.topic}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400">{item.label}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500" style={{ width: `${Math.max(18, item.score)}%` }} />
                </div>
                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">Mastery: {item.score}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <Clock3 className="h-4 w-4" />
            Spaced review queue
          </p>
          <div className="space-y-3">
            {dashboard.nextReview.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{item.topic}</span>
                  <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-black uppercase text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">{item.priority}</span>
                </div>
                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">Due in {item.dueIn}</p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Score: {item.score}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <TrendingUp className="h-4 w-4" />
            Recommendations
          </p>
          <div className="space-y-3">
            {dashboard.recommendations.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{item.topic}</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
