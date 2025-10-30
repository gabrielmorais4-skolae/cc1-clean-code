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

    for (let i = 0; i < numeral.length; i++) {
      const current = this.simpleNumeralToInt(numeral[i]);
      
      const next = this.simpleNumeralToInt(numeral[i + 1]);

      const resolvedValue = this.resolveNumeralPair(current, next);

      value += resolvedValue;

      if (current < next) {
        i++;
      }
    }

    console.log(value);

    return value;
  },
};

module.exports = roman;
