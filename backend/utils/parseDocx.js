const mammoth = require('mammoth');

module.exports = async function parseDocx(buffer) {
  const { value: text } = await mammoth.convertToPlainText({ buffer });
  const parseTxt = require('./parseTxt');
  return parseTxt(text);
};
