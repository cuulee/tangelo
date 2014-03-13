/*globals describe, it, expect, tangelo */

describe("isString()", function () {
    "use strict";

    it("the empty string is a string", function () {
        expect(tangelo.isString("")).toBe(true);
    });

    it("non-empty strings are strings", function () {
        expect(tangelo.isString("hello, world")).toBe(true);
        expect(tangelo.isString("a")).toBe(true);
        expect(tangelo.isString("123")).toBe(true);
    });

    it("numbers are not strings", function () {
        expect(tangelo.isString(0)).toBe(false);
        expect(tangelo.isString(1)).toBe(false);
        expect(tangelo.isString(-1)).toBe(false);
        expect(tangelo.isString(100)).toBe(false);
    });

    it("arrays are not strings", function () {
        expect(tangelo.isString(["hello", "world"])).toBe(false);
        expect(tangelo.isString([])).toBe(false);
    });

    it("objects are not strings", function () {
        expect(tangelo.isString({hello: "world"})).toBe(false);
        expect(tangelo.isString({})).toBe(false);
    });

    it("functions are not strings", function () {
        expect(tangelo.isString(function (x) { return x; })).toBe(false);
    });

    it("undefined is not a string", function () {
        expect(tangelo.isString()).toBe(false);
    });
});
