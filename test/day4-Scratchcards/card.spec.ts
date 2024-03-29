import {Card} from "../../day4-Scratchcards/card"

test("card with no matching numbers should have zero points", () => {
    const card: Card = new Card([1], [2])
    expect(card.commonNumbers()).toBe(0)
})

test("card with one matching number should have 1 point", () => {
    const card: Card = new Card([1], [1])
    expect(card.commonNumbers()).toBe(1)
})

test("card with two matching numbers should return 2 points", () => {
    const card: Card = new Card([1, 2], [2, 1])
    expect(card.commonNumbers()).toBe(2)
})

describe("cards from example input", () => {
    test("card 1 should return 8 points", () => {
        const card: Card = new Card([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])
        expect(card.commonNumbers()).toBe(4)
    })

    test("card 2 should return 2 points", () => {
        const card: Card = new Card([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19])
        expect(card.commonNumbers()).toBe(2)
    })

    test("card 3 should return 2 points", () => {
        const card: Card = new Card([1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1])
        expect(card.commonNumbers()).toBe(2)
    })

    test("card 4 should return 1 point", () => {
        const card: Card = new Card([41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83])
        expect(card.commonNumbers()).toBe(1)
    })

    test("card 5 should return 0 points", () => {
        const card: Card = new Card([87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36])
        expect(card.commonNumbers()).toBe(0)
    })

    test("card 6 should return 0 points", () => {
        const card: Card = new Card([31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11])
        expect(card.commonNumbers()).toBe(0)
    })
})