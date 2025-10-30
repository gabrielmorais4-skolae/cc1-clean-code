describe("Roman numeral converter", () => {
  describe("Convert basic numerals", () => {
    it("should convert I to 1", () => {
      expect(romanToInt("I")).toBe(1);
    });

    it("should convert V to 5", () => {
      expect(romanToInt("V")).toBe(5);
    });

    it("should convert X to 10", () => {
      expect(romanToInt("X")).toBe(10);
    });

    it("should convert L to 50", () => {
      expect(romanToInt("L")).toBe(50);
    });

    it("should convert C to 100", () => {
      expect(romanToInt("C")).toBe(100);
    });

    it("should convert D to 500", () => {
      expect(romanToInt("D")).toBe(500);
    });

    it("should convert M to 1000", () => {
      expect(romanToInt("M")).toBe(1000);
    });
  });
});
