/*globals describe, it, expect, tangelo */

describe("isNumber()", function () {
    "use strict";

    it("ints are numbers", function () {
        expect(tangelo.isNumber(0)).toBe(true);
        expect(tangelo.isNumber(1)).toBe(true);
        expect(tangelo.isNumber(-1)).toBe(true);
        expect(tangelo.isNumber(100)).toBe(true);
    });

    it("floats are numbers", function () {
        expect(tangelo.isNumber(0.5)).toBe(true);
        expect(tangelo.isNumber(-0.5)).toBe(true);
        expect(tangelo.isNumber(0.0)).toBe(true);
        expect(tangelo.isNumber(3.14e6)).toBe(true);
    });

    it("hexes are numbers", function () {
        expect(tangelo.isNumber(0x12)).toBe(true);
        expect(tangelo.isNumber(0xbce)).toBe(true);
        expect(tangelo.isNumber(0xdeadbeef)).toBe(true);
    });

    it("strings are not numbers", function () {
        expect(tangelo.isNumber("345")).toBe(false);
        expect(tangelo.isNumber("three hundred forty five")).toBe(false);
    });
});
