/*globals describe, it, expect, tangelo */

describe("Tangelo error object creation", function () {
    "use strict";

    it("constructing an error from just a code", function () {
        var err = tangelo.error(tangelo.error.AJAX_FAILURE);
        expect(err.code).toBe(tangelo.error.AJAX_FAILURE);
        expect(err.message).toBe("ajax failure");
        expect(err.jqxhr).toBeUndefined();
    });

    it("constructing an error from a code and a custom message", function () {
        var msg = "custom error message",
            err = tangelo.error(tangelo.error.AJAX_FAILURE, msg);

        expect(err.code).toBe(tangelo.error.AJAX_FAILURE);
        expect(err.message).toBe(msg);
        expect(err.jqxhr).toBeUndefined();
    });

    it("constructing an error from a code and a jqxhr object", function () {
        var err = tangelo.error(tangelo.error.AJAX_FAILURE, {foo: "bar"});

        expect(err.code).toBe(tangelo.error.AJAX_FAILURE);
        expect(err.message).toBe("ajax failure");
        expect(tangelo.isObject(err.jqxhr)).toBe(true);
        expect(err.jqxhr.foo).toBe("bar");
    });

    it("constructing an error from a code, custom message, and a jqxhr object", function () {
        var msg = "custom error message",
            err = tangelo.error(tangelo.error.AJAX_FAILURE, msg, {foo: "bar"});

        expect(err.code).toBe(tangelo.error.AJAX_FAILURE);
        expect(err.message).toBe(msg);
        expect(tangelo.isObject(err.jqxhr)).toBe(true);
        expect(err.jqxhr.foo).toBe("bar");
    });
});
