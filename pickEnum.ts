// version 1.0.0 - https://gist.github.com/didley/09ad3ddae164f5d7fb02f8ee96971e58

/**
 * Examples
 * 
 * enum NumberEnum { A, B, C }
 * 
 * pickEnum('keys', NumberEnum) // ['A', 'B', 'C']
 * pickEnum('values', NumberEnum) // [0, 1, 2]
 * pickEnum('entries', NumberEnum) // [['A', 0], ['B', 1], ['C', 2]]
 */


/** 
 * Pick keys | values | entries from a `number` | `string` enum.
 * 
 * CAUTION: Mixed enums (enums with number & string values) are not supported and will produce unexpected behavior.
 */
export function pickEnum<E extends object, R extends readonly [keyof E, E[keyof E]]>(pick: 'entries', enumerator: E): readonly [...{ [P in keyof E]: [P, E[P]]; }[keyof E]]
export function pickEnum<E extends object, R extends E[keyof E]>(pick: 'values', enumerator: E): R extends string ? `${R}` : R
export function pickEnum<E extends object, R extends keyof E>(pick: 'keys', enumerator: E): R
export function pickEnum<E extends object, R extends keyof E | E[keyof E] | [keyof E, E[keyof E]]>(pick: 'keys' | 'values' | 'entries', enumerator: E): R {
    const temp = Object[pick](enumerator);
    return temp.slice(temp.length / 2) as R;
}


// Type tests
enum NumberEnum { A, B, C }
enum StringEnum { A = 'a', B = 'b', C = 'c' }

const a = pickEnum('keys', NumberEnum)
const aa: typeof a = 'A'
//@ts-expect-error
const aaa: typeof a = 'D'

const b = pickEnum('keys', StringEnum)
const bb: typeof b = 'A'
//@ts-expect-error
const bbb: typeof b = 'D'

const c = pickEnum('values', NumberEnum)
const cc: typeof c = 0
//@ts-expect-error
const ccc: typeof c = 4

const d = pickEnum('values', StringEnum)
const dd: typeof d = 'a'
//@ts-expect-error
const ddd: typeof d = 'd'

const e = pickEnum('entries', NumberEnum)
const ee: typeof e = ['A', 0]
//@ts-expect-error
const eee: typeof e = ['A', 1]

const f = pickEnum('entries', StringEnum)
const ff: typeof f = ['A', StringEnum.A]
//@ts-expect-error
const fff: typeof f = ['A', StringEnum.B]
//@ts-expect-error
const ffff: typeof f = ['A', 'a']