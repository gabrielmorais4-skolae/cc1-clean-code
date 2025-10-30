const ROMAN_NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const MAX_ROMAN_VALUE = 3999;

class RomanError extends Error {
  constructor(message) {
    super(message);
    this.name = "RomanError";
  }
}

class Roman {
  constructor() {
    this.numerals = ROMAN_NUMERALS;
    this.maxValue = MAX_ROMAN_VALUE;
  }

  handleEmptyInput(romanNumeral) {
    if (!romanNumeral || romanNumeral.length === 0) {
      throw new RomanError("Invalid Roman numeral");
    }
  }

  handleInvalidCharacters(romanNumeral) {
    for (let char of romanNumeral) {
      if (this.numerals[char] === undefined) {
        throw new RomanError("Invalid Roman numeral");
      }
    }
  }

  handleValueExceedingLimit(value) {
    if (value > this.maxValue) {
      throw new RomanError(`Roman numeral exceeds maximum value of ${this.maxValue}`);
    }
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
    this.handleEmptyInput(romanNumeral);
    this.handleInvalidCharacters(romanNumeral);

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

    this.handleValueExceedingLimit(totalValue);

    return totalValue;
  }
}

module.exports = Roman;
