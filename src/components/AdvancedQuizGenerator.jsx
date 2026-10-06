import React, { useMemo, useState } from 'react';
import { ListChecks, NotebookPen, Sparkles, Target } from 'lucide-react';
import { generateQuizSet, recordQuizResult } from '../lib/studySystem';

const defaultNotes = `KCL: sum of currents entering a node equals sum leaving the node.\nOhm's Law: V = I * R\nA full adder computes sum and carry.\nEigenvalues are roots of det(A - λI) = 0.`;

export default function AdvancedQuizGenerator({ selectedCourse = 'General' }) {
  const [notes, setNotes] = useState(defaultNotes);
  const [difficulty, setDifficulty] = useState('medium');
  const [questions, setQuestions] = useState(() => generateQuizSet(defaultNotes, selectedCourse, 'medium'));
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const generated = useMemo(() => generateQuizSet(notes, selectedCourse, difficulty), [notes, selectedCourse, difficulty]);

  const handleGenerate = () => {
    setQuestions(generated);
    setResults(null);
  };

  const handleSubmit = () => {
    const score = questions.reduce((acc, q) => {
      const inputValue = (answers[q.id] || '').trim().toLowerCase();
      const answer = (q.answer || '').trim().toLowerCase();
      const isCorrect = inputValue && inputValue.includes(answer.split(' ').slice(0, 4).join(' ').toLowerCase()) || inputValue === answer.toLowerCase();
      if (isCorrect) {
        recordQuizResult({ course: selectedCourse, topic: q.topic, correct: true, difficulty });
      } else {
        recordQuizResult({ course: selectedCourse, topic: q.topic, correct: false, difficulty });
      }
      return acc + (isCorrect ? 1 : 0);
    }, 0);

    setResults({
      total: questions.length,
      score,
      accuracy: Math.round((score / Math.max(questions.length, 1)) * 100),
    });
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
            <ListChecks className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Quiz engine</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Advanced Quiz Generator</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button
            onClick={handleGenerate}
            className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-500"
          >
            Generate
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Source notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={9}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <Target className="h-4 w-4" />
              Quiz status
            </p>
            {results ? (
              <div>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{results.accuracy}%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{results.score}/{results.total} correct</p>
              </div>
            ) : (
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Generate a quiz, answer the questions, and keep your local progress record updated for weaker topics.</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-900"
          >
            Submit answers
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">{question.type}</span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">{question.topic}</span>
            </div>

            <p className="text-sm font-bold text-slate-900 dark:text-white">{question.question}</p>

            {question.type === 'mcq' ? (
              <div className="mt-3 space-y-2">
                {question.options.map((option) => (
                  <label key={option} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={(answers[question.id] || '') === option}
                      onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option }))}
                      className="mt-1 accent-emerald-600"
                    />
                    <span className="text-xs text-slate-600 dark:text-slate-300">{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                value={answers[question.id] || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))}
                rows={3}
                className="mt-3 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                placeholder="Type your answer here..."
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
