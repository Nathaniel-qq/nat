import React, { useState } from 'react';
import { X, Download, FileCode, Archive, Check, Copy, ExternalLink, Sparkles, Monitor } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  const [downloadingHtml, setDownloadingHtml] = useState(false);
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const downloadFile = async (url, filename, setStatus) => {
    setStatus(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // Fallback: direct anchor link
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setStatus(false), 2000);
    }
  };

  const handleCopyCleanHtml = async () => {
    try {
      const res = await fetch('/unistudy-exam-master.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('Could not copy file directly. Please use the Download buttons above.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Download UniStudy ExamMaster
              </h2>
              <p className="text-xs text-slate-500">
                Pure standalone files — 100% clean, no platform wrapper or chat interface.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Card 1: Standalone HTML */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Standalone Offline App (.html)
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Recommended
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Single file (~518 KB). Just double-click to run in any browser offline. Contains all 9 courses, simulators & quizzes.
              </p>
            </div>

            <button
              onClick={() => downloadFile('/unistudy-exam-master.html', 'UniStudy-ExamMaster.html', setDownloadingHtml)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 shrink-0 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{downloadingHtml ? 'Downloading...' : 'Download .html'}</span>
            </button>
          </div>

          {/* Card 2: Full ZIP Bundle */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Archive className="w-4 h-4 text-indigo-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Full Project Package (.zip)
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  545 KB
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Includes standalone app + full React source code (`src/`, `package.json`, `README.md`).
              </p>
            </div>

            <button
              onClick={() => downloadFile('/unistudy-exam-master.zip', 'UniStudy-ExamMaster.zip', setDownloadingZip)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 shrink-0 transition-all"
            >
              <Archive className="w-4 h-4" />
              <span>{downloadingZip ? 'Downloading...' : 'Download .zip'}</span>
            </button>
          </div>

          {/* Helpful Tip */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
            <strong>Offline Usage Instructions:</strong>
            <p>
              Once downloaded, you can double-click <code>UniStudy-ExamMaster.html</code> anywhere on your computer or phone — even without Wi-Fi or internet. It runs 100% self-contained in your browser.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <button
            onClick={handleCopyCleanHtml}
            className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'HTML Copied to Clipboard!' : 'Copy Raw HTML'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
