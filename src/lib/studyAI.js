export const STOP_WORDS = new Set([
  'the','and','with','from','that','this','into','your','about','have','been','will','what','when','where','they','them','there','then','than','this','those','these','just','more','most','some','such','very','also','over','under','into','onto','after','before','during','without','across','among','through','while','could','would','should','must','need','only','been','were','was','are','is','it','its','their','his','her','our','you','we','i','me','my','mine','he','she','as','of','for','to','in','on','at','a','an','or','if','by','be','am','do','does','did','not','no','yes','can','cannot','can\'t','per','use','used','using','study','notes','course','unit','topic','concept','lecture','class','lesson','exam','review','chapter'
]);

const normalize = (text = '') => text.replace(/\s+/g, ' ').trim();

export function extractKeywords(text = '') {
  const cleaned = normalize(text).toLowerCase();
  if (!cleaned) return [];

  const matches = cleaned.match(/[a-z0-9][a-z0-9/._-]{2,}/g) || [];
  const words = matches.filter((word) => !STOP_WORDS.has(word) && word.length > 3);

  const counts = {};
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([word]) => word)
    .filter((word) => !/\d/.test(word));
}

export function findFormulas(text = '') {
  const matches = text.match(/[A-Za-z0-9_]+\s*=\s*[^\n]+/g) || [];
  return matches.slice(0, 5).map((entry) => entry.trim()).filter(Boolean);
}

export function buildStudyAnalysis(rawText = '', selectedCourse = 'general') {
  const text = normalize(rawText);
  if (!text) {
    return {
      summary: 'Paste your notes to generate an offline study summary.',
      topics: [],
      formulas: [],
      questions: [],
      cards: [],
    };
  }

  const keywords = extractKeywords(text);
  const formulas = findFormulas(text);
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);

  const topics = [...new Set(keywords.slice(0, 8))];
  const cards = topics.map((topic, idx) => ({
    id: `topic-${idx}`,
    title: topic.replace(/[-_]/g, ' '),
    type: formulas.length && idx % 3 === 0 ? 'formula' : 'concept',
    summary: `Focus on ${topic} as a core idea in ${selectedCourse}. Add examples, short explanations, and one practice question for quick revision.`
  }));

  const formulaCards = formulas.map((formula, idx) => ({
    id: `formula-${idx}`,
    title: `Formula ${idx + 1}`,
    type: 'formula',
    summary: formula
  }));

  const questionSeed = topics.length ? topics : ['core concept', 'main idea', 'exam strategy'];
  const questions = questionSeed.slice(0, 4).map((topic, idx) => ({
    id: `q-${idx}`,
    title: `Review question ${idx + 1}`,
    prompt: `Explain how ${topic} applies to ${selectedCourse} and provide one real-world or exam example.`,
    expected: 'Short answer with an example and a supporting idea.'
  }));

  const summary = [
    `Detected ${topics.length || 'a few'} key ideas from your notes.`,
    formulas.length ? `Found ${formulas.length} formula-like expressions to revisit.` : 'No formulas were detected in this note block.',
    `Recommended next step: review ${topics[0] || 'your core concepts'} first, then test yourself with the generated quiz prompts.`
  ].join(' ');

  return {
    summary,
    topics: topics.length ? topics : ['core concept', 'key example', 'exam application'],
    formulas,
    questions,
    cards: [...cards, ...formulaCards].slice(0, 8),
  };
}

export function saveStudySession(payload = {}) {
  if (typeof window === 'undefined') return payload;

  const key = 'unistudy-ai-session';
  const existing = JSON.parse(localStorage.getItem(key) || 'null') || [];
  const next = [payload, ...existing].slice(0, 10);
  localStorage.setItem(key, JSON.stringify(next));
  return next;
}

export function loadStudySessions() {
  if (typeof window === 'undefined') return [];

  try {
    return JSON.parse(localStorage.getItem('unistudy-ai-session') || '[]');
  } catch {
    return [];
  }
}
