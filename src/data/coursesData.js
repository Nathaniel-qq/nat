// Full syllabus master notes for Ghana University & Floyd Style Exam Preparation

export const coursesData = [
  {
    id: "csns141",
    code: "CSNS 141",
    title: "Digital Electronics",
    subtitle: "Complete Master Notes (Floyd Style + Ghana University Exam Focus)",
    category: "Hardware & Systems",
    icon: "Cpu",
    themeColor: "emerald",
    rating: "★★★★★",
    objectives: [
      "Understand digital number systems",
      "Perform binary arithmetic operations",
      "Apply digital codes and coding techniques",
      "Analyze and simplify Boolean expressions",
      "Design combinational logic circuits",
      "Design sequential logic circuits",
      "Understand memory systems and storage devices",
      "Solve examination questions involving digital circuit analysis and design"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Number Systems, Operations and Codes",
        summary: "Covers discrete logic levels, decimal, binary, octal, hexadecimal representations, fractional conversions, binary arithmetic (addition & subtraction), 1's and 2's complement methods, BCD 8421, Excess-3, Gray code, and ASCII.",
        sections: [
          {
            title: "Introduction to Digital Systems",
            content: "Digital systems operate using discrete values. Two logic levels: Logic HIGH = 1, Logic LOW = 0. Advantages include high noise immunity, reliable operation, easy information storage, and high-speed processing."
          },
          {
            title: "Number Systems Overview",
            content: "• Decimal (Base 10): Digits 0–9, weights 10⁰, 10¹...\n• Binary (Base 2): Digits 0 & 1, weights 2⁰, 2¹... Example: 101101₂ = 32 + 8 + 4 + 1 = 45₁₀.\n• Octal (Base 8): Digits 0–7, grouped in 3-bit chunks.\n• Hexadecimal (Base 16): Digits 0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15). Grouped in 4-bit chunks. Example: 2F₁₆ = 2×16 + 15 = 47₁₀."
          },
          {
            title: "Conversions & Binary Fractions",
            content: "• Decimal to Binary: Repeated division by 2, collect remainders bottom-up (e.g. 175₁₀ = 10101111₂).\n• Binary Fractions: Repeated multiplication by 2. E.g., 57.625₁₀: 57 = 111001₂, 0.625 × 2 = 1.25 (1), 0.25 × 2 = 0.5 (0), 0.5 × 2 = 1.0 (1) → 111001.101₂."
          },
          {
            title: "Complements & Subtraction",
            content: "• 1's Complement: Invert all bits (10110010 → 01001101).\n• 2's Complement: Invert bits and add 1 (01001101 + 1 = 01001110).\n• Subtraction using 2's Complement: E.g., 0110 − 0011: 2's comp of 0011 is 1101. Add: 0110 + 1101 = 10011 (discard carry) = 0011₂ = 3₁₀."
          },
          {
            title: "Digital Codes",
            content: "• BCD (8421): Each decimal digit encoded into 4 bits (e.g. 59 → 0101 1001).\n• Excess-3: Add 3 to decimal digit, then convert to 4-bit binary (e.g. 7 + 3 = 10 → 1010).\n• Gray Code: Unweighted code where only one bit changes between adjacent values. Reduces transition errors in mechanical and optical encoders.\n• ASCII: 7-bit/8-bit code (e.g. 'A' = 65, 'B' = 66, '0' = 48, 'a' = 97)."
          }
        ],
        keyRules: [
          "Binary addition: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (0 carry 1), 1+1+1=11 (1 carry 1)",
          "To subtract A - B with 2's comp: Add A to (2's complement of B). Discard end-around carry for positive result.",
          "Gray code conversion: MSB remains same; each subsequent bit is XOR of adjacent binary bits."
        ]
      },
      {
        unitNumber: 2,
        title: "Logic Gates and Boolean Algebra",
        summary: "Fundamental logic gates (AND, OR, NOT), universal gates (NAND, NOR), special gates (XOR, XNOR), Boolean algebraic laws, and De Morgan's theorems.",
        sections: [
          {
            title: "Basic & Universal Gates",
            content: "• AND: Y = A·B (1 only when all inputs are 1)\n• OR: Y = A + B (1 if any input is 1)\n• NOT: Y = A' (Inverter)\n• NAND: Y = (AB)' (Universal gate)\n• NOR: Y = (A+B)' (Universal gate)\n• XOR: Y = A ⊕ B = A'B + AB' (1 when inputs differ - used in adders & parity generators)"
          },
          {
            title: "Boolean Algebra Laws",
            content: "• Identity: A + 0 = A, A·1 = A\n• Null/Annulment: A + 1 = 1, A·0 = 0\n• Idempotent: A + A = A, AA = A\n• Complement: A + A' = 1, AA' = 0\n• Commutative: A + B = B + A, AB = BA\n• Associative: (A+B)+C = A+(B+C), (AB)C = A(BC)\n• Distributive: A(B+C) = AB + AC, A + BC = (A+B)(A+C)"
          },
          {
            title: "De Morgan's Theorems",
            content: "1. (A + B)' = A' · B' (Complement of sum equals product of complements)\n2. (AB)' = A' + B' (Complement of product equals sum of complements)\nExam Shortcut: 'Break the bar and change the operator!'"
          }
        ],
        keyRules: [
          "Universal Gates: Any Boolean function can be implemented using NAND gates only or NOR gates only.",
          "Absorption Law: A + AB = A; A + A'B = A + B."
        ]
      },
      {
        unitNumber: 3,
        title: "Boolean Simplification Using K-Maps",
        summary: "Karnaugh Maps (K-Maps) graphical method for minimizing SOP and POS expressions, powers-of-two groupings, wrap-around rules, and don't-care conditions.",
        sections: [
          {
            title: "Purpose & Rules of K-Maps",
            content: "K-Maps systematically reduce logic gate count, propagation delay, and hardware cost. Groupings must be powers of 2 (1, 2, 4, 8, 16). Groups must be rectangular/square, as large as possible, overlapping is encouraged, and wrap-around across borders is allowed."
          },
          {
            title: "Worked Example",
            content: "Given F(A,B,C) = Σm(0,1,4,5). Cells (0,1,4,5) form a group of 4: minterms m0(000), m1(001), m4(100), m5(101). In this quad, A and C change, while B is consistently 0. Hence F = B'."
          }
        ],
        keyRules: [
          "Always look for octets (8) first, then quads (4), then pairs (2), then singletons.",
          "Wrap-around: Top row connects to bottom row; leftmost column connects to rightmost column."
        ]
      },
      {
        unitNumber: 4,
        title: "Combinational Logic Circuits",
        summary: "Adders (Half & Full), Subtractors, Multiplexers (MUX as universal logic module), Decoders, Encoders, and BCD to 7-Segment display decoder table.",
        sections: [
          {
            title: "Half & Full Adders / Subtractors",
            content: "• Half Adder: Sum = A ⊕ B, Carry = AB\n• Full Adder: Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B) = AB + ACin + BCin\n• Half Subtractor: Diff = A ⊕ B, Borrow = A'B\n• Full Subtractor: Diff = A ⊕ B ⊕ Bin, Bout = A'B + A'Bin + BBin"
          },
          {
            title: "Multiplexers (Digital Selectors)",
            content: "A 2ⁿ:1 MUX has n select lines. E.g. 2:1 (1 select), 4:1 (2 selects), 8:1 (3 selects). Exam questions frequently require implementing Boolean functions with a MUX: tie minterms directly to inputs I₀...I₇ and select inputs to variables."
          },
          {
            title: "BCD to 7-Segment Decoder Table",
            content: "Digit 0 (0000): 1111110 (g off)\nDigit 1 (0001): 0110000 (b,c on)\nDigit 2 (0010): 1101101\nDigit 8 (1000): 1111111 (all segments on)\nDigit 9 (1001): 1111011"
          }
        ],
        keyRules: [
          "2 Half Adders + 1 OR gate = 1 Full Adder.",
          "Decoder with n inputs has 2ⁿ active outputs. Common exam question: 3-to-8 decoder with enable."
        ]
      },
      {
        unitNumber: 5,
        title: "Sequential Logic: Flip-Flops, Counters & Registers",
        summary: "Latches vs Flip-flops, SR, JK, D, T Flip-flops, characteristic equations, race-around condition, synchronous vs asynchronous ripple counters, and SISO/SIPO/PISO/PIPO registers.",
        sections: [
          {
            title: "Latches vs Flip-Flops",
            content: "• Latch: Level-triggered; sensitive to inputs during entire pulse.\n• Flip-Flop: Edge-triggered (rising or falling clock edge); immune to middle glitches."
          },
          {
            title: "Flip-Flop Types & Characteristic Equations",
            content: "• SR Flip-Flop: S=0,R=0 (No change); S=0,R=1 (Reset 0); S=1,R=0 (Set 1); S=1,R=1 (Invalid/Forbidden)\n• JK Flip-Flop: Q⁺ = JQ' + K'Q (When J=1,K=1, output toggles. Eliminates invalid state!)\n• D Flip-Flop (Data): Q⁺ = D (Used in registers and pipeline memory)\n• T Flip-Flop (Toggle): Q⁺ = T ⊕ Q (Used in binary counters)"
          },
          {
            title: "Race-Around Condition & Solutions",
            content: "Occurs in level-triggered JK flip-flops when J=1, K=1 and clock pulse width tp > flip-flop propagation delay tpd. The output toggles uncontrollably. Solutions: (1) Edge triggering, (2) Master-Slave JK Flip-Flop."
          },
          {
            title: "Counters & Shift Registers",
            content: "• Asynchronous (Ripple): Flip-flop output clocks the next stage. Simple but cumulative propagation delays.\n• Synchronous: All flip-flops clocked simultaneously by common clock. High speed.\n• Flip-Flop count formula: 2ⁿ ≥ N (e.g. MOD-16 needs n=4 flip-flops).\n• Registers: SISO (Serial In Serial Out), SIPO, PISO, PIPO, and Universal Shift Register."
          }
        ],
        keyRules: [
          "Number of flip-flops required for MOD-N: n = ⌈log₂(N)⌉.",
          "Master-Slave JK: Master active on clock HIGH, Slave copies Master on clock LOW."
        ]
      },
      {
        unitNumber: 6,
        title: "Memory Devices & Architecture",
        summary: "Memory hierarchy, SRAM vs DRAM, ROM families (PROM, EPROM, EEPROM, Flash), and computer storage interfaces.",
        sections: [
          {
            title: "Memory Hierarchy",
            content: "Registers (fastest, smallest, in CPU) → Cache (SRAM, L1/L2/L3) → Main Memory (DRAM) → Secondary Storage (SSD/HDD)."
          },
          {
            title: "SRAM vs DRAM",
            content: "• SRAM (Static RAM): Flip-flop based (6 transistors per cell), very fast, does NOT require periodic refresh, expensive, used for Cache.\n• DRAM (Dynamic RAM): Capacitor + transistor cell, stores charge, loses charge quickly so REQUIRES periodic refresh cycles, cheaper, high density, used for Main RAM."
          },
          {
            title: "ROM Types",
            content: "• PROM: Programmable once via blown fuses.\n• EPROM: Erased using UV light through quartz window.\n• EEPROM: Electrically Erasable Programmable ROM; altered in circuit byte-by-byte.\n• Flash Memory: High-density EEPROM erased in sector blocks; used in USB, SSDs, SD cards."
          }
        ],
        keyRules: [
          "RAM is volatile (loses data on power down); ROM is non-volatile.",
          "DRAM requires periodic refresh circuits because internal storage capacitors leak charge."
        ]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Number conversions (Dec/Bin/Hex/Fractions)",
        "2's complement subtraction & overflow",
        "Boolean laws & De Morgan's theorems",
        "K-Maps 3-variable & 4-variable simplification",
        "Half and Full Adder circuit derivations",
        "Multiplexer (MUX) logic function implementation",
        "JK Flip-Flop characteristic table & equation",
        "Synchronous vs Asynchronous Counter design"
      ],
      fourStar: [
        "SISO, SIPO, PISO, PIPO Shift Registers",
        "SRAM vs DRAM comparison",
        "BCD to 7-segment decoder table",
        "Gray code conversion and encoder use cases"
      ],
      threeStar: [
        "ASCII vs BCD vs Excess-3 codes",
        "ROM classifications: PROM, EPROM, EEPROM, Flash"
      ]
    },
    oneNightChecklist: [
      "Decimal, Binary, Octal, Hexadecimal conversions with fractions",
      "1's and 2's complement subtraction with overflow check",
      "Truth tables of basic (AND/OR/NOT) and universal gates (NAND/NOR)",
      "De Morgan's theorem derivations and bubble logic",
      "K-Map grouping: Quads, Octets, and wrap-around corners",
      "Half Adder and Full Adder equations (Sum & Cout)",
      "8:1 and 4:1 Multiplexer implementation of minterms",
      "SR, JK, D, and T flip-flop truth tables and characteristic equations",
      "Race-around condition definition and Master-Slave solution",
      "MOD-N counter flip-flop formula: n = ⌈log₂N⌉",
      "SRAM vs DRAM key differences (Refresh, Speed, Complexity)"
    ]
  },

  {
    id: "math105",
    code: "MATH 105",
    title: "Linear Algebra",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Pure & Applied Mathematics",
    icon: "Grid3X3",
    themeColor: "indigo",
    rating: "★★★★★",
    objectives: [
      "Perform matrix operations and evaluate determinants",
      "Solve systems of linear equations via Gaussian elimination",
      "Understand vector spaces, subspaces, and linear independence",
      "Determine basis, dimension, rank, and nullity",
      "Analyze linear transformations, kernel, and range",
      "Compute eigenvalues, eigenvectors, and diagonalize matrices",
      "Apply linear algebra to Computer Science (Graphics, PageRank, Cryptography)"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Matrices and Determinants",
        summary: "Matrix definitions, row/column/diagonal/symmetric/skew-symmetric types, matrix arithmetic, transpose properties, 2×2 and 3×3 determinants by cofactor expansion, and matrix inverse via adjugate.",
        sections: [
          {
            title: "Matrix Types & Operations",
            content: "• Matrix Order: m × n (m rows, n columns).\n• Symmetric: A = Aᵀ; Skew-Symmetric: Aᵀ = -A.\n• Multiplication: AB defined only when columns of A = rows of B. (Row × Column dot product).\n• Properties: (AB)ᵀ = BᵀAᵀ; AI = IA = A."
          },
          {
            title: "Determinants (2×2 and 3×3)",
            content: "• 2×2: det([a, b; c, d]) = ad - bc.\n• 3×3 Cofactor Expansion: |A| = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃ where Cᵢⱼ = (-1)ⁱ⁺ʲ Mᵢⱼ.\n• Key Properties: det(AB) = det(A)det(B); det(Aᵀ) = det(A); det(kA) = kⁿ det(A) for n×n matrix; det(A⁻¹) = 1 / det(A)."
          },
          {
            title: "Matrix Inverse",
            content: "Inverse exists if and only if det(A) ≠ 0 (Non-singular matrix).\nFormula: A⁻¹ = (1 / det(A)) · Adj(A).\n2×2 Shortcut: Swap main diagonal entries, negate off-diagonal entries, divide by (ad - bc)."
          }
        ],
        keyRules: [
          "det(kA) = kⁿ det(A), NOT k det(A)!",
          "If any row or column is all zeros or a multiple of another, det(A) = 0."
        ]
      },
      {
        unitNumber: 2,
        title: "Systems of Linear Equations & Gaussian Elimination",
        summary: "Augmented matrices, elementary row operations (interchange, scaling, replacement), row echelon form (REF), reduced row echelon form (RREF), consistency, and homogeneous systems.",
        sections: [
          {
            title: "Gaussian Elimination Steps",
            content: "1. Construct augmented matrix [A | b].\n2. Use row replacement (Rᵢ → Rᵢ + kRⱼ), scaling (Rᵢ → cRᵢ), or interchange (Rᵢ ↔ Rⱼ) to get upper triangular Row Echelon Form.\n3. Identify pivots and free variables.\n4. Perform back-substitution to solve for variables."
          },
          {
            title: "Consistency Criteria",
            content: "• Unique Solution: Rank(A) = Rank([A|b]) = n (all columns have pivots).\n• Infinitely Many Solutions: Rank(A) = Rank([A|b]) < n (free variables exist).\n• Inconsistent (No Solution): Contradictory row [0 0 ... 0 | c] with c ≠ 0."
          },
          {
            title: "Homogeneous Systems (AX = 0)",
            content: "Always consistent! Always has at least the trivial solution X = 0. Has non-trivial solutions if and only if det(A) = 0 or Rank(A) < n."
          }
        ],
        keyRules: [
          "Never divide by a variable during row operations.",
          "Homogeneous systems never have 'no solution'; they have either 1 trivial solution or infinitely many."
        ]
      },
      {
        unitNumber: 3,
        title: "Vector Spaces, Subspaces, Basis & Dimension",
        summary: "Vector space axioms, 3-part subspace test, linear combinations, span, linear independence test, basis, dimension, and the Rank-Nullity Theorem.",
        sections: [
          {
            title: "Subspaces & 3-Step Test",
            content: "A subset W of vector space V is a subspace iff:\n1. The zero vector 0 ∈ W.\n2. W is closed under vector addition: u, v ∈ W ⇒ u + v ∈ W.\n3. W is closed under scalar multiplication: c ∈ F, u ∈ W ⇒ cu ∈ W."
          },
          {
            title: "Linear Independence & Basis",
            content: "• Linear Independence: c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 implies c₁ = c₂ = ... = cₙ = 0.\n• Basis: A set that is both linearly independent and spans V.\n• Dimension: Number of vectors in any basis of V. E.g. dim(ℝ³) = 3."
          },
          {
            title: "Rank-Nullity Theorem",
            content: "For an m × n matrix A representing a linear map:\nRank(A) + Nullity(A) = n (number of columns).\n• Rank = Number of pivot columns (dimension of Column Space / Range).\n• Nullity = Number of free variables (dimension of Null Space / Kernel)."
          }
        ],
        keyRules: [
          "Any set of k vectors in ℝⁿ with k > n is automatically linearly dependent.",
          "Rank(A) + Nullity(A) = number of COLUMNS, not rows!"
        ]
      },
      {
        unitNumber: 4,
        title: "Linear Transformations, Kernel & Range",
        summary: "Linear transformation definition, matrix representation T(x) = Ax, Kernel (Null space), Range (Column space), and the Dimension Theorem.",
        sections: [
          {
            title: "Definition & Linearity Tests",
            content: "A transformation T: V → W is linear if:\n1. T(u + v) = T(u) + T(v)\n2. T(cu) = c T(u)\nConsequently, T(0) must equal 0."
          },
          {
            title: "Kernel and Range",
            content: "• Kernel / Null Space: Ker(T) = {v ∈ V : T(v) = 0}. Subspace of domain V.\n• Range / Column Space: Range(T) = {w ∈ W : w = T(v) for some v ∈ V}. Subspace of codomain W.\n• Dimension Theorem: dim(Ker(T)) + dim(Range(T)) = dim(Domain V)."
          }
        ],
        keyRules: [
          "If T(0) ≠ 0, the transformation is NOT linear.",
          "T is one-to-one (injective) if and only if Ker(T) = {0} (Nullity = 0)."
        ]
      },
      {
        unitNumber: 5,
        title: "Eigenvalues, Eigenvectors & Diagonalization",
        summary: "Eigenvalue definition Av = λv, characteristic equation det(A - λI) = 0, trace and determinant shortcut for 2×2 matrices, finding eigenvectors, diagonalization A = PDP⁻¹, and Cayley-Hamilton theorem.",
        sections: [
          {
            title: "Characteristic Equation",
            content: "Av = λv ⇒ (A - λI)v = 0. For non-zero v, det(A - λI) = 0.\n2×2 Shortcut: λ² - Trace(A)λ + Det(A) = 0, where Trace(A) = a₁₁ + a₂₂."
          },
          {
            title: "Worked Example",
            content: "A = [4 1; 2 3]. Trace = 7, Det = 12 - 2 = 10.\nEquation: λ² - 7λ + 10 = 0 ⇒ (λ - 5)(λ - 2) = 0. Eigenvalues: λ₁ = 5, λ₂ = 2.\nFor λ = 5: (A - 5I)v = [-1 1; 2 -2][x; y] = [0; 0] ⇒ -x + y = 0 ⇒ v₁ = [1; 1]."
          },
          {
            title: "Diagonalization & Cayley-Hamilton",
            content: "• Diagonalization: A = PDP⁻¹ where P is matrix of independent eigenvectors, D is diagonal matrix of corresponding eigenvalues.\n• Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation! E.g. A² - 7A + 10I = 0. Used to calculate A⁻¹ and high matrix powers Aⁿ."
          }
        ],
        keyRules: [
          "Sum of eigenvalues = Trace(A). Product of eigenvalues = Det(A). (Always check your arithmetic with this!)",
          "An n×n matrix is diagonalizable if and only if it has n linearly independent eigenvectors."
        ]
      },
      {
        unitNumber: 6,
        title: "Applications of Linear Algebra to Computer Science",
        summary: "Transformations in 2D/3D Computer Graphics (Rotation, Scaling, Translation via homogeneous coordinates), Google PageRank, Data Science / PCA, and Cryptography (Hill cipher).",
        sections: [
          {
            title: "Key Applications",
            content: "• Computer Graphics: 2D/3D affine transformations (Rotation R(θ) = [cos θ -sin θ; sin θ cos θ], scaling, shearing).\n• Google PageRank: Dominant eigenvector of internet hyperlink transition matrix.\n• Machine Learning / PCA: Covariance matrix eigenvectors determine principal directions of maximum variance.\n• Cryptography: Hill Cipher uses modular matrix multiplication C ≡ KP (mod 26)."
          }
        ],
        keyRules: [
          "Rotation matrix det(R) = cos²θ + sin²θ = 1 (Orthogonal matrix).",
          "Homogeneous coordinates allow affine translations to be expressed as linear matrix multiplications."
        ]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Gaussian elimination and augmented matrix row reduction",
        "2×2 and 3×3 determinants and matrix inverses (Adjugate formula)",
        "Linear independence test using det(A) or echelon form",
        "Basis and dimension determination",
        "Rank-Nullity theorem problems",
        "Eigenvalues and eigenvectors step-by-step computation"
      ],
      fourStar: [
        "Matrix diagonalization A = PDP⁻¹",
        "Subspace verification 3-step test",
        "Kernel (Null space) and Range (Column space) basis finding"
      ],
      threeStar: [
        "Cayley-Hamilton theorem to find A⁻¹ or A⁴",
        "Graphics transformation matrices"
      ]
    },
    oneNightChecklist: [
      "Matrix multiplication condition and Row × Column rule",
      "det(kA) = kⁿ det(A) property",
      "2×2 shortcut inverse: swap diagonal, negate off-diagonal, divide by det",
      "Row operations: Rᵢ → Rᵢ + kRⱼ",
      "Rank-Nullity: Rank + Nullity = number of columns",
      "Subspace test: 0 vector, vector sum, scalar product",
      "Characteristic polynomial: λ² - Trace(A)λ + Det(A) = 0",
      "Eigenvalue check: Sum of λ = Trace, Product of λ = Det",
      "Solving (A - λI)v = 0 for eigenvector v",
      "Cayley-Hamilton: Replace λ with matrix A"
    ]
  },

  {
    id: "cspc",
    code: "CSPC",
    title: "Physics for Computing Systems",
    subtitle: "Complete Master Notes (Exam Edition)",
    category: "Physical Sciences",
    icon: "Zap",
    themeColor: "amber",
    rating: "★★★★★",
    objectives: [
      "Understand physical quantities and SI measurement units",
      "Apply mechanics, Newton's laws, and energy principles",
      "Analyze electrostatics, Coulomb's law, and electric potential",
      "Master Ohm's law, series/parallel DC circuits, and Kirchhoff's laws",
      "Understand passive and active electronic components (resistors, capacitors, diodes, transistors)",
      "Explain electromagnetism, Faraday's law, and transformers",
      "Study wave motion, electromagnetic spectrum, and wireless communication",
      "Understand semiconductor quantum physics, band theory, doping, and PN junctions"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Measurements and Physical Quantities",
        summary: "SI base units (m, kg, s, A, K, mol, cd), derived units, scientific notation, and metric prefixes used in computing hardware (pico, nano, micro, mega, giga, tera).",
        sections: [
          {
            title: "SI Units in Computing",
            content: "• Base Units: Metre (m), Kilogram (kg), Second (s), Ampere (A), Kelvin (K).\n• Derived Units: Velocity (m/s), Acceleration (m/s²), Force (Newton, N), Energy (Joule, J), Power (Watt, W), Frequency (Hertz, Hz).\n• Electronic Scale: Clock cycle time in picoseconds (10⁻¹² s), chip trace width in nanometers (10⁻⁹ m), capacitor in microfarads (10⁻⁶ F)."
          }
        ],
        keyRules: ["Always convert non-standard units (e.g. km/h or cm) to SI base units before substituting into equations."]
      },
      {
        unitNumber: 2,
        title: "Mechanics and Newton's Laws",
        summary: "Kinematics equations of motion, momentum, Newton's three laws, and friction in mechanical computing devices (cooling fans, hard disk drive spindles).",
        sections: [
          {
            title: "Equations of Motion",
            content: "1. v = u + at\n2. s = ut + ½at²\n3. v² = u² + 2as\nWhere u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement."
          },
          {
            title: "Newton's Laws of Motion",
            content: "• First Law (Inertia): A body remains at rest or uniform motion unless acted upon by a net external force.\n• Second Law: F = ma (Force = mass × acceleration). Momentum p = mv.\n• Third Law: For every action, there is an equal and opposite reaction."
          }
        ],
        keyRules: ["F = ma applies to hard drive read/write head actuators moving with high acceleration."]
      },
      {
        unitNumber: 3,
        title: "Work, Energy and Power",
        summary: "Work done W = F·d, kinetic energy KE = ½mv², potential energy PE = mgh, conservation of energy, mechanical power P = W/t, and electrical power P = VI = I²R = V²/R.",
        sections: [
          {
            title: "Work & Energy Formulas",
            content: "• Work: W = Fd cos θ (Unit: Joule = N·m).\n• Kinetic Energy: KE = ½mv².\n• Potential Energy: PE = mgh.\n• Conservation of Energy: Total energy of an isolated system remains constant."
          },
          {
            title: "Power Calculations in Computing",
            content: "Power is rate of energy transfer: P = W / t (Watts).\nElectrical Power: P = VI. Using Ohm's Law: P = I²R = V² / R.\nCritical for CPU Thermal Design Power (TDP) and heat dissipation."
          }
        ],
        keyRules: ["Heat dissipated in a resistor/processor core increases with the square of the current (I²R)."]
      },
      {
        unitNumber: 4,
        title: "Electrostatics & Capacitance",
        summary: "Electric charge Q, Coulomb's Law F = kQ₁Q₂/r², electric field E = F/Q, electric potential V = W/Q, capacitance Q = CV, and dielectric materials in DRAM.",
        sections: [
          {
            title: "Coulomb's Law & Field",
            content: "Electrostatic force between two point charges: F = (k · Q₁ · Q₂) / r², where k = 8.99 × 10⁹ N·m²/C².\nElectric Field: E = F / Q = kQ / r² (N/C or V/m).\nPotential Difference: V = W / Q (Volts)."
          },
          {
            title: "Capacitors in Hardware",
            content: "Stores electrical charge: Q = CV.\nParallel plate capacitor: C = (ε · A) / d.\nUsed in DRAM dynamic memory cells (storing 1 bit as charge) and power filtering/decoupling."
          }
        ],
        keyRules: ["Capacitor voltage cannot change instantaneously; current leads voltage by 90° in pure AC capacitors."]
      },
      {
        unitNumber: 5,
        title: "Current Electricity, Ohm's Law & Kirchhoff's Laws",
        summary: "Electric current I = Q/t, Ohm's Law V = IR, resistivity R = ρL/A, series & parallel resistor networks, Kirchhoff's Current Law (KCL) and Voltage Law (KVL).",
        sections: [
          {
            title: "Ohm's Law & Resistance",
            content: "• Current: I = Q / t (Ampere = C/s).\n• Ohm's Law: V = IR (At constant temperature).\n• Resistivity: R = ρ(L / A) where ρ = resistivity, L = wire length, A = cross-sectional area."
          },
          {
            title: "Series & Parallel Circuit Rules",
            content: "• Series: Current is identical through all components. Total Resistance R_T = R₁ + R₂ + R₃. Total Voltage V_T = V₁ + V₂ + V₃.\n• Parallel: Voltage is identical across all branches. 1/R_T = 1/R₁ + 1/R₂ + 1/R₃. Branch currents add: I_T = I₁ + I₂ + I₃."
          },
          {
            title: "Kirchhoff's Laws",
            content: "• KCL (Current Law): Sum of currents entering a junction = sum of currents leaving (∑I = 0). Based on conservation of charge.\n• KVL (Voltage Law): The algebraic sum of all voltages around any closed loop = 0 (∑V = 0). Based on conservation of energy."
          }
        ],
        keyRules: [
          "For two parallel resistors: R_eq = (R₁ · R₂) / (R₁ + R₂).",
          "KCL is based on conservation of charge; KVL is based on conservation of energy."
        ]
      },
      {
        unitNumber: 6,
        title: "Electronic Components & Semiconductor Physics",
        summary: "Resistors, capacitors, inductors (L), PN junction diodes, forward/reverse bias, LEDs, transistors (BJT NPN/PNP), semiconductor doping (N-type vs P-type), and band theory.",
        sections: [
          {
            title: "Passive Components",
            content: "• Resistor (Ω): Opposes current.\n• Capacitor (F): Stores electrostatic energy (E = ½CV²).\n• Inductor (H): Opposes changes in current; stores magnetic energy (E = ½LI²)."
          },
          {
            title: "Semiconductor Doping & PN Junction",
            content: "• Intrinsic: Pure silicon/germanium.\n• N-type: Doped with pentavalent atoms (P, As) → Majority carriers: Electrons.\n• P-type: Doped with trivalent atoms (B, Ga) → Majority carriers: Holes.\n• PN Junction: Forms depletion region. Forward bias narrows barrier (conducts ~0.7V for Si); reverse bias widens barrier (blocks current)."
          },
          {
            title: "Transistors as Switches",
            content: "Bipolar Junction Transistor (BJT) terminals: Emitter (E), Base (B), Collector (C).\nIn computing, transistors operate in Cutoff (OFF = Logic 0) and Saturation (ON = Logic 1) as ultra-fast electronic switches."
          }
        ],
        keyRules: ["Silicon diode barrier potential is approximately 0.7 V; Germanium is approximately 0.3 V."]
      },
      {
        unitNumber: 7,
        title: "Magnetism, Electromagnetism & Induction",
        summary: "Magnetic field B (Tesla), magnetic flux Φ = B·A, Faraday's Law of induction EMF = -N(dΦ/dt), Lenz's Law, step-up/step-down transformers, and magnetic recording on HDDs.",
        sections: [
          {
            title: "Electromagnetic Induction",
            content: "Faraday's Law: An EMF is induced in a coil whenever the magnetic flux linking it changes: EMF = -N(dΦ/dt).\nLenz's Law: The direction of induced current opposes the magnetic change that produced it (indicated by negative sign)."
          },
          {
            title: "Transformers & Hard Drives",
            content: "• Transformer Ratio: V_p / V_s = N_p / N_s = I_s / I_p.\n• Hard Drives: Read/write heads use electromagnetism to magnetize magnetic domains on spinning platters."
          }
        ],
        keyRules: ["Ideal transformer power: P_in = P_out ⇒ V_p · I_p = V_s · I_s."]
      },
      {
        unitNumber: 8,
        title: "Waves, Electromagnetic Spectrum & Communication",
        summary: "Wave equation v = fλ, transverse vs longitudinal waves, electromagnetic spectrum (Radio to Gamma), and wireless networks (Wi-Fi, Bluetooth, Satellite, 5G).",
        sections: [
          {
            title: "Wave Fundamentals & Spectrum",
            content: "Wave Speed Equation: v = f · λ (Speed = frequency × wavelength). In vacuum, EM waves travel at c ≈ 3 × 10⁸ m/s.\nSpectrum (Lowest to highest frequency):\nRadio → Microwave (Wi-Fi 2.4/5GHz) → Infrared (Fiber/Sensors) → Visible → Ultraviolet → X-rays → Gamma rays."
          }
        ],
        keyRules: ["Higher frequency = shorter wavelength = higher photon energy (E = hf)."]
      },
      {
        unitNumber: 9,
        title: "Modern Physics for Computing Systems",
        summary: "Atomic structure, Bohr model, Planck's quantum theory E = hf, photoelectric effect, energy bands (conduction band, valence band, band gap), and quantum computing qubits.",
        sections: [
          {
            title: "Band Gap & Quantum Principles",
            content: "• Conductors: Conduction and valence bands overlap (zero bandgap).\n• Insulators: Large forbidden energy band gap (> 5 eV).\n• Semiconductors: Small band gap (~1.1 eV for Si), easily bridged by thermal energy.\n• Photoelectric Effect: Emission of electrons when incident light frequency exceeds threshold frequency f₀."
          }
        ],
        keyRules: ["Silicon band gap is approximately 1.1 eV at room temperature."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Ohm's Law and series/parallel resistor circuit reductions",
        "Kirchhoff's Current Law (KCL) and Voltage Law (KVL) circuit analysis",
        "Electrical power calculations: P = VI = I²R = V²/R",
        "Semiconductor doping: N-type vs P-type majority carriers",
        "PN junction diode forward and reverse biasing",
        "Transistor operation as an amplifier and logic switch",
        "Capacitor charge and energy formulas: Q = CV, E = ½CV²",
        "Faraday's and Lenz's laws of electromagnetic induction"
      ],
      fourStar: [
        "Newton's three laws of motion and equations of motion",
        "Wave equation v = fλ and EM spectrum frequencies",
        "Energy band theory: Conductor vs Semiconductor vs Insulator"
      ],
      threeStar: [
        "Coulomb's Law electrostatic force calculations",
        "Transformer voltage and turns ratio"
      ]
    },
    oneNightChecklist: [
      "SI base units: metre, kilogram, second, ampere, kelvin",
      "Equations of motion: v=u+at, s=ut+½at², v²=u²+2as",
      "Work and Power formulas: W=Fd, P=W/t, P=VI=I²R",
      "Ohm's Law: V = IR and resistance formula R = ρL/A",
      "Series circuits: RT = R1 + R2; Parallel: 1/RT = 1/R1 + 1/R2",
      "KCL (junction ∑I=0) and KVL (loop ∑V=0)",
      "Capacitor equation Q = CV and energy E = ½CV²",
      "Intrinsic vs Extrinsic semiconductors (Pentavalent vs Trivalent doping)",
      "Faraday's Law: EMF = -N(dΦ/dt) and Lenz's Law definition",
      "Wave equation: v = fλ (c = 3 × 10⁸ m/s)",
      "Energy band gap comparisons (Conductor, Insulator, Semiconductor)"
    ]
  },

  {
    id: "cssd111",
    code: "CSSD 111",
    title: "Introduction to Computer Science",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Foundations of Computing",
    icon: "Monitor",
    themeColor: "sky",
    rating: "★★★★★",
    objectives: [
      "Understand computer science concepts and the IPO cycle",
      "Trace the history and five generations of computers",
      "Analyze computer hardware: CPU (ALU, CU, Registers), memory, and I/O",
      "Differentiate system, application, and utility software",
      "Master data representation: binary, octal, hexadecimal, and measurement units",
      "Understand operating systems functions and scheduling",
      "Explain computer networks (LAN, MAN, WAN), topology, and internet services",
      "Apply problem-solving steps, algorithms, and flowchart symbols",
      "Understand ethical issues, copyright, software piracy, and security threats"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Introduction to Computer Science & IPO Cycle",
        summary: "Definition of computer science, characteristics of computers (speed, accuracy, diligence, storage, versatility), and the Input-Processing-Output-Storage (IPOS) model.",
        sections: [
          {
            title: "The Computer & IPOS Cycle",
            content: "A computer is an electronic machine that accepts data (input), processes it according to stored instructions, produces information (output), and stores it for future retrieval.\nIPOS Cycle: INPUT → PROCESSING → OUTPUT → STORAGE."
          },
          {
            title: "Core Characteristics",
            content: "• Speed: Billions of operations per second (GHz, MIPS).\n• Accuracy: Flawless execution of logic (GIGO: Garbage In, Garbage Out).\n• Diligence: Free from fatigue, loss of concentration, or boredom.\n• Versatility: Multi-tasking from word processing to flight simulation."
          }
        ],
        keyRules: ["Data is raw unorganized facts; Information is processed, organized, and meaningful data."]
      },
      {
        unitNumber: 2,
        title: "History and Generations of Computers",
        summary: "Early counting devices (Abacus, Napier's bones, Slide Rule, Pascaline, Babbage's Analytical Engine, Ada Lovelace), and the 5 Computer Generations.",
        sections: [
          {
            title: "Pioneers of Computing",
            content: "• Blaise Pascal: Pascaline (1642) - first mechanical adding machine.\n• Charles Babbage: Analytical Engine - Father of Computer (concept of input, mill, store, output).\n• Ada Lovelace: First computer programmer (wrote algorithms for Babbage's engine)."
          },
          {
            title: "The Five Generations",
            content: "• 1st Gen (1940-1956): Vacuum Tubes. Huge, power-hungry, ENIAC, UNIVAC.\n• 2nd Gen (1956-1963): Transistors. Smaller, faster, FORTRAN/COBOL.\n• 3rd Gen (1964-1971): Integrated Circuits (ICs). Keyboards, monitors, OS.\n• 4th Gen (1971-Present): Microprocessors (VLSI/VLSIC). Personal computers, laptops.\n• 5th Gen (Present & Future): Artificial Intelligence, Machine Learning, Quantum Computing."
          }
        ],
        keyRules: ["Remember the chronological order: Vacuum tubes → Transistors → ICs → Microprocessors → AI."]
      },
      {
        unitNumber: 3,
        title: "Computer Hardware & CPU Architecture",
        summary: "Functional units: Input, CPU (ALU, Control Unit, Registers), Output, Primary Storage (RAM vs ROM), and Secondary Storage (HDD, SSD, Flash).",
        sections: [
          {
            title: "CPU Components",
            content: "• ALU (Arithmetic Logic Unit): Executes mathematical calculations (+, -, *, /) and logical comparisons (<, >, ==).\n• CU (Control Unit): Directs the flow of data, decodes instructions, coordinates all subsystems.\n• Registers: High-speed internal memory cells (Program Counter, Instruction Register, Accumulator)."
          },
          {
            title: "RAM vs ROM Comparison",
            content: "• RAM (Random Access Memory): Read/Write, temporary, volatile (wiped on reboot), holds running OS and apps.\n• ROM (Read Only Memory): Read-only, permanent, non-volatile, holds BIOS/UEFI bootstrap code."
          }
        ],
        keyRules: ["Registers are the fastest storage in the entire computer architecture."]
      },
      {
        unitNumber: 4,
        title: "Computer Software & Language Translators",
        summary: "System software (OS, device drivers), application software, utility tools, programming language generations, and translators: Compilers, Interpreters, Assemblers.",
        sections: [
          {
            title: "Software Classification",
            content: "• System Software: Manages hardware (Windows, Linux, macOS).\n• Application Software: Solves user problems (MS Word, Excel, Chrome).\n• Utility Software: Housekeeping and maintenance (Antivirus, Disk Defrag, WinRAR)."
          },
          {
            title: "Language Translators",
            content: "• Compiler: Translates whole source code at once into object code before execution (C, C++, Java). Fast runtime, produces standalone executable.\n• Interpreter: Translates line-by-line during runtime (Python, JavaScript). Slower execution, easier debugging.\n• Assembler: Translates mnemonic assembly language into machine code."
          }
        ],
        keyRules: ["A compiler generates machine code upfront; an interpreter translates and executes line by line."]
      },
      {
        unitNumber: 5,
        title: "Data Representation & Units of Measurement",
        summary: "Bits, nibbles, bytes, KB, MB, GB, TB, PB (powers of 1024), ASCII, Unicode, and numeric representations.",
        sections: [
          {
            title: "Measurement Scale",
            content: "• 1 Bit = 0 or 1\n• 1 Nibble = 4 bits\n• 1 Byte = 8 bits\n• 1 KB (Kilobyte) = 1,024 Bytes (2¹⁰)\n• 1 MB (Megabyte) = 1,024 KB (2²⁰)\n• 1 GB (Gigabyte) = 1,024 MB (2³⁰)\n• 1 TB (Terabyte) = 1,024 GB (2⁴⁰)"
          }
        ],
        keyRules: ["In computer architecture, 1 KB is 1024 bytes (2¹⁰), not 1000."]
      },
      {
        unitNumber: 6,
        title: "Operating Systems (OS)",
        summary: "OS definition, core functions (Processor management, Memory management, File management, Device management, Security), Single-user vs Multi-user, and Real-time OS (RTOS).",
        sections: [
          {
            title: "Core Functions of OS",
            content: "• Process Scheduling: Controls CPU allocation to active threads (Round Robin, FCFS).\n• Memory Management: Allocates RAM, handles virtual memory paging.\n• File System: Organizes files into directories/folders (NTFS, ext4).\n• Device Management: Uses device drivers to talk to hardware controllers."
          }
        ],
        keyRules: ["The OS is the intermediary interface between user applications and the physical computer hardware."]
      },
      {
        unitNumber: 7,
        title: "Computer Networks & The Internet",
        summary: "Network definitions, LAN, MAN, WAN, network hardware (Hub, Switch, Router, Modem), topologies (Star, Bus, Ring, Mesh), and World Wide Web (WWW) vs Internet.",
        sections: [
          {
            title: "Network Types & Devices",
            content: "• LAN: Local Area Network (single room/building/lab).\n• MAN: Metropolitan Area Network (city-wide).\n• WAN: Wide Area Network (cross-country/global, e.g. Internet).\n• Switch vs Hub: Hub broadcasts to all ports; Switch forwards packets only to destination MAC address.\n• Router: Routes packets across different IP networks."
          },
          {
            title: "Internet vs WWW",
            content: "• Internet: The massive physical network infrastructure of interconnected computers.\n• World Wide Web (WWW): An information service of multimedia hyperlinked web pages running on top of the Internet via HTTP."
          }
        ],
        keyRules: ["The Internet is the infrastructure; the World Wide Web is a service on top of the Internet."]
      },
      {
        unitNumber: 8,
        title: "Problem Solving, Algorithms & Flowcharts",
        summary: "5 problem-solving steps, algorithm definition & traits, standard flowchart symbols (terminal oval, process rectangle, I/O parallelogram, decision diamond), and pseudocode.",
        sections: [
          {
            title: "Problem Solving Methodology",
            content: "1. Define the problem\n2. Analyze requirements\n3. Design algorithm / flowchart\n4. Code implementation\n5. Test and debug\n6. Maintain and document"
          },
          {
            title: "Flowchart Standard Symbols",
            content: "• Oval / Rounded Rectangle: Start / End (Terminal)\n• Parallelogram: Input / Output\n• Rectangle: Process / Computation\n• Diamond: Decision / Branching (True/False)\n• Arrow: Flowline"
          }
        ],
        keyRules: ["Every algorithm must satisfy Finiteness: it must terminate after a finite sequence of steps."]
      },
      {
        unitNumber: 9,
        title: "Programming Fundamentals",
        summary: "Variables, constants, data types (Integer, Float, Character, String, Boolean), and control structures: Sequence, Selection (IF-ELSE), and Iteration (Loops).",
        sections: [
          {
            title: "Core Programming Structures",
            content: "• Sequence: Statements run top to bottom.\n• Selection: IF, IF-ELSE, SWITCH condition-based branching.\n• Iteration: FOR loops (known count), WHILE loops (pre-test condition), DO-WHILE / REPEAT-UNTIL (post-test condition)."
          }
        ],
        keyRules: ["Variable names cannot start with a digit and cannot contain spaces."]
      },
      {
        unitNumber: 10,
        title: "Computer Ethics and Security",
        summary: "Computer ethics, software piracy, intellectual property, malware types (Virus, Worm, Trojan, Ransomware, Phishing), and defense mechanisms (Firewalls, Antivirus, Strong passwords, Backups).",
        sections: [
          {
            title: "Security Threats & Defense",
            content: "• Virus: Malicious code that attaches to executable host files and requires user action to spread.\n• Worm: Self-replicating malware that spreads across networks automatically without host files.\n• Trojan Horse: Disguised as legitimate software to create backdoors.\n• Phishing: Fraudulent social engineering emails pretending to be banks/institutions.\n• Defenses: Next-gen firewalls, multi-factor authentication (MFA), regular offline backups, antivirus."
          }
        ],
        keyRules: ["A worm is self-replicating and propagates autonomously; a virus requires a host program."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Computer definitions & the IPOS cycle",
        "Generations of computers (Hardware technologies 1st to 5th)",
        "CPU components: ALU, CU, Registers",
        "RAM vs ROM differences and characteristics",
        "Operating system functions and responsibilities",
        "Compiler vs Interpreter vs Assembler",
        "Data measurement conversions (Bits to Terabytes)",
        "Standard Flowchart symbols and algorithm design"
      ],
      fourStar: [
        "LAN vs MAN vs WAN and network devices (Switch vs Router)",
        "Malware classifications: Virus vs Worm vs Trojan",
        "Programming control structures: Sequence, Selection, Iteration"
      ],
      threeStar: [
        "History pioneers: Babbage, Ada Lovelace, Pascal",
        "Computer ethics and software piracy"
      ]
    },
    oneNightChecklist: [
      "Definition of computer and IPOS cycle",
      "5 Generations: Vacuum tubes → Transistors → ICs → Microprocessors → AI",
      "Pioneers: Charles Babbage (Father) & Ada Lovelace (First programmer)",
      "CPU components: ALU, Control Unit, Registers",
      "RAM (volatile, read/write) vs ROM (non-volatile, read only)",
      "Compiler (whole program at once) vs Interpreter (line-by-line)",
      "1 Byte = 8 bits, 1 KB = 1024 Bytes",
      "OS functions: Process, Memory, File, and Device management",
      "LAN (Local), MAN (Metropolitan), WAN (Wide Area)",
      "Flowchart symbols: Oval (Start/End), Parallelogram (I/O), Rectangle (Process), Diamond (Decision)",
      "Malware: Virus (needs host) vs Worm (self-replicating) vs Trojan (disguised)"
    ]
  },

  {
    id: "cssd101",
    code: "CSSD 101",
    title: "Programming and Problem Solving",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Software Development",
    icon: "Code2",
    themeColor: "blue",
    rating: "★★★★★",
    objectives: [
      "Understand problem-solving techniques and PDLC stages",
      "Develop well-defined algorithms with step-by-step logic",
      "Design standard flowcharts and pseudocode",
      "Understand variables, constants, naming rules, and data types",
      "Use arithmetic, relational, and logical operators correctly",
      "Apply decision-making structures: IF, IF-ELSE, Nested IF",
      "Master looping structures: FOR, WHILE, REPEAT-UNTIL",
      "Design modular programs with functions and arrays",
      "Identify syntax, runtime, and logical errors through debugging"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Introduction to Problem Solving",
        summary: "Problem definition, 6 steps in systematic problem solving, and criteria for good computational solutions (correctness, efficiency, readability, maintainability).",
        sections: [
          {
            title: "Problem Solving Process",
            content: "1. Define the problem clearly.\n2. Analyze the input, output, and constraints.\n3. Design a modular solution (Algorithm / Flowchart).\n4. Test the design with dry runs and trace tables.\n5. Implement in code.\n6. Evaluate, document, and maintain."
          }
        ],
        keyRules: ["Never jump directly into coding before completing algorithm design and analysis!"]
      },
      {
        unitNumber: 2,
        title: "Algorithms & Flowcharts",
        summary: "Algorithm properties (Input, Output, Definiteness, Finiteness, Effectiveness), standard flowchart shapes, and common algorithms (Area of circle, Sum, Largest of two/three).",
        sections: [
          {
            title: "Properties of Algorithms",
            content: "• Definiteness: Each step must be clear and unambiguous.\n• Finiteness: Must terminate after a finite number of operations.\n• Effectiveness: Operations must be feasible and basic enough to be executed."
          },
          {
            title: "Flowchart Rules",
            content: "• Terminal: Oval\n• Input / Output: Parallelogram\n• Process: Rectangle\n• Decision: Diamond (Must have at least two labeled exit branches: Yes/No or True/False)"
          }
        ],
        keyRules: ["Decision diamonds must ALWAYS have clear conditional branch labels (e.g. Yes/No)."]
      },
      {
        unitNumber: 3,
        title: "Pseudocode & Programming Basics",
        summary: "Pseudocode syntax, High-level vs Low-level languages, compilers vs interpreters, variable declaration, identifier rules, and fundamental data types.",
        sections: [
          {
            title: "Pseudocode Conventions",
            content: "Use standardized structural keywords: BEGIN, END, INPUT, PRINT, IF-THEN-ELSE, FOR-TO, WHILE-ENDWHILE.\nLanguage-agnostic and human-readable."
          },
          {
            title: "Data Types & Identifier Rules",
            content: "• Integer: Whole numbers (10, -5).\n• Float / Real: Decimal numbers (3.14159).\n• Character: Single glyph ('A', '$').\n• String: Sequence of characters (\"Ghana\").\n• Boolean: TRUE or FALSE.\n• Identifier Rules: Must begin with letter/underscore, case-sensitive, no spaces, no reserved keywords."
          }
        ],
        keyRules: ["Float variables should not be tested for exact equality (==) due to precision rounding."]
      },
      {
        unitNumber: 4,
        title: "Operators & Expressions",
        summary: "Arithmetic operators (+, -, *, /, %), relational operators (==, !=, >, <, >=, <=), logical operators (AND, OR, NOT), and operator precedence rules.",
        sections: [
          {
            title: "Modulus Operator (%)",
            content: "Returns the integer remainder of division: 10 % 3 = 1; 15 % 4 = 3.\nCrucial for: Determining Even vs Odd (num % 2 == 0), checking divisibility, and extracting digits."
          },
          {
            title: "Operator Precedence",
            content: "1. Parentheses ()\n2. Unary NOT, ++\n3. Multiplicative: *, /, %\n4. Additive: +, -\n5. Relational: <, <=, >, >=\n6. Equality: ==, !=\n7. Logical AND (&&)\n8. Logical OR (||)"
          }
        ],
        keyRules: ["Logical AND has higher precedence than Logical OR: A || B && C is evaluated as A || (B && C)."]
      },
      {
        unitNumber: 5,
        title: "Decision Making & Control Structures",
        summary: "Simple IF, IF-ELSE, Nested IF, and Multi-way selection (SWITCH / CASE) with worked examples.",
        sections: [
          {
            title: "Decision Logic",
            content: "• Simple IF: Executes block only if condition evaluates to TRUE.\n• IF-ELSE: Executes block A if TRUE, block B if FALSE.\n• Nested IF: An IF block placed inside the body of another IF statement (e.g., checking Age ≥ 18 then checking Citizenship == TRUE)."
          }
        ],
        keyRules: ["Always pair nested IFs carefully with matching ELSE blocks to avoid 'dangling else' ambiguity."]
      },
      {
        unitNumber: 6,
        title: "Loops & Iteration",
        summary: "FOR loop (counter-controlled), WHILE loop (pre-test condition-controlled), REPEAT-UNTIL / DO-WHILE (post-test guarantee of at least one execution), and infinite loop pitfalls.",
        sections: [
          {
            title: "Loop Comparison Table",
            content: "• FOR: Best when exact iteration count is known in advance (e.g. FOR i = 1 TO 10).\n• WHILE: Pre-test loop; checks condition before executing body. If condition is false initially, body runs 0 times.\n• REPEAT-UNTIL / DO-WHILE: Post-test loop; checks condition after body executes. Guarantees at least 1 execution."
          }
        ],
        keyRules: ["A WHILE loop can execute 0 times; a REPEAT-UNTIL / DO-WHILE loop always executes at least 1 time."]
      },
      {
        unitNumber: 7,
        title: "Modular Programming: Functions & Arrays",
        summary: "Functions, parameters, return values, local vs global scope, array definition, 0-based indexing, array traversal, and linear search.",
        sections: [
          {
            title: "Functions & Scope",
            content: "Functions encapsulate reusable logic: FUNCTION Add(A, B) RETURN A + B.\n• Advantages: Code reusability, modular debugging, readable code structure.\n• Local Scope: Variables declared inside function exist only during execution.\n• Global Scope: Variables declared outside accessible everywhere."
          },
          {
            title: "Arrays",
            content: "An array is a contiguous memory collection of elements of the SAME data type.\nMarks[5] has indices 0 to 4. Marks[0] = 45, Marks[1] = 60, etc."
          }
        ],
        keyRules: ["Array index out of bounds is a common runtime error in languages like C/C++."]
      },
      {
        unitNumber: 8,
        title: "Debugging, Errors & Program Development Life Cycle",
        summary: "The 3 types of programming errors (Syntax, Runtime, Logical), trace tables, debugging strategies, and the 7 stages of the PDLC.",
        sections: [
          {
            title: "Types of Programming Errors",
            content: "• Syntax Error: Violates grammar/spelling rules of the language (e.g. missing semicolon, misspelled keyword). Caught by compiler/interpreter before execution.\n• Runtime Error: Code is syntactically valid but crashes during execution (e.g. Division by zero, file not found, memory overflow).\n• Logical Error: Program compiles and runs without crashing, but produces WRONG results (e.g. Average = A + B + C / 3 instead of (A + B + C) / 3)."
          },
          {
            title: "Program Development Life Cycle (PDLC)",
            content: "1. Problem Definition → 2. Analysis → 3. Design (Algorithms/Flowcharts) → 4. Coding → 5. Testing & Debugging → 6. Documentation → 7. Maintenance."
          }
        ],
        keyRules: ["Logical errors are the most difficult to detect because the computer issues no warning or error code."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Algorithm writing and Flowchart design (Area, Largest, Factorial, Odd/Even)",
        "Standard Flowchart symbols and connection rules",
        "Modulus operator arithmetic (num % 2 == 0)",
        "Comparison: FOR vs WHILE vs REPEAT-UNTIL loops",
        "Syntax vs Runtime vs Logical errors with examples",
        "Stages of the Program Development Life Cycle (PDLC)"
      ],
      fourStar: [
        "Functions: Parameter passing, return values, local vs global variables",
        "Single-dimensional Arrays and traversal algorithms",
        "Nested IF statements and switch-case logic"
      ],
      threeStar: [
        "Language translators: Compiler vs Interpreter",
        "Trace tables for dry running code loops"
      ]
    },
    oneNightChecklist: [
      "Problem-solving steps: Define, Analyze, Design, Test, Implement, Evaluate",
      "Algorithm characteristics: Finiteness, Definiteness, Input, Output, Effectiveness",
      "Flowchart symbols: Terminal (Oval), Input/Output (Parallelogram), Process (Rectangle), Decision (Diamond)",
      "Variable naming rules (Starts with letter/underscore, no spaces)",
      "Arithmetic operators including modulus (%) for remainder",
      "Relational: ==, !=, >, <, >=, <=",
      "Logical operators: AND (both true), OR (at least one), NOT (inversion)",
      "FOR (known iterations), WHILE (pre-test), REPEAT-UNTIL (post-test, runs at least once)",
      "Functions and return statements",
      "Arrays: contiguous elements of identical data type",
      "Error types: Syntax (grammar), Runtime (crash), Logical (wrong answer)",
      "PDLC stages: Definition, Analysis, Design, Coding, Testing, Documentation, Maintenance"
    ]
  },

  {
    id: "fren171",
    code: "FREN 171",
    title: "Basic French",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Languages & Humanities",
    icon: "Globe",
    themeColor: "rose",
    rating: "★★★★★",
    objectives: [
      "Master the French alphabet, accents, and pronunciation rules",
      "Use formal and informal greetings and courtesy expressions",
      "Introduce yourself: name, nationality, age, profession, and origin",
      "Count numbers from 0 to 100 in French",
      "Name days of the week, months, and tell time",
      "Master definite (le, la, l', les) and indefinite (un, une, des) articles",
      "Use subject pronouns and conjugate auxiliary verbs: ÊTRE and AVOIR",
      "Conjugate regular -ER first group verbs (PARLER, AIMER, HABITER)",
      "Form questions (Est-ce que, inversion, question words) and negations (ne...pas)",
      "Apply adjective gender and number agreements and expand everyday vocabulary"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Introduction to French: Alphabet & Accents",
        summary: "French language distribution, Francophone West Africa, French alphabet pronunciation, and the 5 accents (aigu é, grave è/à, circonflexe ê, cédille ç, tréma ë).",
        sections: [
          {
            title: "French Alphabet & Phonetics",
            content: "26 letters. Key pronunciations: A (ah), E (uh), G (zhay), H (ash - silent in French), I (ee), J (zhee), Q (kew), R (guttural air), U (oo with rounded lips), W (doo-bl-vay), Y (ee-grek), Z (zed)."
          },
          {
            title: "The Accents",
            content: "• Accent aigu (é): e.g., café, étudiant (produces closed 'ay' sound).\n• Accent grave (è, à, ù): e.g., père, mère, où, à (open 'eh' sound or distinguishes words: a vs à, ou vs où).\n• Accent circonflexe (â, ê, î, ô, û): e.g., fête, hôtel, forêt.\n• Cédille (ç): makes 'c' sound like 's' before a, o, u: e.g., français, garçon.\n• Tréma (ë, ï): separates two adjacent vowels: e.g., Noël, maïs."
          }
        ],
        keyRules: ["The letter 'h' is always silent in French: l'homme, l'hôpital."]
      },
      {
        unitNumber: 2,
        title: "Greetings, Courtesy & Self-Introduction",
        summary: "Formal vs informal greetings, asking and responding to well-being, introducing name, nationality, profession, and place of residence.",
        sections: [
          {
            title: "Greetings & Courtesy",
            content: "• Bonjour (Good morning / Hello) | Bonsoir (Good evening) | Bonne nuit (Good night).\n• Salut (Hi / Bye - informal between friends).\n• Comment ça va ? / Ça va ? → Ça va bien, merci.\n• S'il vous plaît (formal) / S'il te plaît (informal).\n• Merci beaucoup (Thank you very much) → De rien / Je vous en prie (You're welcome).\n• Au revoir (Goodbye) | À bientôt (See you soon)."
          },
          {
            title: "Self-Introduction Template",
            content: "• Name: Je m'appelle Paul / Moi, c'est Paul.\n• Asking name: Comment vous appelez-vous ? (formal) / Comment tu t'appelles ? (informal).\n• Nationality: Je suis ghanéen (male) / Je suis ghanéenne (female).\n• Profession: Je suis étudiant (male) / Je suis étudiante (female). (Note: No article before professions in French!)\n• Residence: J'habite à Accra, au Ghana."
          }
        ],
        keyRules: ["Do NOT say 'Je suis un étudiant'. Say 'Je suis étudiant(e)'."]
      },
      {
        unitNumber: 3,
        title: "Numbers 0 to 100, Calendar & Time",
        summary: "Numbers 0-20, tens (20-90), 100, days of the week, 12 months, asking the date, and telling time.",
        sections: [
          {
            title: "Numbers",
            content: "0: zéro, 1: un, 2: deux, 3: trois, 4: quatre, 5: cinq, 6: six, 7: sept, 8: huit, 9: neuf, 10: dix.\n11: onze, 12: douze, 13: treize, 14: quatorze, 15: quinze, 16: seize, 17: dix-sept, 18: dix-huit, 19: dix-neuf, 20: vingt.\n30: trente, 40: quarante, 50: cinquante, 60: soixante, 70: soixante-dix, 80: quatre-vingts, 90: quatre-vingt-dix, 100: cent."
          },
          {
            title: "Days, Months & Time",
            content: "• Days: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. (Days are NOT capitalized in French).\n• Months: janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.\n• Asking date: Quelle est la date aujourd'hui ? → Aujourd'hui, c'est le 6 octobre.\n• Telling time: Quelle heure est-il ? → Il est deux heures (It is 2:00); Il est trois heures et demie (3:30); Il est quatre heures moins le quart (3:45)."
          }
        ],
        keyRules: ["Days of the week and months of the year in French do NOT start with capital letters."]
      },
      {
        unitNumber: 4,
        title: "Articles, Pronouns & Auxiliary Verbs (ÊTRE & AVOIR)",
        summary: "Definite and indefinite articles, subject pronouns, and complete present conjugation of ÊTRE (to be) and AVOIR (to have).",
        sections: [
          {
            title: "Articles & Subject Pronouns",
            content: "• Definite (The): le (masc), la (fem), l' (before vowel/silent h), les (plural).\n• Indefinite (A/An/Some): un (masc), une (fem), des (plural).\n• Subject Pronouns: Je (I), Tu (you informal), Il (he), Elle (she), Nous (we), Vous (you formal/plural), Ils (they masc/mixed), Elles (they fem)."
          },
          {
            title: "Conjugation of ÊTRE (To Be)",
            content: "Je suis (I am)\nTu es (You are)\nIl / Elle est (He / She is)\nNous sommes (We are)\nVous êtes (You are)\nIls / Elles sont (They are)"
          },
          {
            title: "Conjugation of AVOIR (To Have)",
            content: "J'ai (I have)\nTu as (You have)\nIl / Elle a (He / She has)\nNous avons (We have)\nVous avez (You have)\nIls / Elles ont (They have)"
          }
        ],
        keyRules: ["Age is expressed with AVOIR in French, NOT ÊTRE: J'ai 20 ans (NOT Je suis 20 ans)."]
      },
      {
        unitNumber: 5,
        title: "Regular -ER Verbs, Questions & Negation",
        summary: "First-group regular -ER verb conjugation pattern (PARLER, ÉTUDIER, AIMER, HABITER), 3 question-forming methods, and ne...pas negative structure.",
        sections: [
          {
            title: "Conjugation of PARLER (To Speak)",
            content: "Stem: parl- + Endings: -e, -es, -e, -ons, -ez, -ent.\nJe parle, Tu parles, Il/Elle parle, Nous parlons, Vous parlez, Ils/Elles parlent."
          },
          {
            title: "Question Formation",
            content: "1. Intonation: Tu parles français ?\n2. Est-ce que: Est-ce que tu parles français ?\n3. Inversion: Parles-tu français ? / Parlez-vous français ?\n• Question Words: Qui (Who), Que/Quoi (What), Où (Where), Quand (When), Pourquoi (Why), Comment (How), Combien (How much/many)."
          },
          {
            title: "Negation: Ne ... Pas",
            content: "Structure: Subject + ne + Verb + pas.\n• Je parle français → Je ne parle pas français.\n• Before vowel, 'ne' becomes 'n'': Il n'est pas ici; Je n'ai pas de livre."
          }
        ],
        keyRules: [
          "Before a vowel or silent h, 'ne' contracts to 'n'' (e.g. Je n'aime pas).",
          "In negative sentences, un/une/des become 'de' or 'd'': J'ai un stylo → Je n'ai pas de stylo."
        ]
      },
      {
        unitNumber: 6,
        title: "Adjectives, Family & Everyday Vocabulary",
        summary: "Adjective agreement in gender and number, family member terms (père, mère, frère, sœur), school vocabulary, and market/shopping dialogue.",
        sections: [
          {
            title: "Adjective Agreements",
            content: "Adjectives agree with nouns in gender and number:\n• Masculine singular: un grand garçon, un petit livre.\n• Feminine singular (usually add -e): une grande fille, une petite table.\n• Plural (usually add -s): des grands garçons, des grandes filles.\n• Irregular pairs: beau / belle, vieux / vieille, nouveau / nouvelle."
          },
          {
            title: "Family & School Vocabulary",
            content: "• Family: père (father), mère (mother), parents, frère (brother), sœur (sister), fils (son), fille (daughter), oncle, tante, cousin(e).\n• School: école, université, professeur, étudiant, livre, cahier, stylo, classe.\n• Classroom phrases: Puis-je entrer ? (May I enter?); Répétez, s'il vous plaît (Please repeat); Je ne comprends pas (I do not understand)."
          }
        ],
        keyRules: ["Most French adjectives come AFTER the noun (e.g. un livre rouge), except common short ones (BANGS: Beauty, Age, Number, Goodness, Size)."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Self-introduction paragraph (Name, nationality, profession, age, residence)",
        "Present tense conjugation of ÊTRE and AVOIR",
        "Conjugation of regular -ER verbs (PARLER, AIMER, ÉTUDIER)",
        "Definite (le, la, l', les) and indefinite (un, une, des) articles",
        "Forming negative sentences with ne...pas and n'...pas",
        "Numbers 0 to 100 spelling and identification",
        "Days of the week and months of the year"
      ],
      fourStar: [
        "Question formation using 'Est-ce que' and question words (Où, Quand, Comment, Pourquoi)",
        "Adjective agreements (Masculine vs Feminine, Singular vs Plural)",
        "Family members vocabulary"
      ],
      threeStar: [
        "French accents and phonetic rules",
        "Telling time (heures, et demie, moins le quart)"
      ]
    },
    oneNightChecklist: [
      "Alphabet accents: é (aigu), è (grave), ê (circonflexe), ç (cédille)",
      "Greetings: Bonjour, Bonsoir, Bonne nuit, Salut, Au revoir",
      "Self-intro: Je m'appelle Kwame, Je suis ghanéen, J'ai 19 ans, J'habite à Accra",
      "Numbers 0-20 and tens: 10 dix, 20 vingt, 30 trente, 50 cinquante, 70 soixante-dix, 80 quatre-vingts",
      "Days: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche",
      "Months: janvier to décembre (no capital letters)",
      "Definite: le, la, l', les | Indefinite: un, une, des",
      "Conjugation of ÊTRE: suis, es, est, sommes, êtes, sont",
      "Conjugation of AVOIR: ai, as, a, avons, avez, ont",
      "Conjugation of PARLER: parle, parles, parle, parlons, parlez, parlent",
      "Negation: Ne + verb + pas (Je ne parle pas)",
      "Age uses AVOIR: J'ai 20 ans",
      "Question words: Qui, Que, Où, Quand, Pourquoi, Comment, Combien"
    ]
  },

  {
    id: "ctge121",
    code: "CTGE 121",
    title: "Introduction to Electronics",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Hardware & Circuits",
    icon: "Activity",
    themeColor: "teal",
    rating: "★★★★★",
    objectives: [
      "Understand atomic structure, energy bands, and semiconductors",
      "Differentiate intrinsic and extrinsic (N-type, P-type) semiconductors",
      "Analyze passive components: Resistor colour coding, capacitors, and inductors",
      "Apply Ohm's law, series/parallel circuit reduction, and Kirchhoff's laws (KCL, KVL)",
      "Understand PN junction diode characteristics, forward/reverse bias, LEDs, and Zener diodes",
      "Design and analyze rectifiers: Half-wave, full-wave, bridge rectifiers, and filter stages",
      "Understand BJT transistor terminals, configurations, and operation as an amplifier and switch",
      "Appreciate integrated circuit (IC) fabrication and digital logic fundamentals"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Introduction & Semiconductor Physics",
        summary: "Electronics vs electricity, atomic structure, valence electrons, energy band gap, conductors, insulators, intrinsic semiconductors, doping, N-type (pentavalent) and P-type (trivalent) materials.",
        sections: [
          {
            title: "Electricity vs Electronics",
            content: "• Electricity: Deals with generation and transmission of electrical power at high currents/voltages.\n• Electronics: Deals with the control of electron flow in active devices and signal processing at lower currents."
          },
          {
            title: "Doping & Charge Carriers",
            content: "• Intrinsic: Pure silicon (4 valence electrons).\n• Doping: Adding impurity atoms to increase conductivity.\n• N-type: Doped with pentavalent atoms (Phosphorus, Arsenic). 5 valence electrons → 4 bond, 1 free electron. Majority carriers: Electrons; Minority: Holes.\n• P-type: Doped with trivalent atoms (Boron, Gallium). 3 valence electrons → 1 hole created. Majority carriers: Holes; Minority: Electrons."
          }
        ],
        keyRules: ["N-type semiconductor is NOT negatively charged overall; it remains electrically neutral because positive donor nuclei balance the free electrons."]
      },
      {
        unitNumber: 2,
        title: "Passive Components & Resistor Colour Coding",
        summary: "Resistors, colour code mnemonic (BBROYGBVGW), capacitors (Q = CV), dielectric constants, inductors (L), and energy storage.",
        sections: [
          {
            title: "Resistor Colour Code Mnemonic",
            content: "BBROYGBVGW (0 to 9):\nBlack (0), Brown (1), Red (2), Orange (3), Yellow (4), Green (5), Blue (6), Violet (7), Grey (8), White (9).\nTolerance bands: Gold (±5%), Silver (±10%), None (±20%).\nFormula: Value = (Band 1 × 10 + Band 2) × 10^(Band 3) Ω ± Tolerance."
          },
          {
            title: "Capacitors & Inductors",
            content: "• Capacitor: Stores charge Q = CV in an electric field between plates separated by dielectric.\n• Inductor: Stores energy E = ½LI² in a magnetic field when current passes through coil windings."
          }
        ],
        keyRules: ["'Black Brown ROY of Great Britain had a Very Good Wife' (0 to 9)."]
      },
      {
        unitNumber: 3,
        title: "Circuit Analysis: Ohm's & Kirchhoff's Laws",
        summary: "Ohm's Law V = IR, electrical power P = VI, series equivalent resistance, parallel equivalent resistance, Kirchhoff's Current Law (KCL), and Kirchhoff's Voltage Law (KVL).",
        sections: [
          {
            title: "Ohm's Law & Power",
            content: "• V = IR | I = V / R | R = V / I\n• Power: P = VI = I²R = V² / R (Unit: Watts).\n• Series Resistance: R_T = R₁ + R₂ + R₃ (Current is constant).\n• Parallel Resistance: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃ (Voltage is constant across branches)."
          },
          {
            title: "Kirchhoff's Laws",
            content: "• KCL (Junction rule): ∑I_in = ∑I_out. (Conservation of charge).\n• KVL (Loop rule): Algebraic sum of potential differences around any closed circuit loop is zero: ∑V = 0. (Conservation of energy)."
          }
        ],
        keyRules: ["In a parallel branch, the branch with lower resistance draws more current."]
      },
      {
        unitNumber: 4,
        title: "Semiconductor Diodes & Special Diodes",
        summary: "PN junction formation, depletion region, barrier potential (0.7V Si, 0.3V Ge), forward vs reverse bias, I-V characteristics curve, Light Emitting Diodes (LED), and Zener diodes for voltage regulation.",
        sections: [
          {
            title: "PN Junction & Biasing",
            content: "• Forward Bias: Positive terminal to P-side (anode), negative to N-side (cathode). Overcomes barrier potential (> 0.7V for Si) and conducts heavily.\n• Reverse Bias: Positive to N-side, negative to P-side. Depletion layer widens, only tiny reverse leakage current flows until breakdown voltage."
          },
          {
            title: "LED & Zener Diode",
            content: "• LED: Emits photons of light when electrons and holes recombine under forward bias.\n• Zener Diode: Designed to operate safely in the reverse breakdown region at a specified Zener voltage (Vz); widely used as a voltage regulator."
          }
        ],
        keyRules: ["A Zener diode is always connected in REVERSE bias when used as a voltage regulator."]
      },
      {
        unitNumber: 5,
        title: "Rectifiers, Filters & DC Power Supplies",
        summary: "Half-wave rectifier, full-wave centre-tapped rectifier, full-wave bridge rectifier, ripple factor, efficiency, capacitor filter smoothing, and 5 stages of a regulated DC power supply.",
        sections: [
          {
            title: "Rectifier Comparison",
            content: "• Half-Wave: 1 diode. Conduction angle 180°. Low efficiency (40.6%), high ripple.\n• Full-Wave Bridge: 4 diodes. Conduction angle 360°. High efficiency (81.2%), smooth DC, no centre-tapped transformer needed."
          },
          {
            title: "Complete Regulated Power Supply Stages",
            content: "1. AC Mains (230V, 50Hz) →\n2. Step-down Transformer (lowers AC voltage) →\n3. Rectifier (converts AC to pulsating DC) →\n4. Capacitor Filter (removes AC ripple) →\n5. Voltage Regulator (IC 7805 produces stable DC output)."
          }
        ],
        keyRules: ["Bridge rectifier requires 4 diodes and has an efficiency of 81.2%."]
      },
      {
        unitNumber: 6,
        title: "Bipolar Junction Transistors (BJTs)",
        summary: "NPN vs PNP construction, terminals (Emitter, Base, Collector), transistor currents I_E = I_B + I_C, current gain β = I_C / I_B, operating regions (Cutoff, Active, Saturation), and switching applications in digital logic.",
        sections: [
          {
            title: "BJT Terminals & Currents",
            content: "• Terminals: Emitter (heavily doped, emits carriers), Base (very thin and lightly doped, control terminal), Collector (moderately doped, largest physical area to dissipate heat).\n• Current Equation: I_E = I_B + I_C.\n• Current Gain: β = I_C / I_B (typically 50 to 300)."
          },
          {
            title: "Transistor as a Switch",
            content: "• Cutoff: I_B = 0, I_C = 0. Transistor acts as an OPEN switch (Output is HIGH = Logic 1).\n• Saturation: Base fully driven, V_CE ≈ 0.2V. Transistor acts as a CLOSED switch (Output is LOW = Logic 0)."
          }
        ],
        keyRules: ["The emitter current is the largest current: I_E = I_B + I_C."]
      },
      {
        unitNumber: 7,
        title: "Integrated Circuits & Electronics in Computing",
        summary: "IC definition, SSI, MSI, LSI, VLSI, ULSI scales, analog vs digital ICs, microprocessor architecture, and motherboard subsystems.",
        sections: [
          {
            title: "Integrated Circuits (ICs)",
            content: "An IC is a complete electronic circuit consisting of millions of transistors, diodes, and resistors fabricated onto a single silicon chip.\nAdvantages: Extremely compact, highly reliable, low power consumption, high processing speed, low mass-production cost."
          }
        ],
        keyRules: ["Modern microprocessors contain billions of nanometer-scale MOSFET transistors."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Semiconductor doping: N-type vs P-type dopants and carriers",
        "Resistor colour code calculations with 4 bands",
        "Ohm's Law (V = IR) and circuit reduction (Series/Parallel)",
        "Kirchhoff's Current Law (KCL) and Voltage Law (KVL)",
        "PN junction diode forward and reverse characteristics",
        "Full-wave bridge rectifier circuit operation and efficiency",
        "Transistor terminals (E, B, C) and current relation I_E = I_B + I_C",
        "Transistor operating regions: Cutoff and Saturation as digital switch"
      ],
      fourStar: [
        "Zener diode voltage regulator operation",
        "DC Power supply block diagram stages",
        "Capacitor charge and filter smoothing"
      ],
      threeStar: [
        "Analog vs Digital signals",
        "IC classification: SSI, MSI, LSI, VLSI"
      ]
    },
    oneNightChecklist: [
      "Intrinsic (pure) vs Extrinsic (doped) semiconductors",
      "N-type (Pentavalent: P, As, electrons) vs P-type (Trivalent: B, Ga, holes)",
      "Resistor colour mnemonic: BBROYGBVGW (0 to 9) and Gold (±5%), Silver (±10%)",
      "Ohm's law: V=IR, P=VI=I²R",
      "Series: R_T = R1 + R2; Parallel: 1/R_T = 1/R1 + 1/R2",
      "KCL: ∑I = 0 at node; KVL: ∑V = 0 in loop",
      "Diode forward bias (Si barrier 0.7V) and reverse bias (leakage/breakdown)",
      "Bridge rectifier uses 4 diodes, 81.2% maximum efficiency",
      "Power supply stages: Transformer → Rectifier → Filter → Regulator",
      "Transistor formula: I_E = I_B + I_C and β = I_C / I_B",
      "Transistor as switch: Cutoff (OFF), Saturation (ON)"
    ]
  },

  {
    id: "engl171",
    code: "ENGL 171",
    title: "Communication Skills I",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Communication & Writing",
    icon: "FileText",
    themeColor: "purple",
    rating: "★★★★★",
    objectives: [
      "Understand the communication process and its 5 core elements",
      "Identify verbal, non-verbal, written, and visual communication forms",
      "Identify and overcome physical, language, psychological, and cultural barriers",
      "Master the 4 language skills: Listening, Speaking, Reading, and Writing",
      "Apply skimming, scanning, intensive, and extensive reading techniques",
      "Master sentence structures (simple, compound, complex) and all 8 parts of speech",
      "Apply subject-verb agreement and tense consistency rules",
      "Write coherent paragraphs with clear topic, supporting, and concluding sentences",
      "Structure narrative, descriptive, expository, and argumentative essays",
      "Draft formal letters, memoranda, executive reports, and professional CVs"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Introduction to Communication & The Process",
        summary: "Definition of communication, the 5 core elements (Sender, Message, Channel, Receiver, Feedback), and communication loop dynamics.",
        sections: [
          {
            title: "The Communication Process",
            content: "Communication is the dynamic two-way process of exchanging ideas, facts, feelings, and information.\nLinear vs Transactional model:\nSENDER (encodes message) → CHANNEL (medium) → RECEIVER (decodes message) → FEEDBACK (response to sender).\nFeedback is essential to verify that the message was understood as intended."
          }
        ],
        keyRules: ["Communication is incomplete without FEEDBACK."]
      },
      {
        unitNumber: 2,
        title: "Types & Channels of Communication",
        summary: "Verbal (oral conversations, interviews, speeches), Non-verbal (kinesics, facial expressions, eye contact, paralanguage, proxemics), Written (letters, reports), and Visual communication.",
        sections: [
          {
            title: "Communication Categories",
            content: "• Verbal: Communication via spoken words.\n• Non-Verbal: Body posture, gestures (kinesics), eye contact (oculesics), physical distance (proxemics), tone and pitch (paralanguage). Non-verbal signals frequently carry more weight than verbal cues.\n• Written: Formal documentation providing a verifiable record.\n• Visual: Diagrams, charts, flowcharts, graphical presentation slides."
          }
        ],
        keyRules: ["Non-verbal cues can reinforce, contradict, or substitute for verbal messages."]
      },
      {
        unitNumber: 3,
        title: "Barriers to Effective Communication",
        summary: "Physical/environmental barriers, linguistic/semantic barriers, psychological/emotional barriers, cultural barriers, and strategies to achieve clarity.",
        sections: [
          {
            title: "Types of Barriers",
            content: "• Physical: Noise, acoustic echo, distance, poor network connections.\n• Semantic / Linguistic: Jargon, ambiguous words, faulty translation, poor grammar.\n• Psychological: Prejudices, anger, stress, defensive attitudes, selective perception.\n• Cultural: Differences in etiquette, taboos, body language interpretations.\n• Overcoming Barriers: Active listening, audience analysis, simple concise wording, encouraging feedback."
          }
        ],
        keyRules: ["Semantic noise arises from using terminology or jargon unfamiliar to the receiver."]
      },
      {
        unitNumber: 4,
        title: "Receptive Skills: Listening & Reading",
        summary: "Active vs passive vs critical listening, reading strategies (Skimming for gist, Scanning for specific facts, Intensive study, Extensive reading).",
        sections: [
          {
            title: "Listening Skills",
            content: "Hearing is physiological (passive reception of sound); Listening is psychological (active cognitive interpretation).\n• Active Listening: Focused attention, taking notes, observing body language, withholding early judgment."
          },
          {
            title: "Reading Techniques",
            content: "• Skimming: Rapid reading of headings, topic sentences, and summaries to capture general gist.\n• Scanning: Rapid eye movement to locate specific items (dates, names, formulas, definitions).\n• Intensive Reading: In-depth analytical reading for complete comprehension.\n• Extensive Reading: Broad reading for pleasure and overall vocabulary development."
          }
        ],
        keyRules: ["Skimming is for the MAIN IDEA; Scanning is for SPECIFIC DATA."]
      },
      {
        unitNumber: 5,
        title: "Sentence Structure & Parts of Speech",
        summary: "Subject and predicate, sentence types (Simple, Compound, Complex, Compound-Complex), the 8 parts of speech, and subject-verb concord rules.",
        sections: [
          {
            title: "Sentence Types",
            content: "• Simple: One independent clause (e.g. Ama studies hard).\n• Compound: Two independent clauses joined by coordinating conjunction FANBOYS (For, And, Nor, But, Or, Yet, So).\n• Complex: One independent clause + at least one dependent clause introduced by subordinating conjunction (Because, Although, If, When)."
          },
          {
            title: "Subject-Verb Agreement (Concord)",
            content: "• Singular subject takes singular verb: The student writes well.\n• Plural subject takes plural verb: The students write well.\n• Intervening phrases do not alter subject: The box of apples is (not are) heavy.\n• Either/Neither with Or/Nor: Verb agrees with closer subject: Neither Kofi nor his brothers are coming."
          }
        ],
        keyRules: ["Singular indefinite pronouns (Everyone, Somebody, Each) always take singular verbs: Everyone has submitted."]
      },
      {
        unitNumber: 6,
        title: "Paragraph & Essay Writing",
        summary: "Paragraph architecture (Topic sentence, Supporting details, Concluding sentence), Unity and Coherence, Essay structure (Introduction with thesis statement, Body paragraphs, Conclusion), and 4 essay genres.",
        sections: [
          {
            title: "Paragraph Construction",
            content: "• Topic Sentence: Expresses the central controlling idea of the paragraph.\n• Supporting Sentences: Provide concrete evidence, statistics, examples, or explanations.\n• Concluding Sentence: Summarizes the point and provides a smooth transition.\n• Qualities: Unity (everything supports one idea), Coherence (logical flow using transitional linkers like however, therefore, in addition)."
          },
          {
            title: "Essay Structure & Types",
            content: "• Introduction: Hook, background context, and clear THESIS STATEMENT.\n• Body Paragraphs: Each addresses one distinct point supporting the thesis.\n• Conclusion: Restates thesis in fresh words, synthesizes main points, final thought.\n• Genres: Narrative (chronological story), Descriptive (sensory detail), Expository (informative explanation), Argumentative (persuasion backed by logical evidence)."
          }
        ],
        keyRules: ["A thesis statement belongs in the introductory paragraph and defines the scope of the whole essay."]
      },
      {
        unitNumber: 7,
        title: "Professional Correspondence: Letters, Reports & CVs",
        summary: "Formal business letter format (Sender address, date, receiver address, salutation, subject line, body, valediction, signature), formal reports, and Curriculum Vitae (CV) components.",
        sections: [
          {
            title: "Formal Letter Structure",
            content: "• Top-right / Top-left: Sender's address followed by Date.\n• Left: Recipient's designation, company name, address.\n• Salutation: 'Dear Sir,' or 'Dear Madam,' (or recipient's name if known).\n• Heading: Centered / underlined uppercase Subject Line (e.g., APPLICATION FOR EMPLOYMENT).\n• Body: 3 to 4 paragraphs (Purpose → Credentials & Details → Call to action).\n• Valediction: 'Yours faithfully' (if name unknown) or 'Yours sincerely' (if addressed to named person)."
          },
          {
            title: "Curriculum Vitae (CV) & Reports",
            content: "• CV Sections: Personal details, Career Objective / Profile, Education & Qualifications, Work Experience, Technical Skills, Referees.\n• Report Format: Title, Executive Summary, Introduction, Methodology, Findings, Recommendations, Conclusion."
          }
        ],
        keyRules: ["Use 'Yours faithfully' when opening with 'Dear Sir/Madam'; use 'Yours sincerely' when opening with a personal name (e.g. 'Dear Dr. Mensah')."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "The communication process diagram and elements (Sender, Channel, Receiver, Feedback)",
        "Barriers to communication (Physical, Semantic, Psychological, Cultural)",
        "Active listening vs passive hearing",
        "Reading techniques: Skimming vs Scanning vs Intensive",
        "Subject-verb agreement (Concord) rules and common errors",
        "Paragraph writing structure (Topic sentence, Supporting, Conclusion)",
        "Formal letter layout and conventions (Salutation vs Valediction rules)",
        "Curriculum Vitae (CV) and job application letter drafting"
      ],
      fourStar: [
        "Sentence classification: Simple, Compound, Complex",
        "Verbal vs Non-verbal communication types and kinesics",
        "Essay writing: Thesis statement formulation and 4 essay types"
      ],
      threeStar: [
        "Parts of speech identification in exam sentences",
        "Formal report structure and executive summary"
      ]
    },
    oneNightChecklist: [
      "5 Elements of communication: Sender, Message, Channel, Receiver, Feedback",
      "Hearing (passive sensory) vs Listening (active cognitive)",
      "Skimming (general gist) vs Scanning (specific facts)",
      "Sentence structures: Simple (1 clause), Compound (FANBOYS), Complex (subordinating)",
      "Subject-Verb Agreement: Everyone IS, Box of chocolates IS, Neither John nor his friends ARE",
      "Paragraph qualities: Unity, Coherence, Topic sentence",
      "Formal Letter: Dear Sir/Madam → Yours faithfully; Dear Mr. Kwame → Yours sincerely",
      "CV components: Personal info, Education, Experience, Skills, Referees",
      "Report structure: Title, Introduction, Findings, Recommendations, Conclusion"
    ]
  },

  {
    id: "math103",
    code: "MATH 103",
    title: "Discrete Mathematics for Computer Science",
    subtitle: "Complete Master Notes (Ghana University Exam Edition)",
    category: "Theoretical Computer Science",
    icon: "Binary",
    themeColor: "cyan",
    rating: "★★★★★",
    objectives: [
      "Construct truth tables and test propositions for tautology, contradiction, and contingency",
      "Apply rules of inference, logical equivalence, De Morgan's laws, and predicate quantifiers",
      "Execute proof methods: Direct proof, Contrapositive, Contradiction, and Mathematical Induction",
      "Perform set operations, power sets |P(A)| = 2ⁿ, and the Inclusion-Exclusion Principle",
      "Analyze binary relations: Reflexive, Symmetric, Antisymmetric, Transitive, and Equivalence classes",
      "Determine function types: Injective (one-to-one), Surjective (onto), Bijective, and Inverses",
      "Apply counting principles: Product rule, Permutations nPr, Combinations nCr, and Pigeonhole Principle",
      "Calculate classical, conditional, and Bayes' theorem probabilities for CS applications",
      "Solve recurrence relations, Fibonacci sequence, and recursive definitions",
      "Analyze graph theory: Handshaking theorem, trees, bipartite graphs, and BFS/DFS traversals"
    ],
    units: [
      {
        unitNumber: 1,
        title: "Propositional Logic, Predicates & Quantifiers",
        summary: "Propositions, logical connectives (¬, ∧, ∨, ⊕, →, ↔), truth tables, tautologies, contradictions, De Morgan's laws, rules of inference (Modus Ponens, Modus Tollens), universal (∀) and existential (∃) quantifiers.",
        sections: [
          {
            title: "Logical Connectives & Conditional",
            content: "• Negation (¬p): NOT\n• Conjunction (p ∧ q): AND (True only if both true)\n• Disjunction (p ∨ q): OR (False only if both false)\n• Exclusive OR (p ⊕ q): XOR (True when inputs differ)\n• Conditional (p → q): Implication. False ONLY when p is True and q is False. (Equivalence: p → q ≡ ¬p ∨ q)\n• Biconditional (p ↔ q): True when p and q have identical truth values."
          },
          {
            title: "Tautology, Contradiction & Rules of Inference",
            content: "• Tautology: Proposition that is always TRUE under all evaluations (e.g. p ∨ ¬p).\n• Contradiction: Proposition that is always FALSE under all evaluations (e.g. p ∧ ¬p).\n• Modus Ponens: If p → q is true, and p is true, then q is true.\n• Modus Tollens: If p → q is true, and ¬q is true, then ¬p is true."
          },
          {
            title: "Quantifiers",
            content: "• Universal (∀x P(x)): 'For all x, P(x) is true'. Negation: ¬(∀x P(x)) ≡ ∃x ¬P(x).\n• Existential (∃x P(x)): 'There exists an x such that P(x) is true'. Negation: ¬(∃x P(x)) ≡ ∀x ¬P(x)."
          }
        ],
        keyRules: [
          "p → q is FALSE only when p = True and q = False.",
          "Negation of 'All students passed' is 'At least one student did not pass'."
        ]
      },
      {
        unitNumber: 2,
        title: "Methods of Proof & Mathematical Induction",
        summary: "Direct proof, proof by contrapositive, proof by contradiction, principle of mathematical induction (Basis step + Inductive step), and divisibility proofs.",
        sections: [
          {
            title: "Proof Techniques",
            content: "• Direct Proof: Assume p is true; deduce logically that q must be true.\n• Proof by Contrapositive: Prove p → q by proving its contrapositive ¬q → ¬p.\n• Proof by Contradiction: Assume the negation of the theorem is true; deduce a logical impossibility (e.g. proving √2 is irrational)."
          },
          {
            title: "Principle of Mathematical Induction",
            content: "To prove P(n) is true for all integers n ≥ 1:\n1. Base Step: Show P(1) is true.\n2. Inductive Hypothesis: Assume P(k) is true for arbitrary integer k ≥ 1.\n3. Inductive Step: Prove that P(k + 1) must also be true under this assumption.\n4. Conclusion: By mathematical induction, P(n) holds for all n ≥ 1."
          }
        ],
        keyRules: ["In induction, always explicitly state your inductive hypothesis P(k) before substituting into P(k+1)."]
      },
      {
        unitNumber: 3,
        title: "Set Theory & Principle of Inclusion-Exclusion",
        summary: "Set notations, subsets, empty sets, power set formula |P(A)| = 2ⁿ, union, intersection, set difference, complement, Venn diagrams, and 2-set & 3-set Inclusion-Exclusion formulas.",
        sections: [
          {
            title: "Set Operations & Power Set",
            content: "• Power Set P(A): Set of all subsets of A. If |A| = n, then |P(A)| = 2ⁿ.\n• Union (A ∪ B): Elements in A or B or both.\n• Intersection (A ∩ B): Elements in both A and B.\n• Set Difference (A - B): Elements in A that are not in B.\n• Symmetric Difference (A ⊕ B): (A - B) ∪ (B - A)."
          },
          {
            title: "Principle of Inclusion-Exclusion",
            content: "• For 2 sets: |A ∪ B| = |A| + |B| - |A ∩ B|.\n• For 3 sets: |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|."
          }
        ],
        keyRules: ["If a set has n elements, its power set has 2ⁿ elements, and has 2ⁿ - 1 proper subsets."]
      },
      {
        unitNumber: 4,
        title: "Relations, Equivalence & Posets",
        summary: "Cartesian product A × B, binary relations, relation properties (Reflexive, Symmetric, Antisymmetric, Transitive), equivalence relations, equivalence classes, and partial orders (Posets & Hasse diagrams).",
        sections: [
          {
            title: "Relation Properties",
            content: "• Reflexive: (a, a) ∈ R for all a ∈ A.\n• Symmetric: If (a, b) ∈ R then (b, a) ∈ R.\n• Antisymmetric: If (a, b) ∈ R and (b, a) ∈ R, then a = b.\n• Transitive: If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R.\n• Equivalence Relation: A relation that is REFLEXIVE, SYMMETRIC, and TRANSITIVE.\n• Partial Order (Poset): A relation that is REFLEXIVE, ANTISYMMETRIC, and TRANSITIVE."
          }
        ],
        keyRules: ["Equality (=) is both an equivalence relation and a partial order."]
      },
      {
        unitNumber: 5,
        title: "Functions: Injective, Surjective & Bijective",
        summary: "Domain, codomain, range, injection (one-to-one), surjection (onto), bijection (invertible), function composition (g ∘ f), and finding inverse functions.",
        sections: [
          {
            title: "Function Classifications",
            content: "• Injective (One-to-One): f(a) = f(b) ⇒ a = b (No two domain elements share same output).\n• Surjective (Onto): Range = Codomain (Every element in codomain is mapped to).\n• Bijective: Both injective and surjective. Invertible (f⁻¹ exists)."
          },
          {
            title: "Worked Inverse Example",
            content: "Given f(x) = 2x + 1. Swap x and y: x = 2y + 1 ⇒ 2y = x - 1 ⇒ y = (x - 1) / 2. Therefore f⁻¹(x) = (x - 1) / 2."
          }
        ],
        keyRules: ["A function has an inverse if and only if it is BIJECTIVE."]
      },
      {
        unitNumber: 6,
        title: "Counting Principles, Permutations & Pigeonhole",
        summary: "Fundamental product and sum rules, factorials, permutations nPr, combinations nCr, and the Pigeonhole Principle with CS applications.",
        sections: [
          {
            title: "Counting Formulas",
            content: "• Product Rule: If task 1 has m choices and task 2 has n choices, total = m × n.\n• Permutations (Order matters): nPr = n! / (n - r)!.\n• Combinations (Order does NOT matter): nCr = n! / [r!(n - r)!].\n• Pigeonhole Principle: If k + 1 or more objects are placed into k boxes, at least one box must contain two or more objects."
          }
        ],
        keyRules: ["nCr = nC(n-r). E.g. 10C8 = 10C2 = (10 × 9) / 2 = 45."]
      },
      {
        unitNumber: 7,
        title: "Probability & Bayes' Theorem in Computing",
        summary: "Classical probability P(E) = n(E)/n(S), conditional probability P(A|B) = P(A∩B)/P(B), independent events P(A∩B) = P(A)P(B), and Bayes' Theorem in AI and spam filtering.",
        sections: [
          {
            title: "Bayes' Theorem Formula",
            content: "P(A|B) = [P(B|A) · P(A)] / P(B).\nAllows updating the probability of hypothesis A upon observing evidence B.\nKey CS applications: Naïve Bayes spam filtering, medical expert systems, machine learning classifiers."
          }
        ],
        keyRules: ["For mutually exclusive events: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)."]
      },
      {
        unitNumber: 8,
        title: "Recursion & Recurrence Relations",
        summary: "Recursive definitions (Factorial, Fibonacci), linear homogeneous recurrence relations with constant coefficients, characteristic roots, and closed-form solutions.",
        sections: [
          {
            title: "Recurrence Models",
            content: "• Factorial: n! = n × (n - 1)!, Base: 0! = 1.\n• Fibonacci: F(n) = F(n-1) + F(n-2), Base: F(0) = 0, F(1) = 1.\n• Linear Homogeneous Recurrence: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂. Characteristic equation: r² - c₁r - c₂ = 0."
          }
        ],
        keyRules: ["Divide-and-conquer algorithms (MergeSort) solve recurrences like T(n) = 2T(n/2) + O(n)."]
      },
      {
        unitNumber: 9,
        title: "Graph Theory, Trees & Traversal Algorithms",
        summary: "Graph definition G=(V,E), degree of vertices, Handshaking Theorem ∑deg(v) = 2|E|, complete graphs Kₙ, bipartite graphs, trees (|E| = |V| - 1), and BFS vs DFS graph traversals.",
        sections: [
          {
            title: "Handshaking Theorem & Trees",
            content: "• Handshaking Theorem: In any undirected graph, the sum of degrees of all vertices equals twice the number of edges: ∑ deg(v) = 2|E|. (Consequence: Number of vertices with odd degree is always even!)\n• Complete Graph Kₙ: Has n(n - 1) / 2 edges.\n• Tree: Connected undirected graph with NO cycles. For n vertices, a tree has exactly n - 1 edges."
          },
          {
            title: "Graph Traversal Algorithms",
            content: "• Breadth First Search (BFS): Explores neighbor by neighbor in concentric waves. Uses a QUEUE (FIFO). Finds shortest path in unweighted graphs.\n• Depth First Search (DFS): Explores as deep as possible along each branch before backtracking. Uses a STACK (LIFO) or recursion."
          }
        ],
        keyRules: ["BFS uses a QUEUE; DFS uses a STACK."]
      },
      {
        unitNumber: 10,
        title: "Boolean Algebra in Discrete Systems",
        summary: "Boolean lattice, Boolean identities, dual expressions, sum-of-products (SOP), and logic synthesis.",
        sections: [
          {
            title: "Boolean Duality & Minimization",
            content: "Principle of Duality: Any true Boolean identity remains true if AND and OR operators are interchanged, and 0 and 1 are interchanged.\nForms the theoretical bridge between propositional logic and computer CPU hardware architecture."
          }
        ],
        keyRules: ["Dual of A + 0 = A is A · 1 = A."]
      }
    ],
    hotTopics: {
      fiveStar: [
        "Truth table construction for logical equivalences (p → q ≡ ¬p ∨ q)",
        "Mathematical Induction proofs (Summation series & divisibility)",
        "Set operations and 2-set & 3-set Inclusion-Exclusion calculations",
        "Testing relations for Reflexive, Symmetric, and Transitive properties",
        "Function classification: Injective, Surjective, and finding f⁻¹(x)",
        "Permutations nPr vs Combinations nCr word problems",
        "Graph theory Handshaking Theorem: ∑deg(v) = 2|E|",
        "BFS (Queue) vs DFS (Stack) graph traversal trace"
      ],
      fourStar: [
        "Pigeonhole Principle applications",
        "Bayes' Theorem probability computations",
        "Properties of Trees (Edges = n - 1)",
        "Solving recurrence relations"
      ],
      threeStar: [
        "Negation of quantified statements: ¬(∀x P(x)) ≡ ∃x ¬P(x)",
        "Posets and Hasse diagrams"
      ]
    },
    oneNightChecklist: [
      "Truth tables: p → q is false ONLY when p is true and q is false",
      "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q",
      "Induction: 1. Base step P(1), 2. Inductive hypothesis P(k), 3. Prove P(k+1)",
      "Power set size = 2ⁿ; Proper subsets = 2ⁿ - 1",
      "Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|",
      "Equivalence relation: Reflexive + Symmetric + Transitive",
      "Bijective function: One-to-one + Onto (Invertible)",
      "Permutations (order matters) vs Combinations (order does not matter)",
      "Handshaking theorem: Sum of degrees = 2 × (number of edges)",
      "Tree with n vertices always has n - 1 edges",
      "BFS uses Queue; DFS uses Stack"
    ]
  }
];
