import {Card} from "../../day4-Scratchcards/card"

test("card with no matching numbers should have zero points", () => {
    const card: Card = new Card([1], [2]);
    expect(card.points()).toBe(0)
})

test("card with one matching number should have 1 point", () => {
    const card: Card = new Card([1], [1]);
    expect(card.points()).toBe(1)
})