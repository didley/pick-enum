"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vitest" />
const vitest_1 = require("vitest");
const pickEnum_1 = require("./pickEnum");
var NumberEnum;
(function (NumberEnum) {
    NumberEnum[NumberEnum["A"] = 0] = "A";
    NumberEnum[NumberEnum["B"] = 1] = "B";
    NumberEnum[NumberEnum["C"] = 2] = "C";
})(NumberEnum || (NumberEnum = {}));
var StringEnum;
(function (StringEnum) {
    StringEnum["A"] = "a";
    StringEnum["B"] = "b";
    StringEnum["C"] = "c";
})(StringEnum || (StringEnum = {}));
vitest_1.it.each([['Number', NumberEnum], ['String', StringEnum]])('%s enum', (_name, enumerator) => {
    (0, vitest_1.it)('key', () => {
        (0, vitest_1.expect)((0, pickEnum_1.pickEnum)('keys', enumerator)).toBe(['A', 'B', 'C']);
    });
    (0, vitest_1.it)('value', () => {
        (0, vitest_1.expect)((0, pickEnum_1.pickEnum)('values', enumerator)).toBe([0, 1, 2]);
    });
    (0, vitest_1.it)('entry', () => {
        (0, vitest_1.expect)((0, pickEnum_1.pickEnum)('entries', enumerator)).toBe([['A', 0], ['B', 1], ['C', 2]]);
    });
});
