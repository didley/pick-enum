/// <reference types="vitest" />
import { expect, it } from "vitest"
import { pickEnum } from "./pickEnum"


enum NumberEnum { A, B, C }
enum StringEnum { A = 'a', B = 'b', C = 'c' }
it.each([['Number', NumberEnum], ['String', StringEnum]])('%s enum', (_name, enumerator) => {
    it('key', () => {
        expect(pickEnum('keys', enumerator)).toBe(['A', 'B', 'C'])
    })
    it('value', () => {
        expect(pickEnum('values', enumerator)).toBe([0, 1, 2])
    })
    it('entry', () => {
        expect(pickEnum('entries', enumerator)).toBe([['A', 0], ['B', 1], ['C', 2]])
    })
})

