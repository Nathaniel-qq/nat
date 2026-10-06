import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function SearchModal({ isOpen, onClose, onSelectCourseUnit }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  // Search logic across courses, units, and sections
  const results = [];
  if (searchTerm.trim().length >= 2) {
    const q = searchTerm.toLowerCase();

    coursesData.forEach((course) => {
      // Check course title or code
      if (course.code.toLowerCase().includes(q) || course.title.toLowerCase().includes(q)) {
        results.push({
          type: 'course',
          courseId: course.id,
          unitIdx: 0,
          title: `${course.code}: ${course.title}`,
          snippet: course.subtitle,
          badge: course.code
        });
      }

      // Check units and sections
      course.units.forEach((unit, unitIdx) => {
        if (unit.title.toLowerCase().includes(q) || unit.summary.toLowerCase().includes(q)) {
          results.push({
            type: 'unit',
            courseId: course.id,
            unitIdx,
            title: `${course.code} – Unit ${unit.unitNumber}: ${unit.title}`,
            snippet: unit.summary,
            badge: `Unit ${unit.unitNumber}`
          });
        }

        unit.sections.forEach((sec) => {
          if (sec.title.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q)) {
            // Find snippet around match
            const lowerContent = sec.content.toLowerCase();
            const matchIndex = lowerContent.indexOf(q);
            const start = Math.max(0, matchIndex - 40);
            const end = Math.min(sec.content.length, matchIndex + 100);
            const snippet = (start > 0 ? '...' : '') + sec.content.substring(start, end) + (end < sec.content.length ? '...' : '');

            results.push({
              type: 'section',
              courseId: course.id,
              unitIdx,
              title: `${course.code} – ${sec.title}`,
              snippet: snippet,
              badge: `Unit ${unit.unitNumber}`
            });
          }
        });
      });
    });
  }

  const handleSelect = (item) => {
    onSelectCourseUnit(item.courseId, item.unitIdx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
          <input
            autoFocus
            type="text"
            placeholder="Search syllabus, formulas, concepts (e.g. De Morgan, Eigenvalues, KCL, Flowchart)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {searchTerm.trim().length < 2 ? (
            <div className="text-center py-10 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-700 mx-auto" />
              <p className="text-xs text-slate-500">
                Type at least 2 characters to search across all 9 university courses.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['K-Maps', 'Eigenvalues', '2\'s Complement', 'Ohm\'s Law', 'Flowcharts', 'ÊTRE', 'Handshaking', 'SRAM'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-500">
              No course notes found matching "<span className="font-semibold text-slate-700 dark:text-slate-300">{searchTerm}</span>".
            </div>
          ) : (
            results.slice(0, 15).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item)}
                className="p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 cursor-pointer transition-all flex items-start justify-between gap-3 group"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold">
                      {item.badge}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-sans">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
              </div>
            ))
          )}
        </div>

        {/* Footer Shortcut Indicator */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-right text-[11px] text-slate-400">
          Found {results.length} result{results.length === 1 ? '' : 's'} across 9 courses
        </div>
      </div>
    </div>
  );
}
