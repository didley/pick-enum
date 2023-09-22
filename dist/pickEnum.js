"use strict";
// version 1.0.0 - https://gist.github.com/didley/09ad3ddae164f5d7fb02f8ee96971e58
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickEnum = void 0;
function pickEnum(pick, enumerator) {
    const temp = Object[pick](enumerator);
    return temp.slice(temp.length / 2);
}
exports.pickEnum = pickEnum;
// Type tests
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
const a = pickEnum('keys', NumberEnum);
const aa = 'A';
//@ts-expect-error
const aaa = 'D';
const b = pickEnum('keys', StringEnum);
const bb = 'A';
//@ts-expect-error
const bbb = 'D';
const c = pickEnum('values', NumberEnum);
const cc = 0;
//@ts-expect-error
const ccc = 4;
const d = pickEnum('values', StringEnum);
const dd = 'a';
//@ts-expect-error
const ddd = 'd';
const e = pickEnum('entries', NumberEnum);
const ee = ['A', 0];
//@ts-expect-error
const eee = ['A', 1];
const f = pickEnum('entries', StringEnum);
const ff = ['A', StringEnum.A];
//@ts-expect-error
const fff = ['A', StringEnum.B];
//@ts-expect-error
const ffff = ['A', 'a'];
