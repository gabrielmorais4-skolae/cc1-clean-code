const mappedNumerals = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

const roman = {
  romanToInt(numeral) {
    return mappedNumerals[numeral] || 0;
  },
};

module.exports = roman;
