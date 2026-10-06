import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Timer, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  Check, 
  Flame,
  Sparkles,
  Trophy
} from 'lucide-react';
import { quizzesData } from '../data/quizzesData';
import { coursesData } from '../data/coursesData';

export default function PracticeQuiz({ 
  initialCourseId = 'csns141',
  onNavigateToNotes 
}) {
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: selectedOptionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [filterIncorrectOnly, setFilterIncorrectOnly] = useState(false);

  // Get question list
  const isAllCoursesMode = selectedCourseId === 'all';
  const questions = isAllCoursesMode
    ? Object.values(quizzesData).flat()
    : (quizzesData[selectedCourseId] || []);

  // Timer ticker
  useEffect(() => {
    if (quizFinished) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [quizFinished]);

  // Reset state when course changes
  const handleCourseChange = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setUserAnswers({});
    setIsSubmitted(false);
    setQuizFinished(false);
    setTimerSeconds(0);
    setFilterIncorrectOnly(false);
  };

  const handleSelectOption = (idx) => {
    if (isSubmitted) return; // Locked once answered
    setSelectedOption(idx);
    setIsSubmitted(true);
    const q = questions[currentQuestionIdx];
    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: idx
    }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      const nextQ = questions[currentQuestionIdx + 1];
      setSelectedOption(userAnswers[nextQ.id] !== undefined ? userAnswers[nextQ.id] : null);
      setIsSubmitted(userAnswers[nextQ.id] !== undefined);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(currentQuestionIdx - 1);
      const prevQ = questions[currentQuestionIdx - 1];
      setSelectedOption(userAnswers[prevQ.id]);
      setIsSubmitted(true);
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    // Calculate score
    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / questions.length) * 100);
    if (percentage >= 75) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setUserAnswers({});
    setIsSubmitted(false);
    setQuizFinished(false);
    setTimerSeconds(0);
    setFilterIncorrectOnly(false);
  };

  // Score statistics
  let correctTotal = 0;
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.correctIndex) correctTotal++;
  });
  const scorePercentage = Math.round((correctTotal / (questions.length || 1)) * 100);

  // Grade calculation (Ghana University standard grading scheme)
  let letterGrade = 'F';
  let gradeRemark = 'Requires Immediate Revision';
  if (scorePercentage >= 80) {
    letterGrade = 'Grade A (First Class Distinction)';
    gradeRemark = 'Mastery level! Excellent preparation for university exams.';
  } else if (scorePercentage >= 75) {
    letterGrade = 'Grade B+ (Upper Second Class)';
    gradeRemark = 'Very strong comprehension. A few minor points to review.';
  } else if (scorePercentage >= 70) {
    letterGrade = 'Grade B (Second Class Upper)';
    gradeRemark = 'Good understanding. Review key formulas and derivations.';
  } else if (scorePercentage >= 65) {
    letterGrade = 'Grade C+ (Second Class Lower)';
    gradeRemark = 'Fair. Dedicate time to the One-Night-Before checklist.';
  } else if (scorePercentage >= 50) {
    letterGrade = 'Grade D / Pass';
    gradeRemark = 'Marginal pass. Re-read chapter notes and attempt again.';
  }

  // Format timer
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const currentQ = questions[currentQuestionIdx];

  return (
    <div className="space-y-6">
      {/* Quiz Top Toolbar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" /> Exam Assessment Engine
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Practice Examination & Quizzes
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Test your knowledge with authentic Ghana University & Floyd-style exam questions with instant feedback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer Badge */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-mono font-bold">
              <Timer className="w-4 h-4 text-emerald-500" />
              <span>{formattedTime}</span>
            </div>

            {/* Course Selector Dropdown */}
            <select
              value={selectedCourseId}
              onChange={(e) => handleCourseChange(e.target.value)}
              className="text-xs font-bold p-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">★ All Courses Master Mock (Ghana University Exam)</option>
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} – {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Quiz Card */}
      {!quizFinished && currentQ ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          {/* Progress Bar & Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>
                Question {currentQuestionIdx + 1} of {questions.length}
              </span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {Math.round(((currentQuestionIdx + 1) / questions.length) * 100)}% Completed
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIdx + 1) / questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionStyle =
                'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-emerald-300 hover:bg-slate-50 dark:hover:bg-slate-800/40';

              if (isSubmitted) {
                if (isCorrect) {
                  optionStyle =
                    'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isChosen && !isCorrect) {
                  optionStyle =
                    'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-medium';
                } else {
                  optionStyle =
                    'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                        isSubmitted && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : isSubmitted && isChosen && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-medium">{opt}</span>
                  </div>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isSubmitted && isChosen && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible after answering) */}
          {isSubmitted && (
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/40 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Examiner's Explanation & Reference
              </div>
              <p className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              disabled={currentQuestionIdx === 0}
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Previous Question
            </button>

            {isSubmitted && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20"
              >
                <span>
                  {currentQuestionIdx === questions.length - 1
                    ? 'Complete & View Results'
                    : 'Next Question'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : quizFinished ? (
        /* Quiz Finished Score Card */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-10 shadow-sm space-y-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex p-4 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Quiz Examination Completed!
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Here is your performance breakdown for{' '}
              <strong className="text-slate-700 dark:text-slate-200">
                {isAllCoursesMode ? 'Master Mock Exam' : selectedCourseId.toUpperCase()}
              </strong>
            </p>
          </div>

          {/* Score & Letter Grade */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">Score</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {correctTotal} / {questions.length}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 uppercase font-bold block">Accuracy</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white font-mono">
                {scorePercentage}%
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 uppercase font-bold block">Time Taken</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white font-mono">
                {formattedTime}
              </span>
            </div>
          </div>

          {/* Letter Grade Banner */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-left space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              Ghana University Grading Standard:
            </div>
            <div className="text-base font-black text-indigo-950 dark:text-indigo-200">
              {letterGrade}
            </div>
            <p className="text-xs text-indigo-800/80 dark:text-indigo-300/80">
              {gradeRemark}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={restartQuiz}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Practice Quiz</span>
            </button>

            {onNavigateToNotes && (
              <button
                onClick={() => onNavigateToNotes(selectedCourseId)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <BookOpen className="w-4 h-4" />
                <span>Return to Chapter Summaries</span>
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
