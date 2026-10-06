// High-yield practice quiz question bank for Ghana University Exam preparation

export const quizzesData = {
  csns141: [
    {
      id: "csns_q1",
      question: "Convert the decimal number 175₁₀ into its equivalent binary representation:",
      options: ["10101111₂", "11001101₂", "10110001₂", "10101101₂"],
      correctIndex: 0,
      explanation: "Using repeated division by 2: 175÷2=87 R1, 87÷2=43 R1, 43÷2=21 R1, 21÷2=10 R1, 10÷2=5 R0, 5÷2=2 R1, 2÷2=1 R0, 1÷2=0 R1. Reading remainders from bottom to top yields 10101111₂."
    },
    {
      id: "csns_q2",
      question: "What is the 2's complement of the binary number 10110010₂?",
      options: ["01001101₂", "01001110₂", "01001100₂", "10110011₂"],
      correctIndex: 1,
      explanation: "Step 1 (1's complement): Invert all bits → 01001101₂. Step 2: Add 1 → 01001101 + 1 = 01001110₂."
    },
    {
      id: "csns_q3",
      question: "Which of the following Boolean expressions represents De Morgan's theorem for NOR?",
      options: ["(A + B)' = A' · B'", "(AB)' = A' + B'", "A + A' = 1", "A(B + C) = AB + AC"],
      correctIndex: 0,
      explanation: "De Morgan's first theorem states that the complement of a sum is equal to the product of individual complements: (A + B)' = A' · B'."
    },
    {
      id: "csns_q4",
      question: "In a Full Adder, what are the logic equations for Sum and Carry-out (Cout)?",
      options: [
        "Sum = A ⊕ B, Cout = AB",
        "Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B)",
        "Sum = A + B + Cin, Cout = ABCin",
        "Sum = A'B + AB', Cout = A + B + Cin"
      ],
      correctIndex: 1,
      explanation: "A Full Adder accepts three 1-bit inputs (A, B, Cin). Sum = A ⊕ B ⊕ Cin, and Cout = AB + Cin(A ⊕ B) = AB + ACin + BCin."
    },
    {
      id: "csns_q5",
      question: "How many flip-flops are required to construct a MOD-16 synchronous counter?",
      options: ["2", "3", "4", "8"],
      correctIndex: 2,
      explanation: "Using the formula 2ⁿ ≥ N, for MOD-16 we have 2ⁿ ≥ 16, which gives n = 4 flip-flops."
    },
    {
      id: "csns_q6",
      question: "Why does Dynamic RAM (DRAM) require periodic refreshing while Static RAM (SRAM) does not?",
      options: [
        "DRAM uses bipolar transistors that heat up rapidly",
        "DRAM memory cells store charge in tiny capacitors that gradually leak charge",
        "SRAM uses optical flip-flops that never lose power",
        "DRAM is read-only and must be rewritten continuously"
      ],
      correctIndex: 1,
      explanation: "DRAM cells store bits as charge on microscopic capacitors. Due to parasitic leakage currents, capacitors lose their charge and must be read and rewritten (refreshed) every few milliseconds."
    }
  ],

  math105: [
    {
      id: "math105_q1",
      question: "Evaluate the determinant of the 2×2 matrix A = [2, 3; 4, 1]:",
      options: ["-10", "10", "-14", "14"],
      correctIndex: 0,
      explanation: "For a 2×2 matrix [a, b; c, d], det(A) = ad - bc = (2)(1) - (3)(4) = 2 - 12 = -10."
    },
    {
      id: "math105_q2",
      question: "If A is an n × n matrix and k is a scalar constant, what is det(kA)?",
      options: ["k · det(A)", "kⁿ · det(A)", "n · k · det(A)", "det(A) / k"],
      correctIndex: 1,
      explanation: "By the determinant scalar multiplication property, factoring k from each of the n rows gives det(kA) = kⁿ det(A)."
    },
    {
      id: "math105_q3",
      question: "According to the Rank-Nullity Theorem for an m × n matrix A:",
      options: [
        "Rank(A) + Nullity(A) = m (rows)",
        "Rank(A) + Nullity(A) = n (columns)",
        "Rank(A) - Nullity(A) = n",
        "Rank(A) × Nullity(A) = mn"
      ],
      correctIndex: 1,
      explanation: "The Rank-Nullity Theorem explicitly asserts that Rank(A) + Nullity(A) = n, where n is the number of columns (the dimension of the domain vector space)."
    },
    {
      id: "math105_q4",
      question: "Find the eigenvalues of the matrix A = [4, 1; 2, 3]:",
      options: ["λ = 1, 6", "λ = 5, 2", "λ = -5, -2", "λ = 3, 4"],
      correctIndex: 1,
      explanation: "Trace(A) = 4 + 3 = 7. Det(A) = (4)(3) - (1)(2) = 10. Characteristic equation: λ² - 7λ + 10 = 0 ⇒ (λ - 5)(λ - 2) = 0. Thus λ = 5 and λ = 2."
    },
    {
      id: "math105_q5",
      question: "A linear transformation T: V → W has Ker(T) = {0}. This implies that T is:",
      options: ["Onto (Surjective) only", "One-to-One (Injective)", "Not linear", "The zero transformation"],
      correctIndex: 1,
      explanation: "A linear map T is one-to-one (injective) if and only if its kernel contains only the trivial zero vector: Ker(T) = {0} (Nullity = 0)."
    }
  ],

  cspc: [
    {
      id: "cspc_q1",
      question: "A resistor of 4 Ω is connected across a 12 V power supply. What is the current flowing and the power dissipated?",
      options: [
        "Current = 3 A, Power = 36 W",
        "Current = 48 A, Power = 12 W",
        "Current = 0.33 A, Power = 4 W",
        "Current = 3 A, Power = 48 W"
      ],
      correctIndex: 0,
      explanation: "By Ohm's Law: I = V / R = 12 V / 4 Ω = 3 A. Power: P = V · I = 12 V × 3 A = 36 W (or P = I²R = 3² × 4 = 36 W)."
    },
    {
      id: "cspc_q2",
      question: "Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) are based on the conservation of which quantities, respectively?",
      options: [
        "Energy and Momentum",
        "Electric Charge and Energy",
        "Energy and Electric Charge",
        "Charge and Mass"
      ],
      correctIndex: 1,
      explanation: "KCL (∑I = 0 at any node) is founded on the Conservation of Charge. KVL (∑V = 0 in any closed loop) is founded on the Conservation of Energy."
    },
    {
      id: "cspc_q3",
      question: "In semiconductor physics, what are the majority charge carriers in an N-type semiconductor?",
      options: ["Holes", "Electrons", "Protons", "Photons"],
      correctIndex: 1,
      explanation: "N-type semiconductor is doped with pentavalent donor atoms (such as phosphorus) which donate extra conduction electrons, making electrons the majority carriers."
    },
    {
      id: "cspc_q4",
      question: "Lenz's Law in electromagnetic induction states that:",
      options: [
        "Induced voltage is always proportional to resistance",
        "Induced current always creates a magnetic field that opposes the change producing it",
        "Magnetic flux is independent of coil turns",
        "Electric current cannot generate magnetic fields"
      ],
      correctIndex: 1,
      explanation: "Lenz's Law states that the polarity of induced EMF is such that it produces a current whose magnetic field opposes the original change in magnetic flux (EMF = -N dΦ/dt)."
    }
  ],

  cssd111: [
    {
      id: "cssd111_q1",
      question: "Which electronic technology characterized Second Generation computers (1956–1963)?",
      options: ["Vacuum Tubes", "Transistors", "Integrated Circuits (ICs)", "Microprocessors"],
      correctIndex: 1,
      explanation: "1st Gen used Vacuum Tubes, 2nd Gen used Transistors, 3rd Gen used Integrated Circuits (ICs), and 4th Gen introduced Microprocessors."
    },
    {
      id: "cssd111_q2",
      question: "How many bytes are in 1 Kilobyte (KB) in computer memory architecture?",
      options: ["1000 Bytes", "1024 Bytes", "2048 Bytes", "8 Bytes"],
      correctIndex: 1,
      explanation: "In binary computing architecture, 1 Kilobyte (KB) is 2¹⁰ = 1,024 Bytes."
    },
    {
      id: "cssd111_q3",
      question: "What is the primary operational difference between a Compiler and an Interpreter?",
      options: [
        "A compiler executes code directly; an interpreter converts code to hardware",
        "A compiler translates the entire source program into machine code before execution; an interpreter translates and executes line-by-line",
        "An interpreter is only used for assembly code",
        "Compilers cannot catch syntax errors"
      ],
      correctIndex: 1,
      explanation: "Compilers convert the complete high-level program into machine code upfront producing an executable file. Interpreters translate and execute statements line by line at runtime."
    },
    {
      id: "cssd111_q4",
      question: "Which malware is distinguished by its ability to self-replicate and spread automatically across networks WITHOUT needing a host file?",
      options: ["Computer Virus", "Computer Worm", "Trojan Horse", "Spyware"],
      correctIndex: 1,
      explanation: "A Worm is standalone malware that self-replicates across networks without human intervention or host files. A Virus requires attaching to a host executable."
    }
  ],

  cssd101: [
    {
      id: "cssd101_q1",
      question: "In standard flowchart notation, which geometric symbol is used to represent a Decision / Branching condition?",
      options: ["Oval", "Rectangle", "Diamond", "Parallelogram"],
      correctIndex: 2,
      explanation: "Oval is Terminal (Start/End), Parallelogram is Input/Output, Rectangle is Process/Computation, and Diamond is Decision/Condition."
    },
    {
      id: "cssd101_q2",
      question: "What is the value of the integer expression: 17 % 4?",
      options: ["4", "1", "0.25", "4.25"],
      correctIndex: 1,
      explanation: "The modulus operator (%) computes the remainder of integer division. 17 divided by 4 is 4 with a remainder of 1 (17 = 4 × 4 + 1)."
    },
    {
      id: "cssd101_q3",
      question: "Which loop construct guarantees that its statement body will execute at least ONCE before evaluating the condition?",
      options: ["FOR loop", "WHILE loop", "REPEAT-UNTIL / DO-WHILE loop", "Nested IF"],
      correctIndex: 2,
      explanation: "REPEAT-UNTIL / DO-WHILE is a post-test loop: the condition is evaluated after the loop body executes, guaranteeing at least one execution."
    },
    {
      id: "cssd101_q4",
      question: "A student writes code to compute the average of 3 numbers as: Avg = A + B + C / 3. The program runs without crashing but gives an incorrect answer. What type of error is this?",
      options: ["Syntax error", "Runtime error", "Logical error", "Hardware error"],
      correctIndex: 2,
      explanation: "This is a Logical Error. Due to operator precedence, C is divided by 3 before adding A and B. The program is syntactically valid and executes, but produces mathematically erroneous results."
    }
  ],

  fren171: [
    {
      id: "fren171_q1",
      question: "How do you correctly state 'I am Ghanaian' for a female student in French?",
      options: [
        "Je suis ghanéen.",
        "Je suis ghanéenne.",
        "Je m'appelle Ghana.",
        "J'ai ghanéenne."
      ],
      correctIndex: 1,
      explanation: "The feminine form adds '-ne': 'Je suis ghanéenne.' (For male: 'Je suis ghanéen.'). Also note that nationality does not use an article here."
    },
    {
      id: "fren171_q2",
      question: "What is the correct present conjugation of the verb ÊTRE for 'Nous' (We)?",
      options: ["Nous avons", "Nous sommes", "Nous êtes", "Nous sont"],
      correctIndex: 1,
      explanation: "Conjugation of ÊTRE: Je suis, Tu es, Il/Elle est, Nous sommes, Vous êtes, Ils/Elles sont."
    },
    {
      id: "fren171_q3",
      question: "Translate into French: 'He does not speak French.'",
      options: [
        "Il ne parle pas français.",
        "Il pas parle français.",
        "Il n'a pas français.",
        "Il ne parlons pas français."
      ],
      correctIndex: 0,
      explanation: "Negative structure is Subject + ne + Verb + pas: 'Il ne parle pas français.'"
    },
    {
      id: "fren171_q4",
      question: "How do you ask 'What is today's date?' in French?",
      options: [
        "Quelle heure est-il ?",
        "Comment vous appelez-vous ?",
        "Quelle est la date aujourd'hui ?",
        "Où habitez-vous ?"
      ],
      correctIndex: 2,
      explanation: "'Quelle est la date aujourd'hui ?' means 'What is today's date?'. 'Quelle heure est-il ?' asks for the time."
    }
  ],

  ctge121: [
    {
      id: "ctge121_q1",
      question: "A 4-band resistor has bands in order: Red, Red, Orange, Gold. What is its nominal resistance and tolerance?",
      options: [
        "22 kΩ ± 5%",
        "2.2 kΩ ± 10%",
        "220 Ω ± 5%",
        "22 MΩ ± 20%"
      ],
      correctIndex: 0,
      explanation: "Red = 2, Red = 2, Orange = multiplier 10³ (1,000), Gold = ±5%. Calculation: 22 × 10³ Ω = 22,000 Ω = 22 kΩ ± 5%."
    },
    {
      id: "ctge121_q2",
      question: "What is the approximate barrier potential of a forward-biased Silicon PN junction diode at room temperature?",
      options: ["0.3 V", "0.7 V", "1.1 V", "5.0 V"],
      correctIndex: 1,
      explanation: "Silicon PN junctions have a barrier potential of ~0.7 V (Germanium is ~0.3 V)."
    },
    {
      id: "ctge121_q3",
      question: "How many diodes are used in a Full-Wave Bridge Rectifier circuit?",
      options: ["1", "2", "4", "6"],
      correctIndex: 2,
      explanation: "A bridge rectifier uses 4 diodes in a bridge diamond topology to provide full-wave rectification without needing a centre-tapped transformer."
    },
    {
      id: "ctge121_q4",
      question: "In a BJT transistor, what is the fundamental mathematical relationship between the terminal currents?",
      options: [
        "I_C = I_B + I_E",
        "I_E = I_B + I_C",
        "I_B = I_E + I_C",
        "I_E = I_B × I_C"
      ],
      correctIndex: 1,
      explanation: "The emitter current equals the sum of base current and collector current: I_E = I_B + I_C."
    }
  ],

  engl171: [
    {
      id: "engl171_q1",
      question: "In the formal communication process model, what element completes the feedback loop and confirms comprehension?",
      options: ["Channel", "Feedback", "Encoding", "Noise"],
      correctIndex: 1,
      explanation: "Feedback is the receiver's response communicated back to the sender, confirming whether the message was accurately received and interpreted."
    },
    {
      id: "engl171_q2",
      question: "Choose the sentence that demonstrates correct Subject-Verb Agreement (Concord):",
      options: [
        "The box of scientific textbooks are on the table.",
        "The box of scientific textbooks is on the table.",
        "Neither Kofi nor his brothers is present.",
        "Everyone have completed their assignment."
      ],
      correctIndex: 1,
      explanation: "'The box' is the singular head subject noun (not 'textbooks'); therefore it takes the singular verb 'is': 'The box of scientific textbooks is on the table.'"
    },
    {
      id: "engl171_q3",
      question: "When writing a formal business letter addressed to 'Dear Sir,' or 'Dear Madam,', what is the standard formal valediction (closing)?",
      options: ["Yours faithfully,", "Yours sincerely,", "Warm regards,", "Cheers,"],
      correctIndex: 0,
      explanation: "When you do not know the recipient's personal name and open with 'Dear Sir/Madam', British and Ghanaian formal convention requires closing with 'Yours faithfully,'. When addressing a named person (e.g. 'Dear Mr. Mensah'), use 'Yours sincerely,'."
    },
    {
      id: "engl171_q4",
      question: "What is the primary difference between Skimming and Scanning when reading academic texts?",
      options: [
        "Skimming is reading word-for-word; Scanning is reading only the title",
        "Skimming aims to capture the overall main idea/gist; Scanning searches rapidly for a specific piece of information",
        "Scanning is for literary novels; Skimming is for science books",
        "Both terms mean identical reading speeds"
      ],
      correctIndex: 1,
      explanation: "Skimming is fast reading to get the overall drift or gist. Scanning is searching for a particular piece of data like a date, number, or name."
    }
  ],

  math103: [
    {
      id: "math103_q1",
      question: "Under what specific condition is the conditional logical implication (p → q) FALSE?",
      options: [
        "When p is False and q is False",
        "When p is True and q is False",
        "When p is False and q is True",
        "p → q is never false"
      ],
      correctIndex: 1,
      explanation: "A conditional statement p → q is FALSE only in the single case where hypothesis p is True but conclusion q is False (T → F is F). In all other 3 truth cases, it evaluates to True."
    },
    {
      id: "math103_q2",
      question: "If a set S has 4 elements, how many subsets does its Power Set P(S) contain?",
      options: ["8", "16", "4", "32"],
      correctIndex: 1,
      explanation: "The cardinality of the power set is given by |P(S)| = 2ⁿ. For n = 4, |P(S)| = 2⁴ = 16 subsets."
    },
    {
      id: "math103_q3",
      question: "A relation R on a set A is defined as an Equivalence Relation if and only if it is:",
      options: [
        "Reflexive, Symmetric, and Transitive",
        "Reflexive, Antisymmetric, and Transitive",
        "Symmetric, Asymmetric, and Irreflexive",
        "Injective, Surjective, and Bijective"
      ],
      correctIndex: 0,
      explanation: "By mathematical definition, a binary relation is an Equivalence Relation if and only if it satisfies Reflexivity, Symmetry, and Transitivity. (Reflexive, Antisymmetric, and Transitive defines a Partial Order / Poset)."
    },
    {
      id: "math103_q4",
      question: "By the Handshaking Theorem in graph theory, what is the sum of degrees of all vertices in an undirected graph with 12 edges?",
      options: ["12", "24", "6", "48"],
      correctIndex: 1,
      explanation: "The Handshaking Theorem states: ∑ deg(v) = 2 · |E|. For |E| = 12 edges: Sum of degrees = 2 × 12 = 24."
    },
    {
      id: "math103_q5",
      question: "Which data structure is utilized by the Breadth First Search (BFS) graph traversal algorithm?",
      options: ["Stack (LIFO)", "Queue (FIFO)", "Priority Heap only", "Hash table"],
      correctIndex: 1,
      explanation: "BFS traverses vertices level-by-level in breadth order and uses a First-In-First-Out Queue. DFS uses a Last-In-First-Out Stack."
    }
  ]
};
