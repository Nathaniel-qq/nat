import React, { useState } from 'react';
import { X, Search, FileSpreadsheet, Copy, Check, Printer } from 'lucide-react';

export default function FormulaSheetModal({ isOpen, onClose }) {
  const [activeCourse, setActiveCourse] = useState('math105');
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const copyFormula = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const sheets = {
    math105: {
      title: 'MATH 105 – Linear Algebra Formula Sheet',
      items: [
        { name: '2×2 Determinant', formula: 'det(A) = ad - bc', notes: 'For matrix [a, b; c, d]' },
        { name: '2×2 Matrix Inverse', formula: 'A⁻¹ = 1/(ad - bc) × [d, -b; -c, a]', notes: 'Exists iff det(A) ≠ 0' },
        { name: 'Determinant Scalar Property', formula: 'det(kA) = kⁿ det(A)', notes: 'For n × n square matrix A' },
        { name: 'Rank-Nullity Theorem', formula: 'Rank(A) + Nullity(A) = n', notes: 'n = number of columns (dimension of domain)' },
        { name: 'Characteristic Equation (2×2)', formula: 'λ² - Trace(A)λ + Det(A) = 0', notes: 'Trace(A) = a₁₁ + a₂₂; Det(A) = ad - bc' },
        { name: 'Eigenvalue Arithmetic Check', formula: '∑ λᵢ = Trace(A)  AND  ∏ λᵢ = Det(A)', notes: 'Quick test to verify your roots' },
        { name: 'Matrix Diagonalization', formula: 'A = P · D · P⁻¹', notes: 'P = eigenvector matrix; D = diagonal eigenvalue matrix' },
        { name: 'Dimension Theorem', formula: 'dim(Ker(T)) + dim(Range(T)) = dim(V)', notes: 'V = domain vector space' }
      ]
    },
    csns141: {
      title: 'CSNS 141 – Digital Electronics Formula Sheet',
      items: [
        { name: "De Morgan's First Theorem", formula: "(A + B)' = A' · B'", notes: 'Complement of sum = product of complements' },
        { name: "De Morgan's Second Theorem", formula: "(A · B)' = A' + B'", notes: 'Complement of product = sum of complements' },
        { name: 'Half Adder Equations', formula: 'Sum = A ⊕ B,  Carry = A · B', notes: '2 inputs (A, B)' },
        { name: 'Full Adder Equations', formula: 'Sum = A ⊕ B ⊕ Cin,  Cout = AB + Cin(A ⊕ B)', notes: '3 inputs (A, B, Cin)' },
        { name: 'JK Flip-Flop Characteristic', formula: "Q⁺ = J · Q' + K' · Q", notes: 'Toggles when J=1, K=1; no invalid state' },
        { name: 'D Flip-Flop Characteristic', formula: 'Q⁺ = D', notes: 'Data register element' },
        { name: 'T Flip-Flop Characteristic', formula: 'Q⁺ = T ⊕ Q', notes: 'Binary counter building block' },
        { name: 'MOD-N Counter Flip-Flop Formula', formula: 'n = ⌈log₂(N)⌉  (2ⁿ ≥ N)', notes: 'MOD-16 requires 4 flip-flops; MOD-8 requires 3' }
      ]
    },
    cspc: {
      title: 'CSPC / CTGE 121 – Physics & Electronics Formula Sheet',
      items: [
        { name: "Ohm's Law", formula: 'V = I · R  (I = V/R,  R = V/I)', notes: 'At constant temperature' },
        { name: 'Electrical Power', formula: 'P = V · I = I²R = V² / R', notes: 'Unit: Watt (W) = Joule/sec' },
        { name: 'Series Resistance', formula: 'R_total = R₁ + R₂ + R₃ + ...', notes: 'Current is identical everywhere' },
        { name: 'Parallel Resistance (2 branches)', formula: 'R_eq = (R₁ · R₂) / (R₁ + R₂)', notes: 'Voltage is identical across branches' },
        { name: 'Capacitor Charge', formula: 'Q = C · V', notes: 'C in Farads, V in Volts, Q in Coulombs' },
        { name: 'Capacitor Stored Energy', formula: 'E = ½ C V²', notes: 'Electrostatic potential energy' },
        { name: "Kirchhoff's Current Law (KCL)", formula: '∑ I_in = ∑ I_out  (∑ I = 0)', notes: 'Conservation of electric charge' },
        { name: "Kirchhoff's Voltage Law (KVL)", formula: '∑ V = 0 around any closed circuit loop', notes: 'Conservation of energy' },
        { name: 'Faraday\'s Induction Law', formula: 'EMF = -N (dΦ / dt)', notes: "Lenz's Law indicated by minus sign" },
        { name: 'Wave Speed Equation', formula: 'v = f · λ', notes: 'c ≈ 3 × 10⁸ m/s for EM waves in vacuum' },
        { name: 'Transistor Terminal Current', formula: 'I_E = I_B + I_C', notes: 'Emitter current is total current' }
      ]
    },
    math103: {
      title: 'MATH 103 – Discrete Mathematics Formula Sheet',
      items: [
        { name: 'Handshaking Theorem', formula: '∑ deg(v) = 2 · |E|', notes: 'Sum of all vertex degrees = 2 × (number of edges)' },
        { name: 'Complete Graph Edges', formula: '|E(Kₙ)| = n(n - 1) / 2', notes: 'For complete graph Kₙ' },
        { name: 'Tree Property', formula: '|E| = |V| - 1', notes: 'For n vertices, a tree has n - 1 edges' },
        { name: 'Permutations Formula', formula: 'nPr = n! / (n - r)!', notes: 'Order matters' },
        { name: 'Combinations Formula', formula: 'nCr = n! / [r! (n - r)!]', notes: 'Order does NOT matter' },
        { name: 'Power Set Cardinality', formula: '|P(A)| = 2ⁿ', notes: 'Total number of subsets; proper subsets = 2ⁿ - 1' },
        { name: 'Inclusion-Exclusion (2 Sets)', formula: '|A ∪ B| = |A| + |B| - |A ∩ B|', notes: 'Subtract intersection once' },
        { name: "Bayes' Theorem", formula: 'P(A|B) = [P(B|A) · P(A)] / P(B)', notes: 'Foundation for ML spam filters & AI diagnostics' }
      ]
    }
  };

  const currentSheet = sheets[activeCourse] || sheets.math105;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-lg animate-fadeIn">
      <div className="glass-lg rounded-[32px] w-full max-w-4xl max-h-[85vh] flex flex-col shadow-[0_30px_80px_rgba(15,23,42,0.35)] overflow-hidden border border-white/20 dark:border-white/10">
        <div className="p-6 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200/70 dark:border-violet-700/50">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                University Exam Formula Cheat Sheets
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Quick reference formulas, theorems, and rules for exams.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-3 border-b border-slate-200/80 dark:border-white/10 bg-white/20 dark:bg-slate-950/30 flex flex-wrap gap-2">
          {Object.keys(sheets).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCourse(key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCourse === key
                  ? 'bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
            {currentSheet.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSheet.items.map((item, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-2xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-300 dark:hover:border-violet-700 transition-all shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {item.name}
                  </span>
                  <button
                    onClick={() => copyFormula(`${item.name}: ${item.formula}`, `${activeCourse}_${idx}`)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 transition-all text-xs"
                    title="Copy formula"
                  >
                    {copiedKey === `${activeCourse}_${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/80 font-mono text-xs font-bold text-violet-700 dark:text-violet-300 border border-slate-200/60 dark:border-slate-800/60">
                  {item.formula}
                </div>

                <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500 font-sans">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-200/80 dark:border-white/10 bg-white/25 dark:bg-slate-950/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
          >
            Close Formula Sheet
          </button>
        </div>
      </div>
    </div>
  );
}

