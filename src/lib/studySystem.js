export function safeReadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function safeWriteJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export const defaultStudyState = {
  notes: `KCL: sum of currents entering a node equals sum leaving the node.\nOhm's Law: V = I * R\nEigenvalues: solve det(A - λI) = 0.\nA full adder has sum = A xor B xor Cin and carry = AB + Cin(A xor B).`,
  quizHistory: [],
  notesHistory: [],
  lastUpdated: null,
};

export function getStudyState() {
  return safeReadJSON('unistudy-study-state', defaultStudyState);
}

export function saveStudyState(nextState) {
  const saneState = {
    ...defaultStudyState,
    ...nextState,
    lastUpdated: new Date().toISOString(),
  };
  safeWriteJSON('unistudy-study-state', saneState);
  return saneState;
}

export function extractTopicCandidates(rawText = '') {
  const cleaned = (rawText || '').replace(/\s+/g, ' ').trim();
  if (!cleaned) return [];

  const stopWords = new Set([
    'the','and','with','from','that','this','into','your','about','have','been','will','what','when','where','they','them','there','then','than','those','these','just','more','most','some','such','very','also','over','under','after','before','during','without','across','among','through','while','could','would','should','must','need','only','were','was','are','is','it','its','their','his','her','our','you','we','i','me','my','mine','he','she','as','of','for','to','in','on','at','a','an','or','if','by','be','am','do','does','did','not','no','yes','can','cannot','using','study','notes','course','unit','topic','concept','lecture','class','lesson','exam','review','chapter','system','systems','data','result','results'
  ]);

  const matches = cleaned.toLowerCase().match(/[a-z0-9][a-z0-9/._-]{2,}/g) || [];
  const counts = {};

  for (const word of matches) {
    if (stopWords.has(word) || word.length <= 3 || /\d/.test(word)) continue;
    counts[word] = (counts[word] || 0) + 1;
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([topic]) => topic.replace(/[-_]/g, ' '));
}

export function extractFormulas(rawText = '') {
  const matches = (rawText || '').match(/[A-Za-z][A-Za-z0-9_]*\s*=\s*[^\n]+/g) || [];
  return matches.slice(0, 6).map((entry) => entry.trim()).filter(Boolean);
}

export function buildStudyDashboard(rawText = '', selectedCourse = 'General') {
  const topics = extractTopicCandidates(rawText);
  const formulas = extractFormulas(rawText);
  const state = getStudyState();
  const weakAreas = getWeakAreas(state.quizHistory, topics, selectedCourse);
  const nextReview = getSpacedReviewQueue(state, topics, selectedCourse);
  const recommendations = topics.length
    ? topics.slice(0, 3).map((topic, index) => ({
        id: `${topic}-${index}`,
        topic,
        reason: `Study ${topic} in ${selectedCourse} and connect it to at least one worked example.`
      }))
    : [{ id: 'empty', topic: 'Start with a topic summary', reason: 'Add notes to generate your first recommendation.' }];

  return {
    topics: topics.length ? topics : ['core concept', 'key formula', 'practice problem'],
    formulas,
    weakAreas,
    nextReview,
    recommendations,
    summary: formulas.length
      ? `Detected ${topics.length} focus areas and ${formulas.length} formula-driven ideas for ${selectedCourse}.`
      : `Detected ${topics.length} focus areas for ${selectedCourse}; add formulas or worked examples to improve the study plan.`
  };
}

export function recordQuizResult({ course = 'General', topic = 'general', correct = false, difficulty = 'medium' }) {
  const state = getStudyState();
  const next = {
    ...state,
    quizHistory: [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        course,
        topic,
        correct,
        difficulty,
        at: new Date().toISOString(),
      },
      ...state.quizHistory,
    ].slice(0, 50),
  };
  saveStudyState(next);
  return next;
}

export function getWeakAreas(history = [], topics = [], course = 'General') {
  if (!history.length) {
    return topics.slice(0, 3).map((topic, index) => ({
      topic,
      score: 60 - index * 8,
      label: 'Needs review',
    }));
  }

  const groups = {};
  for (const item of history) {
    if (!item.topic) continue;
    if (item.course && item.course !== course && course !== 'General') continue;
    const key = item.topic.toLowerCase();
    groups[key] = groups[key] || { correct: 0, total: 0 };
    groups[key].total += 1;
    groups[key].correct += item.correct ? 1 : 0;
  }

  return Object.entries(groups)
    .map(([topic, data]) => ({
      topic: topic.replace(/\s+/g, ' '),
      score: Math.max(20, Math.round((data.correct / data.total) * 100)),
      label: Math.round((data.correct / data.total) * 100) < 70 ? 'Weak' : 'Improving',
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 4);
}

export function getSpacedReviewQueue(state = defaultStudyState, topics = [], course = 'General') {
  const list = topics.length ? topics : ['core concept', 'formula', 'application'];
  const weakAreas = getWeakAreas(state.quizHistory || [], list, course);

  return list.map((topic, index) => {
    const historyMatch = weakAreas.find((item) => item.topic === topic.toLowerCase() || item.topic.includes(topic.toLowerCase()));
    const score = historyMatch ? historyMatch.score : 68 - index * 6;
    const days = Math.max(1, Math.round((100 - score) / 20));
    return {
      id: `${topic}-${index}`,
      topic,
      score,
      dueIn: `${days} day${days > 1 ? 's' : ''}`,
      priority: score < 70 ? 'high' : 'medium'
    };
  }).slice(0, 5);
}

export function generateQuizSet(rawText = '', selectedCourse = 'General', difficulty = 'medium') {
  const topics = extractTopicCandidates(rawText);
  if (!topics.length) {
    return [
      {
        id: 'default-1',
        type: 'mcq',
        question: 'Which study habit most improves retention before an exam?',
        options: ['Cramming for 10 hours', 'Short, spaced review with active recall', 'Reading once without notes', 'Skipping formulas'],
        answer: 'Short, spaced review with active recall',
        topic: 'study strategy',
      }
    ];
  }

  const starter = topics.slice(0, 4);
  const difficult = difficulty === 'hard' ? 'hard' : difficulty === 'easy' ? 'easy' : 'medium';

  return starter.map((topic, index) => {
    const base = {
      id: `quiz-${index + 1}`,
      topic,
      type: index % 2 === 0 ? 'mcq' : 'short-answer',
      question: `Explain the importance of ${topic} in ${selectedCourse} and provide one exam-focused example.`,
      options: [
        `Define ${topic} in plain language`,
        `Avoid ${topic} during revision`,
        `Memorize only the title of ${topic}`,
        `Ignore examples entirely`,
      ],
      answer: `A strong answer should define ${topic}, explain its role in ${selectedCourse}, and give one example or short application.`,
      difficulty: difficult,
    };

    if (base.type === 'mcq') {
      return {
        ...base,
        options: [
          `A concept used to explain a pattern in ${selectedCourse}`,
          `A random phrase with no academic meaning`,
          `Only a textbook title`,
          `A shortcut to skip studying`,
        ],
        answer: `A concept used to explain a pattern in ${selectedCourse}`,
      };
    }

    return base;
  });
}

export function exportStudyArchive(state = getStudyState(), course = 'General') {
  const payload = {
    exportedAt: new Date().toISOString(),
    course,
    notes: state.notes || '',
    quizHistory: state.quizHistory || [],
    dashboard: buildStudyDashboard(state.notes || '', course),
  };

  return JSON.stringify(payload, null, 2);
}

export function downloadStudyArchive(filename = 'unistudy-study-export.html', course = 'General') {
  const state = getStudyState();
  const payload = exportStudyArchive(state, course);
  const blob = new Blob([`<html><body><pre>${payload.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body></html>`], {
    type: 'text/html;charset=utf-8',
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
