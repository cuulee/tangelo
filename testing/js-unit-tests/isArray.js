/*globals describe, it, expect, tangelo */

describe("isArray()", function () {
    "use strict";

    it("the empty array is an array", function () {
        expect(tangelo.isArray([])).toBe(true);
    });

    it("singleton arrays are arrays", function () {
        expect(tangelo.isArray([0])).toBe(true);
        expect(tangelo.isArray(["lonely"])).toBe(true);
        expect(tangelo.isArray([{foo: "barley"}])).toBe(true);
        expect(tangelo.isArray([[]])).toBe(true);
    });

    it("longer arrays are arrays", function () {
        expect(tangelo.isArray([0, 1, 2])).toBe(true);
        expect(tangelo.isArray(["one", "is", "the", "loneliest", "number"])).toBe(true);
        expect(tangelo.isArray([{foo: "barley"}, {bar: "corn"}])).toBe(true);
        expect(tangelo.isArray([[], [], [], []])).toBe(true);
    });

    it("strings are not arrays", function () {
        expect(tangelo.isArray("hello")).toBe(false);
        expect(tangelo.isArray("")).toBe(false);
    });

    it("objects are not arrays", function () {
        expect(tangelo.isArray({foo: "bar"})).toBe(false);
        expect(tangelo.isArray({})).toBe(false);
    });

    it("undefined is not an array", function () {
        expect(tangelo.isArray()).toBe(false);
    });
});
