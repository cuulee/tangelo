/*globals describe, it, expect, tangelo */

describe("Tangelo fatal error function", function () {
    "use strict";

    it("fatal error with module and message", function () {
        try {
            tangelo.fatalError("module", "message");
            expect(true).toBe(false);
        } catch (e) {
            expect(e instanceof Error).toBe(true);
            expect(e.message).toBe("[module] message");
        }
    });

    it("fatal error with just message", function () {
        try {
            tangelo.fatalError("message");
            expect(true).toBe(false);
        } catch (e) {
            expect(e instanceof Error).toBe(true);
            expect(e.message).toBe("message");
        }
    });

    it("fatal error with no arguments", function () {
        try {
            tangelo.fatalError();
            expect(true).toBe(false);
        } catch (e) {
            expect(e instanceof Error).toBe(true);
            expect(e.message).toBe("");
        }
    });
});
