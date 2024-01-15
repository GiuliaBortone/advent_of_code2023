import {Card} from "../../day4-Scratchcards/card";
import {CardsPile} from "../../day4-Scratchcards/cardsPile";

test("card 1 should create 14 copies", () => {
    const card1: Card = new Card([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])
    const card2: Card = new Card([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19])
    const card3: Card = new Card([1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1])
    const card4: Card = new Card([41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83])
    const card5: Card = new Card([87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36])
    const card6: Card = new Card([31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11])

    const cardsPile: CardsPile = new CardsPile(Array.of(card1, card2, card3, card4, card5, card6))
    expect(cardsPile.cards[0][1]).toBe(14)
})
