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
    if (numeral.length === 1) {
      return mappedNumerals[numeral] || 0;
    }
    
    let value = 0;

    for (let i = 0; i < numeral.length - 1; i++) {
      const current = mappedNumerals[numeral[i]];

      if (i === numeral.length - 1) {
        value += current;
        break;
      }

      const next = mappedNumerals[numeral[i + 1]];

      if (current < next) {
        value = this.romanToInt(numeral.slice(0, i)) +
               (next - current) +
               this.romanToInt(numeral.slice(i + 2));
      } else if (current >= next) {
        value += current;
      }
    }

    return value;
  },
};

module.exports = roman;
