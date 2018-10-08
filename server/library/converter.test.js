const {
    translateToRoman,
    translateToIntger
} = require ('./helpers.js')

test("2 should return II", () => {
    expect(translateToRoman(2)).toBe('II')
})

test("II should return 2", () => {
    expect(translateToIntger('II')).toBe(2)
})

test("9 should return IX", () => {
    expect(translateToRoman(9)).toBe('IX')
})

test("IX should return 9", () => {
    expect(translateToIntger('IX')).toBe(9)
})

test("919 should return II", () => {
    expect(translateToRoman(919)).toBe('CMXIX')
})

test("CMXIX should return 919", () => {
    expect(translateToIntger('CMXIX')).toBe(919)
})

