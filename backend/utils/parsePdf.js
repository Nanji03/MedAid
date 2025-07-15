const pdfParse = require('pdf-parse');

module.exports = async function parsePdf(buffer) {
  const data = await pdfParse(buffer);
  const text = data.text;
  const parseTxt = require('./parseTxt');
  return parseTxt(text);
};
