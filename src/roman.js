const ROMAN_NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

class Roman {
  constructor() {
    this.numerals = ROMAN_NUMERALS;
  }

  resolveNumeralPair(currentValue, nextValue) {
    if (currentValue < nextValue) {
      return nextValue - currentValue;
    }
    return currentValue;
  }

  getNumeralValue(numeral) {
    return this.numerals[numeral] || 0;
  }

  romanToInt(romanNumeral) {
    if (!romanNumeral || romanNumeral.length === 0) {
      throw new Error("Invalid Roman numeral");
    }

    for (let char of romanNumeral) {
      if (this.numerals[char] === undefined) {
        throw new Error("Invalid Roman numeral");
      }
    }

    if (romanNumeral.length === 1) {
      return this.getNumeralValue(romanNumeral);
    }

    let totalValue = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
      const currentValue = this.getNumeralValue(romanNumeral[i]);
      const nextValue = this.getNumeralValue(romanNumeral[i + 1]);

      const resolvedValue = this.resolveNumeralPair(currentValue, nextValue);
      totalValue += resolvedValue;

      if (currentValue < nextValue) {
        i++;
      }
    }

    if (totalValue > 3999) {
      throw new Error("Roman numeral exceeds maximum value of 3999");
    }

    return totalValue;
  }
}

module.exports = Roman;
