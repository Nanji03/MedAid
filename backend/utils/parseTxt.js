module.exports = function parseTxt(rawText) {
  const lines = rawText.split('\n');
  const flashcards = [];

  lines.forEach((line) => {
    if (line.includes(':')) {
      const [term, definition] = line.split(':');
      flashcards.push({
        frontText: term.trim(),
        backText: definition.trim(),
      });
    } else if (line.includes(' is ')) {
      const [term, ...rest] = line.split(' is ');
      flashcards.push({
        frontText: term.trim(),
        backText: rest.join(' is ').trim(),
      });
    } else if (line.endsWith('?')) {
      flashcards.push({ frontText: line.trim(), backText: '...' });
    }
  });

  return flashcards;
};
