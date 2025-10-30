const mappedNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const roman = {
  resolveNumeralPair(current, next) {
    if (current < next) {
      return next - current;
    } else {
      return current;
    }
  },

  simpleNumeralToInt(numeral) {
    return mappedNumerals[numeral] || 0;
  },

  romanToInt(numeral) {
    if (numeral.length === 1) {
      return this.simpleNumeralToInt(numeral);
    }

    let value = 0;

    for (let i = 0; i < numeral.length - 1; i++) {
      const current = this.simpleNumeralToInt(numeral[i]);

      if (i === numeral.length - 2) {
        const last = this.simpleNumeralToInt(numeral[i + 1]);
        value += this.resolveNumeralPair(current, last);
        break;
      }

      const next = this.simpleNumeralToInt(numeral[i + 1]);

      value += this.resolveNumeralPair(current, next);
    }

    return value;
  },
};

module.exports = roman;
