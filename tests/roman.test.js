const Roman = require("../src/roman");

describe("Roman numeral converter", () => {
  let converter;

  beforeEach(() => {
    converter = new Roman();
  });

  describe("Convert basic numerals", () => {
    it("should convert I to 1", () => {
      expect(converter.romanToInt("I")).toBe(1);
    });

    it("should convert V to 5", () => {
      expect(converter.romanToInt("V")).toBe(5);
    });

    it("should convert X to 10", () => {
      expect(converter.romanToInt("X")).toBe(10);
    });

    it("should convert L to 50", () => {
      expect(converter.romanToInt("L")).toBe(50);
    });

    it("should convert C to 100", () => {
      expect(converter.romanToInt("C")).toBe(100);
    });

    it("should convert D to 500", () => {
      expect(converter.romanToInt("D")).toBe(500);
    });

    it("should convert M to 1000", () => {
      expect(converter.romanToInt("M")).toBe(1000);
    });
  });

  describe("Convert numerals that need mathematical operations (subtraction)", () => {
    it("should convert IV to 4", () => {
      expect(converter.romanToInt("IV")).toBe(4);
    });

    it("should convert IX to 9", () => {
      expect(converter.romanToInt("IX")).toBe(9);
    });

    it("should convert XL to 40", () => {
      expect(converter.romanToInt("XL")).toBe(40);
    });

    it("should convert XC to 90", () => {
      expect(converter.romanToInt("XC")).toBe(90);
    });

    it("should convert CD to 400", () => {
      expect(converter.romanToInt("CD")).toBe(400);
    });

    it("should convert CM to 900", () => {
      expect(converter.romanToInt("CM")).toBe(900);
    });
  });

  describe("Convert complex numerals", () => {
    it("should convert XIII to 13", () => {
      expect(converter.romanToInt("XIII")).toBe(13);
    });

    it("should convert XXVII to 27", () => {
      expect(converter.romanToInt("XXVII")).toBe(27);
    });

    it("should convert XLIV to 44", () => {
      expect(converter.romanToInt("XLIV")).toBe(44);
    });

    it("should convert LXIX to 69", () => {
      expect(converter.romanToInt("LXIX")).toBe(69);
    });

    it("should convert XCIII to 93", () => {
      expect(converter.romanToInt("XCIII")).toBe(93);
    });

    it("should convert CLX to 160", () => {
      expect(converter.romanToInt("CLX")).toBe(160);
    });

    it("should convert CDXLIV to 444", () => {
      expect(converter.romanToInt("CDXLIV")).toBe(444);
    });

    it("should convert DCCCXC to 890", () => {
      expect(converter.romanToInt("DCCCXC")).toBe(890);
    });

    it("should convert MCMXCIV to 1994", () => {
      expect(converter.romanToInt("MCMXCIV")).toBe(1994);
    });
  });

  describe("Edge cases", () => {
    it("should throw error for invalid numeral", () => {
      expect(converter.romanToInt("A")).toThrow("Invalid Roman numeral");
    });

    it("should throw error for numeral exceeding 3999", () => {
      expect(converter.romanToInt("MMMM")).toThrow("Value exceeds maximum limit of 3999");
    });

    it("should throw an error for empty string", () => {
      expect(() => converter.romanToInt("")).toThrow("Invalid Roman numeral");
    });
  });
});
