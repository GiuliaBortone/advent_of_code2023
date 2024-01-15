import {Card} from "../../day4-Scratchcards/card"

test("card with no matching numbers should have zero points", () => {
    const card: Card = new Card([1], [2])
    expect(card.points()).toBe(0)
})

test("card with one matching number should have 1 point", () => {
    const card: Card = new Card([1], [1])
    expect(card.points()).toBe(1)
})

test("card with two matching numbers should return 2 points", () => {
    const card: Card = new Card([1, 2], [2, 1])
    expect(card.points()).toBe(2)
})