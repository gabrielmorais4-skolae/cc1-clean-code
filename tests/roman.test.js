const roman = require("../src/roman");

describe("Roman numeral converter", () => {
  describe("Convert basic numerals into", () => {
    it("should convert I to 1", () => {
      expect(roman.romanToInt("I")).toBe(1);
    });

    it("should convert V to 5", () => {
      expect(roman.romanToInt("V")).toBe(5);
    });

    it("should convert X to 10", () => {
      expect(roman.romanToInt("X")).toBe(10);
    });

    it("should convert L to 50", () => {
      expect(roman.romanToInt("L")).toBe(50);
    });

    it("should convert C to 100", () => {
      expect(roman.romanToInt("C")).toBe(100);
    });

    it("should convert D to 500", () => {
      expect(roman.romanToInt("D")).toBe(500);
    });

    it("should convert M to 1000", () => {
      expect(roman.romanToInt("M")).toBe(1000);
    });
  });
});
