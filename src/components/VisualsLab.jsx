import React, { useState } from 'react';
import { 
  Cpu, 
  Grid3X3, 
  Binary, 
  Activity, 
  Globe, 
  GitBranch, 
  Network,
  RotateCcw,
  Play,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';

export default function VisualsLab() {
  const [activeTab, setActiveTab] = useState('logic');

  return (
    <div className="space-y-6">
      {/* Visualizer selector navigation */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('logic')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'logic'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Logic Gates Lab</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">CSNS 141</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'matrix'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Matrix & Eigenvalues</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">MATH 105</span>
          </button>

          <button
            onClick={() => setActiveTab('resistor')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'resistor'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Resistor Color Code</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">CTGE 121</span>
          </button>

          <button
            onClick={() => setActiveTab('binary')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'binary'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Binary className="w-4 h-4" />
            <span>2's Complement & Bases</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">CSNS / CSSD</span>
          </button>

          <button
            onClick={() => setActiveTab('flowchart')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'flowchart'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Flowchart Step-Through</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">CSSD 101</span>
          </button>

          <button
            onClick={() => setActiveTab('french')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'french'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>French Verbs & Cards</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">FREN 171</span>
          </button>

          <button
            onClick={() => setActiveTab('graph')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'graph'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>Graph BFS/DFS & Handshaking</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/20">MATH 103</span>
          </button>
        </div>
      </div>

      {/* Render active tool */}
      <div className="transition-all">
        {activeTab === 'logic' && <LogicGatesSimulator />}
        {activeTab === 'matrix' && <MatrixCalculator />}
        {activeTab === 'resistor' && <ResistorCodeCalculator />}
        {activeTab === 'binary' && <BinaryComplementConverter />}
        {activeTab === 'flowchart' && <FlowchartSimulator />}
        {activeTab === 'french' && <FrenchConjugatorAndCards />}
        {activeTab === 'graph' && <GraphVisualizer />}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 1. LOGIC GATES SIMULATOR
// -------------------------------------------------------------
function LogicGatesSimulator() {
  const [gate, setGate] = useState('AND');
  const [inA, setInA] = useState(1);
  const [inB, setInB] = useState(1);

  // Compute output
  let out = 0;
  if (gate === 'AND') out = inA & inB;
  else if (gate === 'OR') out = inA | inB;
  else if (gate === 'NOT') out = inA ? 0 : 1;
  else if (gate === 'NAND') out = (inA & inB) ? 0 : 1;
  else if (gate === 'NOR') out = (inA | inB) ? 0 : 1;
  else if (gate === 'XOR') out = inA ^ inB;
  else if (gate === 'XNOR') out = (inA ^ inB) ? 0 : 1;

  // Truth table definitions
  const truthTables = {
    AND: [
      { a: 0, b: 0, out: 0 },
      { a: 0, b: 1, out: 0 },
      { a: 1, b: 0, out: 0 },
      { a: 1, b: 1, out: 1 },
    ],
    OR: [
      { a: 0, b: 0, out: 0 },
      { a: 0, b: 1, out: 1 },
      { a: 1, b: 0, out: 1 },
      { a: 1, b: 1, out: 1 },
    ],
    NOT: [
      { a: 0, b: '-', out: 1 },
      { a: 1, b: '-', out: 0 },
    ],
    NAND: [
      { a: 0, b: 0, out: 1 },
      { a: 0, b: 1, out: 1 },
      { a: 1, b: 0, out: 1 },
      { a: 1, b: 1, out: 0 },
    ],
    NOR: [
      { a: 0, b: 0, out: 1 },
      { a: 0, b: 1, out: 0 },
      { a: 1, b: 0, out: 0 },
      { a: 1, b: 1, out: 0 },
    ],
    XOR: [
      { a: 0, b: 0, out: 0 },
      { a: 0, b: 1, out: 1 },
      { a: 1, b: 0, out: 1 },
      { a: 1, b: 1, out: 0 },
    ],
    XNOR: [
      { a: 0, b: 0, out: 1 },
      { a: 0, b: 1, out: 0 },
      { a: 1, b: 0, out: 0 },
      { a: 1, b: 1, out: 1 },
    ]
  };

  const gateDescriptions = {
    AND: "Output is 1 ONLY if all inputs are 1. Equation: Y = A · B",
    OR: "Output is 1 if AT LEAST ONE input is 1. Equation: Y = A + B",
    NOT: "Inverts input logic level. Equation: Y = A'",
    NAND: "Universal Gate. Inverted AND output. Equation: Y = (A · B)'",
    NOR: "Universal Gate. Inverted OR output. Equation: Y = (A + B)'",
    XOR: "Exclusive-OR: Output is 1 when inputs differ. Equation: Y = A ⊕ B = A'B + AB'",
    XNOR: "Equivalence gate: Output is 1 when inputs are identical. Equation: Y = (A ⊕ B)'"
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5" /> Interactive Logic Circuit Lab
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Logic Gates & Truth Table Simulator</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Toggle input signals A & B and test basic and universal gates in real time with synchronized truth table tracking.
          </p>
        </div>

        {/* Gate selector buttons */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
          {['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'].map((g) => (
            <button
              key={g}
              onClick={() => setGate(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                gate === g
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Schematic Diagram Box */}
        <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden">
          <div className="absolute top-4 left-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Interactive Circuit Schematic
          </div>

          <div className="flex items-center justify-center gap-8 w-full max-w-md my-4">
            {/* Input Switches Column */}
            <div className="flex flex-col gap-6">
              {/* Input A */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 w-6">A:</span>
                <button
                  onClick={() => setInA(inA === 1 ? 0 : 1)}
                  className={`w-14 h-9 rounded-full transition-colors p-1 flex items-center ${
                    inA === 1 ? 'bg-emerald-500 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold font-mono text-slate-800">
                    {inA}
                  </div>
                </button>
                <div
                  className={`h-1 w-12 transition-colors ${
                    inA === 1 ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              </div>

              {/* Input B (Hidden if NOT gate) */}
              {gate !== 'NOT' && (
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 w-6">B:</span>
                  <button
                    onClick={() => setInB(inB === 1 ? 0 : 1)}
                    className={`w-14 h-9 rounded-full transition-colors p-1 flex items-center ${
                      inB === 1 ? 'bg-emerald-500 justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold font-mono text-slate-800">
                      {inB}
                    </div>
                  </button>
                  <div
                    className={`h-1 w-12 transition-colors ${
                      inB === 1 ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                </div>
              )}
            </div>

            {/* Gate Symbol Box */}
            <div className="relative flex flex-col items-center justify-center px-6 py-8 bg-white dark:bg-slate-900 border-2 border-emerald-500/50 dark:border-emerald-500/30 rounded-2xl shadow-lg">
              <span className="text-lg font-black tracking-widest text-slate-900 dark:text-white font-mono">
                {gate}
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                GATE
              </span>
            </div>

            {/* Output Wire and Indicator */}
            <div className="flex items-center gap-3">
              <div
                className={`h-1 w-12 transition-colors ${
                  out === 1 ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
              <div
                className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-mono font-black text-xl transition-all ${
                  out === 1
                    ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/30 shadow-[0_0_20px_#10b981]'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                <span>{out}</span>
                <span className="text-[9px] uppercase tracking-wider font-sans font-bold">
                  {out === 1 ? 'HIGH' : 'LOW'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 px-4 py-2 rounded-xl bg-slate-200/60 dark:bg-slate-900/80 text-xs font-mono text-slate-700 dark:text-slate-300">
            {gateDescriptions[gate]}
          </div>
        </div>

        {/* Live Truth Table */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between mb-3">
              <span>{gate} Gate Truth Table</span>
              <span className="text-xs font-normal text-slate-500">Active row highlighted</span>
            </h3>

            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-xs text-center font-mono">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Input A</th>
                    {gate !== 'NOT' && <th className="py-2.5 px-3">Input B</th>}
                    <th className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Output (Y)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {truthTables[gate].map((row, idx) => {
                    const isActive =
                      gate === 'NOT'
                        ? row.a === inA
                        : row.a === inA && row.b === inB;

                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isActive
                            ? 'bg-emerald-500/15 dark:bg-emerald-500/25 font-bold text-emerald-900 dark:text-emerald-200'
                            : 'hover:bg-slate-100/50 dark:hover:bg-slate-900/50 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <td className="py-2.5 px-3">{row.a}</td>
                        {gate !== 'NOT' && <td className="py-2.5 px-3">{row.b}</td>}
                        <td className="py-2.5 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded ${
                              row.out === 1
                                ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                            }`}
                          >
                            {row.out}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300">
              <strong>Floyd Exam Tip:</strong> NAND and NOR are <em>Universal Gates</em> because any combinational Boolean function (including AND, OR, NOT, XOR) can be constructed exclusively using only NAND gates or only NOR gates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. MATRIX & EIGENVALUES CALCULATOR (MATH 105)
// -------------------------------------------------------------
function MatrixCalculator() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(1);
  const [c, setC] = useState(2);
  const [d, setD] = useState(3);

  // Calculations
  const det = a * d - b * c;
  const trace = a + d;
  
  // Characteristic equation: λ² - trace*λ + det = 0
  // Discriminant: trace^2 - 4*det
  const disc = trace * trace - 4 * det;
  let eig1 = null;
  let eig2 = null;
  if (disc >= 0) {
    eig1 = ((trace + Math.sqrt(disc)) / 2).toFixed(2);
    eig2 = ((trace - Math.sqrt(disc)) / 2).toFixed(2);
  }

  // Inverse: 1/det * [d, -b; -c, a]
  const isInvertible = det !== 0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-semibold mb-2">
          <Grid3X3 className="w-3.5 h-3.5" /> Linear Algebra Interactive Lab
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2×2 Matrix, Determinant & Eigenvalue Explorer</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Adjust matrix values to compute Determinant, Inverse, Trace, Characteristic Polynomial, and Eigenvalues step by step.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Matrix Inputs */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Edit Matrix Entries: A</h3>
            <div className="flex items-center justify-center gap-2 my-2">
              <span className="text-4xl text-slate-400 font-light">[</span>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-slate-400 font-mono block">a₁₁</label>
                  <input
                    type="number"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                    className="w-16 h-12 text-center text-lg font-bold font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 font-mono block">a₁₂</label>
                  <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                    className="w-16 h-12 text-center text-lg font-bold font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 font-mono block">a₂₁</label>
                  <input
                    type="number"
                    value={c}
                    onChange={(e) => setC(Number(e.target.value))}
                    className="w-16 h-12 text-center text-lg font-bold font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 font-mono block">a₂₂</label>
                  <input
                    type="number"
                    value={d}
                    onChange={(e) => setD(Number(e.target.value))}
                    className="w-16 h-12 text-center text-lg font-bold font-mono rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <span className="text-4xl text-slate-400 font-light">]</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => { setA(4); setB(1); setC(2); setD(3); }}
                className="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium hover:bg-indigo-100"
              >
                Ghana Exam Example [4, 1; 2, 3]
              </button>
              <button
                onClick={() => { setA(2); setB(1); setC(1); setD(1); }}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-300"
              >
                Unit 1 Example [2, 1; 1, 1]
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Mathematical Computation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-5">
            {/* Determinant & Trace */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-semibold block">Determinant: det(A)</span>
                <span className="text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400">
                  {det}
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  ad - bc = ({a})({d}) - ({b})({c}) = {a * d} - {b * c} = {det}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-semibold block">Trace: tr(A)</span>
                <span className="text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400">
                  {trace}
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  a₁₁ + a₂₂ = {a} + {d} = {trace}
                </p>
              </div>
            </div>

            {/* Characteristic Polynomial & Eigenvalues */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs text-slate-500 font-semibold block">Characteristic Equation:</span>
              <div className="font-mono text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/60 p-2.5 rounded-lg">
                λ² - tr(A)λ + det(A) = 0 <br />
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                  λ² - {trace}λ + {det >= 0 ? `+ ${det}` : `- ${Math.abs(det)}`} = 0
                </span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                <strong>Eigenvalues (λ): </strong>
                {disc >= 0 ? (
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 ml-2">
                    λ₁ = {eig1}, λ₂ = {eig2}
                  </span>
                ) : (
                  <span className="text-amber-500 font-medium">Complex conjugate eigenvalues (disc &lt; 0)</span>
                )}
              </div>
            </div>

            {/* Inverse Matrix */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs text-slate-500 font-semibold block">Inverse Matrix: A⁻¹</span>
              {isInvertible ? (
                <div className="flex items-center gap-4 font-mono text-sm">
                  <span>1 / {det} × </span>
                  <div className="flex items-center gap-1 text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/60 p-2 rounded-lg">
                    <span>[ {d}, {-b} ; {-c}, {a} ]</span>
                  </div>
                </div>
              ) : (
                <span className="text-red-500 font-medium text-xs">
                  Matrix is singular (det = 0). Inverse does not exist!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. RESISTOR 4-BAND COLOR CODE CALCULATOR (CTGE 121)
// -------------------------------------------------------------
function ResistorCodeCalculator() {
  const [b1, setB1] = useState(2); // Red
  const [b2, setB2] = useState(2); // Red
  const [mult, setMult] = useState(3); // Orange (10^3 = 1k)
  const [tol, setTol] = useState(5); // Gold = 5%

  const colorCodes = [
    { label: "Black", val: 0, bg: "#000000", text: "#ffffff" },
    { label: "Brown", val: 1, bg: "#8B4513", text: "#ffffff" },
    { label: "Red", val: 2, bg: "#DC2626", text: "#ffffff" },
    { label: "Orange", val: 3, bg: "#EA580C", text: "#ffffff" },
    { label: "Yellow", val: 4, bg: "#CA8A04", text: "#ffffff" },
    { label: "Green", val: 5, bg: "#16A34A", text: "#ffffff" },
    { label: "Blue", val: 6, bg: "#2563EB", text: "#ffffff" },
    { label: "Violet", val: 7, bg: "#9333EA", text: "#ffffff" },
    { label: "Grey", val: 8, bg: "#6B7280", text: "#ffffff" },
    { label: "White", val: 9, bg: "#FFFFFF", text: "#000000" }
  ];

  const toleranceOptions = [
    { label: "Gold (±5%)", val: 5, bg: "#D4AF37" },
    { label: "Silver (±10%)", val: 10, bg: "#C0C0C0" },
    { label: "Brown (±1%)", val: 1, bg: "#8B4513" },
    { label: "Red (±2%)", val: 2, bg: "#DC2626" }
  ];

  // Calculation
  const resistanceValue = (b1 * 10 + b2) * Math.pow(10, mult);
  let formattedRes = `${resistanceValue} Ω`;
  if (resistanceValue >= 1000000) {
    formattedRes = `${(resistanceValue / 1000000).toFixed(2)} MΩ`;
  } else if (resistanceValue >= 1000) {
    formattedRes = `${(resistanceValue / 1000).toFixed(2)} kΩ`;
  }

  const minRes = resistanceValue * (1 - tol / 100);
  const maxRes = resistanceValue * (1 + tol / 100);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-2">
          <Activity className="w-3.5 h-3.5" /> Electronics Component Simulator
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resistor 4-Band Color Code Calculator</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Memory Mnemonic: <em>"Black Brown ROY of Great Britain had a Very Good Wife"</em> (0 to 9).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Resistor Visual Schematic */}
        <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
          {/* SVG Resistor Graphic */}
          <div className="relative flex items-center justify-center w-full max-w-sm my-6">
            {/* Left terminal lead */}
            <div className="w-16 h-2 bg-slate-400 dark:bg-slate-600 rounded-l" />

            {/* Resistor ceramic body */}
            <div className="relative w-56 h-20 bg-[#e5cfb3] dark:bg-[#d8be9f] rounded-2xl border-2 border-[#bfa27d] flex items-center justify-between px-6 shadow-md overflow-hidden">
              {/* Band 1 */}
              <div
                className="w-4 h-full shadow-inner transition-colors"
                style={{ backgroundColor: colorCodes[b1].bg }}
              />
              {/* Band 2 */}
              <div
                className="w-4 h-full shadow-inner transition-colors"
                style={{ backgroundColor: colorCodes[b2].bg }}
              />
              {/* Band 3 Multiplier */}
              <div
                className="w-4 h-full shadow-inner transition-colors"
                style={{ backgroundColor: colorCodes[mult].bg }}
              />
              {/* Space before tolerance */}
              <div className="w-4" />
              {/* Band 4 Tolerance */}
              <div
                className="w-4 h-full shadow-inner transition-colors"
                style={{
                  backgroundColor: toleranceOptions.find((t) => t.val === tol)?.bg || '#D4AF37'
                }}
              />
            </div>

            {/* Right terminal lead */}
            <div className="w-16 h-2 bg-slate-400 dark:bg-slate-600 rounded-r" />
          </div>

          {/* Computed Value Display */}
          <div className="text-center space-y-1 mt-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Nominal Resistance
            </span>
            <div className="text-3xl font-black font-mono text-teal-600 dark:text-teal-400">
              {formattedRes} <span className="text-base font-normal text-slate-500">± {tol}%</span>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Tolerance Range: {minRes >= 1000 ? `${(minRes / 1000).toFixed(1)}k` : minRes.toFixed(0)}Ω –{' '}
              {maxRes >= 1000 ? `${(maxRes / 1000).toFixed(1)}k` : maxRes.toFixed(0)}Ω
            </div>
          </div>
        </div>

        {/* Color Selectors */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Band 1 */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Band 1 (1st Digit)
              </label>
              <select
                value={b1}
                onChange={(e) => setB1(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {colorCodes.map((c) => (
                  <option key={c.val} value={c.val}>
                    {c.val} - {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Band 2 */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Band 2 (2nd Digit)
              </label>
              <select
                value={b2}
                onChange={(e) => setB2(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {colorCodes.map((c) => (
                  <option key={c.val} value={c.val}>
                    {c.val} - {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Multiplier Band 3 */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Band 3 (Multiplier)
              </label>
              <select
                value={mult}
                onChange={(e) => setMult(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {colorCodes.slice(0, 8).map((c) => (
                  <option key={c.val} value={c.val}>
                    10^{c.val} (×{Math.pow(10, c.val)}) - {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tolerance Band 4 */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Band 4 (Tolerance)
              </label>
              <select
                value={tol}
                onChange={(e) => setTol(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {toleranceOptions.map((t) => (
                  <option key={t.val} value={t.val}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
            <div>
              <strong>Formula:</strong> R = ({b1} × 10 + {b2}) × 10^{mult} Ω
            </div>
            <div>
              = ({b1 * 10 + b2}) × {Math.pow(10, mult)} = <strong>{resistanceValue} Ω</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. NUMBER SYSTEMS & 2'S COMPLEMENT CONVERTER
// -------------------------------------------------------------
function BinaryComplementConverter() {
  const [decVal, setDecVal] = useState(175);

  const safeNum = Math.max(0, Math.min(255, isNaN(decVal) ? 0 : decVal));
  const binStr = safeNum.toString(2).padStart(8, '0');
  const hexStr = safeNum.toString(16).toUpperCase().padStart(2, '0');
  const octStr = safeNum.toString(8);

  // 1's complement (8-bit)
  const onesComp = binStr
    .split('')
    .map((b) => (b === '0' ? '1' : '0'))
    .join('');

  // 2's complement
  const twosCompVal = (parseInt(onesComp, 2) + 1) & 0xff;
  const twosCompStr = twosCompVal.toString(2).padStart(8, '0');

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-semibold mb-2">
          <Binary className="w-3.5 h-3.5" /> Number Systems & Codes
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Radix Base & 2's Complement Visualizer</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Convert integers into Binary, Hexadecimal, Octal, 1's Complement and 2's Complement representation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
              Enter Decimal Integer (0 to 255):
            </label>
            <input
              type="number"
              min="0"
              max="255"
              value={decVal}
              onChange={(e) => setDecVal(parseInt(e.target.value) || 0)}
              className="w-full text-2xl font-black font-mono p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
            />

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setDecVal(175)}
                className="text-xs px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-medium hover:bg-sky-100"
              >
                175 (Floyd Example)
              </button>
              <button
                onClick={() => setDecVal(45)}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-300"
              >
                45
              </button>
              <button
                onClick={() => setDecVal(178)}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-300"
              >
                178 (10110010₂)
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Binary (Base 2)</span>
              <span className="text-base font-bold font-mono text-sky-600 dark:text-sky-400">{binStr}₂</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Hexadecimal (Base 16)</span>
              <span className="text-base font-bold font-mono text-sky-600 dark:text-sky-400">0x{hexStr}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Octal (Base 8)</span>
              <span className="text-base font-bold font-mono text-sky-600 dark:text-sky-400">{octStr}₈</span>
            </div>
          </div>

          {/* 1's and 2's Complement Breakdown */}
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Original Binary:</span>
              <span className="font-bold tracking-widest text-slate-800 dark:text-slate-200">{binStr}</span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono border-t border-slate-200 dark:border-slate-800 pt-2">
              <span className="text-slate-500">1's Complement (Invert all bits):</span>
              <span className="font-bold tracking-widest text-amber-600 dark:text-amber-400">{onesComp}</span>
            </div>

            <div className="flex items-center justify-between text-xs font-mono border-t border-slate-200 dark:border-slate-800 pt-2">
              <span className="text-slate-500">+ Add 1:</span>
              <span className="text-slate-400 font-mono tracking-widest">00000001</span>
            </div>

            <div className="flex items-center justify-between text-sm font-mono border-t-2 border-sky-500 pt-2 font-bold">
              <span className="text-sky-600 dark:text-sky-400">2's Complement:</span>
              <span className="tracking-widest text-emerald-600 dark:text-emerald-400">{twosCompStr}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. FLOWCHART STEP-THROUGH SIMULATOR (CSSD 101)
// -------------------------------------------------------------
function FlowchartSimulator() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      shape: "Oval (Terminal)",
      title: "START",
      desc: "Algorithm execution begins.",
      highlight: "start"
    },
    {
      shape: "Parallelogram (Input/Output)",
      title: "INPUT Number",
      desc: "Read input value from user: e.g. Number = 8",
      highlight: "input"
    },
    {
      shape: "Diamond (Decision)",
      title: "Condition: Number % 2 == 0 ?",
      desc: "Evaluate modulus remainder. 8 % 2 = 0 is TRUE.",
      highlight: "decision"
    },
    {
      shape: "Parallelogram (Output)",
      title: 'PRINT "EVEN"',
      desc: 'Since condition is TRUE, execute True branch and display result.',
      highlight: "output"
    },
    {
      shape: "Oval (Terminal)",
      title: "END",
      desc: "Algorithm successfully terminates.",
      highlight: "end"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-2">
          <GitBranch className="w-3.5 h-3.5" /> Programming & Problem Solving
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Flowchart Step-Through Visualizer</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Trace algorithm execution node-by-node for: <em>Even or Odd Number Checker</em>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Diagram Representation */}
        <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center space-y-3">
          {/* Node 1: Start */}
          <div
            className={`w-40 py-2.5 rounded-full text-center text-xs font-bold transition-all shadow-sm ${
              currentStep === 0
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
          >
            START
          </div>
          <div className="text-slate-400">↓</div>

          {/* Node 2: Input */}
          <div
            className={`w-48 py-2.5 text-center text-xs font-bold -skew-x-12 transition-all shadow-sm ${
              currentStep === 1
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <span className="skew-x-12 inline-block">INPUT Number</span>
          </div>
          <div className="text-slate-400">↓</div>

          {/* Node 3: Decision */}
          <div
            className={`w-36 h-20 rotate-45 flex items-center justify-center transition-all shadow-sm ${
              currentStep === 2
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <span className="-rotate-45 text-[11px] font-bold text-center leading-tight">
              Number % 2 == 0 ?
            </span>
          </div>
          <div className="text-slate-400">↓ [YES]</div>

          {/* Node 4: Output */}
          <div
            className={`w-48 py-2.5 text-center text-xs font-bold -skew-x-12 transition-all shadow-sm ${
              currentStep === 3
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <span className="skew-x-12 inline-block">PRINT "EVEN"</span>
          </div>
          <div className="text-slate-400">↓</div>

          {/* Node 5: End */}
          <div
            className={`w-40 py-2.5 rounded-full text-center text-xs font-bold transition-all shadow-sm ${
              currentStep === 4
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
          >
            END
          </div>
        </div>

        {/* Step Controller & Details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Step {currentStep + 1} of {steps.length}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {steps[currentStep].title}
            </h3>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
              Symbol: {steps[currentStep].shape}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {steps[currentStep].desc}
            </p>

            <div className="flex gap-2 pt-4">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40"
              >
                Previous Step
              </button>
              <button
                disabled={currentStep === steps.length - 1}
                onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white disabled:opacity-40"
              >
                Next Step →
              </button>
              <button
                onClick={() => setCurrentStep(0)}
                className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. FRENCH VERBS & VOCABULARY CARDS (FREN 171)
// -------------------------------------------------------------
function FrenchConjugatorAndCards() {
  const [selectedVerb, setSelectedVerb] = useState('parler');
  const [flippedCard, setFlippedCard] = useState(null);

  const verbs = {
    parler: {
      infinitive: "Parler",
      meaning: "To speak",
      conjugations: [
        { pronoun: "Je", form: "parle", phonetics: "zhuh parl", ex: "Je parle français (I speak French)." },
        { pronoun: "Tu", form: "parles", phonetics: "too parl", ex: "Tu parles anglais (You speak English)." },
        { pronoun: "Il / Elle", form: "parle", phonetics: "eel/ell parl", ex: "Elle parle bien (She speaks well)." },
        { pronoun: "Nous", form: "parlons", phonetics: "noo par-lohn", ex: "Nous parlons français à l'école." },
        { pronoun: "Vous", form: "parlez", phonetics: "voo par-lay", ex: "Parlez-vous français ?" },
        { pronoun: "Ils / Elles", form: "parlent", phonetics: "eel/ell parl", ex: "Ils parlent beaucoup." }
      ]
    },
    etre: {
      infinitive: "Être",
      meaning: "To be (Irregular auxiliary)",
      conjugations: [
        { pronoun: "Je", form: "suis", phonetics: "zhuh swee", ex: "Je suis étudiant (I am a student)." },
        { pronoun: "Tu", form: "es", phonetics: "too ay", ex: "Tu es ghanéen (You are Ghanaian)." },
        { pronoun: "Il / Elle", form: "est", phonetics: "eel/ell ay", ex: "Elle est professeure." },
        { pronoun: "Nous", form: "sommes", phonetics: "noo summ", ex: "Nous sommes à l'université." },
        { pronoun: "Vous", form: "êtes", phonetics: "voo zett", ex: "Vous êtes très gentil." },
        { pronoun: "Ils / Elles", form: "sont", phonetics: "eel/ell sohn", ex: "Ils sont ici." }
      ]
    },
    avoir: {
      infinitive: "Avoir",
      meaning: "To have (Expresses age)",
      conjugations: [
        { pronoun: "J'", form: "ai", phonetics: "zhay", ex: "J'ai 20 ans (I am 20 years old)." },
        { pronoun: "Tu", form: "as", phonetics: "too ah", ex: "Tu as un livre (You have a book)." },
        { pronoun: "Il / Elle", form: "a", phonetics: "eel/ell ah", ex: "Elle a un stylo." },
        { pronoun: "Nous", form: "avons", phonetics: "noo zah-vohn", ex: "Nous avons cours aujourd'hui." },
        { pronoun: "Vous", form: "avez", phonetics: "voo zah-vay", ex: "Vous avez des questions ?" },
        { pronoun: "Ils / Elles", form: "ont", phonetics: "eel/ell zohn", ex: "Ils ont des devoirs." }
      ]
    }
  };

  const flashcards = [
    { fr: "Comment vous appelez-vous ?", en: "What is your name? (Formal)", cat: "Greetings" },
    { fr: "Je m'appelle Kwame.", en: "My name is Kwame.", cat: "Intro" },
    { fr: "S'il vous plaît", en: "Please (Formal)", cat: "Courtesy" },
    { fr: "Merci beaucoup", en: "Thank you very much", cat: "Courtesy" },
    { fr: "Quatre-vingts (80)", en: "Eighty (4 × 20)", cat: "Numbers" },
    { fr: "Quelle heure est-il ?", en: "What time is it?", cat: "Time" }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-semibold mb-2">
          <Globe className="w-3.5 h-3.5" /> Language Skills
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">French Verb Conjugator & Interactive Flashcards</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Master the high-yield verbs for Ghana University exams: PARLER, ÊTRE, and AVOIR.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Verb Conjugation Table */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex gap-2">
            {Object.keys(verbs).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedVerb(key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedVerb === key
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {verbs[key].infinitive} ({verbs[key].meaning})
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-2.5 px-3">Subject</th>
                  <th className="py-2.5 px-3 font-bold text-rose-600 dark:text-rose-400">Conjugation</th>
                  <th className="py-2.5 px-3">Pronunciation</th>
                  <th className="py-2.5 px-3">Example in Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-sans">
                {verbs[selectedVerb].conjugations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-200">{row.pronoun}</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-rose-600 dark:text-rose-400">{row.form}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400 text-[11px]">/{row.phonetics}/</td>
                    <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300 italic">{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Flashcards Deck */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Click to Flip Quick Exam Recall Cards:
          </span>
          <div className="grid grid-cols-2 gap-3">
            {flashcards.map((card, idx) => {
              const isFlipped = flippedCard === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setFlippedCard(isFlipped ? null : idx)}
                  className={`p-4 rounded-xl cursor-pointer border text-center transition-all min-h-[110px] flex flex-col items-center justify-center ${
                    isFlipped
                      ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-rose-300 shadow-sm'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    {card.cat} {isFlipped ? "(English)" : "(French)"}
                  </span>
                  <span className="text-xs font-bold">
                    {isFlipped ? card.en : card.fr}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. GRAPH THEORY & TRAVERSAL VISUALIZER (MATH 103)
// -------------------------------------------------------------
function GraphVisualizer() {
  const [traversalMode, setTraversalMode] = useState('BFS');
  const [activeNode, setActiveNode] = useState(null);

  // Graph vertices & edges
  const vertices = [
    { id: 'A', x: 50, y: 30, deg: 3 },
    { id: 'B', x: 150, y: 30, deg: 2 },
    { id: 'C', x: 50, y: 130, deg: 3 },
    { id: 'D', x: 150, y: 130, deg: 2 },
    { id: 'E', x: 230, y: 80, deg: 2 }
  ];

  const edges = [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'A', to: 'D' },
    { from: 'B', to: 'E' },
    { from: 'C', to: 'D' },
    { from: 'D', to: 'E' }
  ];

  // Total degrees = 3 + 2 + 3 + 2 + 2 = 12
  // Total edges = 6. 2 * |E| = 12! Handshaking verified.

  const bfsOrder = ['A', 'B', 'C', 'D', 'E'];
  const dfsOrder = ['A', 'B', 'E', 'D', 'C'];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-2">
          <Network className="w-3.5 h-3.5" /> Discrete Mathematics
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Graph Theory & Traversal Simulator</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Handshaking Theorem verification & BFS (Queue) vs DFS (Stack) traversal trace.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Graph */}
        <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center">
          <svg viewBox="0 0 280 160" className="w-full max-w-sm h-auto">
            {/* Draw Edges */}
            {edges.map((e, idx) => {
              const n1 = vertices.find((v) => v.id === e.from);
              const n2 = vertices.find((v) => v.id === e.to);
              return (
                <line
                  key={idx}
                  x1={n1.x}
                  y1={n1.y}
                  x2={n2.x}
                  y2={n2.y}
                  stroke="#94a3b8"
                  strokeWidth="2.5"
                />
              );
            })}

            {/* Draw Nodes */}
            {vertices.map((v) => {
              const isSelected = activeNode === v.id;
              return (
                <g key={v.id} onClick={() => setActiveNode(v.id)} className="cursor-pointer">
                  <circle
                    cx={v.x}
                    cy={v.y}
                    r="18"
                    className={`transition-all ${
                      isSelected
                        ? 'fill-cyan-500 stroke-cyan-300 stroke-4'
                        : 'fill-white dark:fill-slate-900 stroke-cyan-600 stroke-2'
                    }`}
                  />
                  <text
                    x={v.x}
                    y={v.y + 4}
                    textAnchor="middle"
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'fill-white' : 'fill-slate-800 dark:fill-slate-200'
                    }`}
                  >
                    {v.id}
                  </text>
                </g>
              );
            })}
          </svg>

          <span className="text-xs text-slate-400 mt-2">Click any node to inspect its degree</span>
        </div>

        {/* Handshaking Theorem & Traversal Trace */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              Handshaking Theorem Verification
            </span>
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
              ∑ deg(v) = deg(A) + deg(B) + deg(C) + deg(D) + deg(E) <br />
              = 3 + 2 + 3 + 2 + 2 = <strong>12</strong>
            </div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
              2 × |Edges| = 2 × 6 = 12 ✓ (Verified!)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Traversal Path (Starting from A)
              </span>
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <button
                  onClick={() => setTraversalMode('BFS')}
                  className={`text-[11px] font-bold px-2 py-1 rounded ${
                    traversalMode === 'BFS' ? 'bg-cyan-600 text-white' : 'text-slate-500'
                  }`}
                >
                  BFS (Queue)
                </button>
                <button
                  onClick={() => setTraversalMode('DFS')}
                  className={`text-[11px] font-bold px-2 py-1 rounded ${
                    traversalMode === 'DFS' ? 'bg-cyan-600 text-white' : 'text-slate-500'
                  }`}
                >
                  DFS (Stack)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm font-bold text-cyan-600 dark:text-cyan-400">
              {(traversalMode === 'BFS' ? bfsOrder : dfsOrder).map((node, i) => (
                <React.Fragment key={node}>
                  <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center">
                    {node}
                  </span>
                  {i < 4 && <ArrowRight className="w-3.5 h-3.5 text-slate-400" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
