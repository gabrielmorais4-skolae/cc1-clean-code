# Roman Numeral Converter

A JavaScript implementation that converts **Roman numerals to integers** (e.g., "IX" → 9).

> Note: This implementation does Roman to Int conversion, which is the inverse of the traditional Int to Roman approach.

## Programming Language

**JavaScript (Node.js)** with **Jest** for testing.

## How to Test

```bash
npx jest
```

## Approach

### Clean Code Principles Applied

1. **Single Responsibility**: Each function has one clear purpose
   - `handleEmptyInput()` - Validates non-empty input
   - `handleInvalidCharacters()` - Validates Roman characters
   - `handleValueExceedingLimit()` - Validates max value (3999)
   - `resolveNumeralPair()` - Handles subtractive notation
   - `getNumeralValue()` - Maps characters to integers

2. **Meaningful Names**: Descriptive function and variable names
   - `romanToInt()` instead of `convert()`
   - `resolveNumeralPair()` instead of `calc()`

3. **Custom Error Handling**: Dedicated `RomanError` class for specific errors

4. **Named Constants**: No magic numbers
   - `ROMAN_NUMERALS` object
   - `MAX_ROMAN_VALUE = 3999`

### Algorithm

1. Validate input (empty strings, invalid characters)
2. Iterate through numeral pairs
3. Apply subtractive notation when current < next value
4. Validate result doesn't exceed 3999
5. Return total

## Usage

```javascript
const Roman = require('./src/roman');
const converter = new Roman();

converter.romanToInt('IX');        // 9
converter.romanToInt('MCMXCIV');   // 1994
converter.romanToInt('XLIV');      // 44
```
