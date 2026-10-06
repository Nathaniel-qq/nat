import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileCode, 
  Archive, 
  Check, 
  Copy, 
  ExternalLink, 
  AlertCircle,
  GitPullRequest,
  Globe,
  Sparkles
} from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState('');

  if (!isOpen) return null;

  const githubRawHtmlUrl = "https://raw.githubusercontent.com/Nathaniel-qq/nat/arena/88b17e6c-nat/unistudy-exam-master.html";
  const githubRawZipUrl = "https://github.com/Nathaniel-qq/nat/raw/arena/88b17e6c-nat/unistudy-exam-master.zip";
  const prUrl = "https://github.com/Nathaniel-qq/nat/pull/1";

  const tryBrowserDownload = (url, filename) => {
    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloadNotice('Download initiated! If your browser blocked it, use Method 1 or 2 below.');
    } catch (e) {
      window.open(url, '_blank');
      setDownloadNotice('Opening download link in a new window...');
    }
  };

  const handleCopyCleanHtml = async () => {
    try {
      const res = await fetch('/unistudy-exam-master.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // If relative fetch fails in iframe, copy via github raw
      try {
        const res = await fetch(githubRawHtmlUrl);
        const text = await res.text();
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch {
        alert('Could not copy automatically. Please open the GitHub Direct Link below.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Download Offline Study Website
              </h2>
              <p className="text-xs text-slate-500">
                Guaranteed offline access with zero platform or agent wrapper code.
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Iframe Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold">Why in-viewer downloads get blocked:</strong>
              <p className="leading-relaxed">
                Sandboxed browser preview frames restrict automatic file downloads. If clicking "Download" doesn't save a file in your browser, use <strong>Method 1 (Direct GitHub Download)</strong> or <strong>Method 2 (One-Click Copy HTML)</strong> below.
              </p>
            </div>
          </div>

          {/* METHOD 1: Direct GitHub Download Links */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <GitPullRequest className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Method 1: Direct Cloud Downloads (Always Works)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={githubRawHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="UniStudy-ExamMaster.html"
                className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Direct .html File
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Double-click to open anywhere offline
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={githubRawZipUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="UniStudy-ExamMaster.zip"
                className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Archive className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Direct .zip Package
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Full package with source code
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* METHOD 2: One-Click Copy HTML */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Copy className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Method 2: One-Click Copy & Save (No Downloads Needed)</span>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Click the button below to copy the entire standalone web app code to your clipboard. Then open any text editor (Notepad, TextEdit, VS Code), paste (`Ctrl+V`), and save as <strong>`study.html`</strong>.
              </p>

              <button
                onClick={handleCopyCleanHtml}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 shadow-md transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                    <span>✓ Entire Website HTML Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Complete HTML Code to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* METHOD 3: Try Local Browser Download */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Download className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>Method 3: Trigger Browser File Download</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => tryBrowserDownload('/unistudy-exam-master.html', 'UniStudy-ExamMaster.html')}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download .html</span>
              </button>

              <button
                onClick={() => tryBrowserDownload('/unistudy-exam-master.zip', 'UniStudy-ExamMaster.zip')}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Archive className="w-4 h-4" />
                <span>Download .zip</span>
              </button>
            </div>

            {downloadNotice && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {downloadNotice}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <a
            href={prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>View Pull Request #1 on GitHub</span>
          </a>

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
