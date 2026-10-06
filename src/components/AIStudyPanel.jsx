import React, { useState, useMemo } from 'react';
import { Sparkles, Brain, ClipboardCheck, BookOpen, CheckCircle2, RefreshCw } from 'lucide-react';
import { buildStudyAnalysis, saveStudySession, loadStudySessions } from '../lib/studyAI';

const defaultNotes = `
KCL: sum of currents entering a node equals sum leaving the node.
Ohm's Law: V = I * R
Eigenvalues: solve det(A - λI) = 0.
A full adder has sum = A xor B xor Cin and carry = AB + Cin(A xor B).
`;

export default function AIStudyPanel({ selectedCourse }) {
  const [notesText, setNotesText] = useState(() => {
    if (typeof window === 'undefined') return defaultNotes;
    return localStorage.getItem('unistudy-ai-notes') || defaultNotes;
  });
  const [analysis, setAnalysis] = useState(() => buildStudyAnalysis(notesText, selectedCourse));

  const history = useMemo(() => loadStudySessions(), []);

  const handleAnalyze = () => {
    const next = buildStudyAnalysis(notesText, selectedCourse || 'general');
    setAnalysis(next);
    saveStudySession({
      course: selectedCourse || 'general',
      notes: notesText.slice(0, 400),
      summary: next.summary,
      createdAt: new Date().toISOString(),
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('unistudy-ai-notes', notesText);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Offline AI</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Study Copilot</h2>
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-500"
        >
          <Sparkles className="h-4 w-4" />
          Analyze notes
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Paste class notes or summaries
          </label>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            rows={12}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            placeholder="Paste your notes here..."
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/70 dark:bg-emerald-950/20">
            <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              <ClipboardCheck className="h-4 w-4" />
              AI summary
            </p>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{analysis.summary}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Detected topics</p>
            <div className="flex flex-wrap gap-2">
              {analysis.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <BookOpen className="h-4 w-4" />
            Study cards
          </div>
          <div className="space-y-3">
            {analysis.cards.map((card) => (
              <div key={card.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-1 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">{card.type}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{card.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{card.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            <RefreshCw className="h-4 w-4" />
            Suggested questions
          </div>
          <div className="space-y-3">
            {analysis.questions.map((q) => (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{q.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{q.prompt}</p>
                <p className="mt-2 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Expected: {q.expected}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {history.length > 0 && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Recent offline sessions</p>
          <div className="space-y-2">
            {history.slice(0, 3).map((entry, index) => (
              <div key={`${entry.createdAt || index}`} className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{entry.course || 'general'}</span>
                  <span className="text-[10px] text-slate-400">{entry.createdAt ? new Date(entry.createdAt).toLocaleDateString() : 'today'}</span>
                </div>
                <p className="mt-1 text-[11px] leading-5 text-slate-500 dark:text-slate-400">{entry.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
