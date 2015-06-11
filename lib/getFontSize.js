module.exports = function(height, width, font) {
  var max = height * 0.9; // max is 50% of height
  var min = height * 0.8; // min is 40% of height
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
