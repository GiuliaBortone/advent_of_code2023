import {Card} from "./card";
import {CardsPile} from "./cardsPile";

export class Calculator {
    public static totalScratchcardsFromInput(input: string): number {
        const inputLines = input.split('\n')
        let cardsPile: CardsPile = new CardsPile(this.createCardArrayFrom(inputLines))

        let totalScratchcards = cardsPile.cards.length

        cardsPile.cards.forEach((card) => {
            const copiesCreatedFromCard = card[1]
            totalScratchcards += copiesCreatedFromCard
        })

        return totalScratchcards
    }

    public static totalPointsFromInput(input: string): number {
        const inputLines = input.split('\n')
        let totalPoints = 0
        let cards = this.createCardArrayFrom(inputLines)

        cards.forEach((card: Card) => {
            totalPoints += this.pointsCalculatorFor(card.commonNumbers())
        })

        return totalPoints
    }

    private static createCardArrayFrom(inputLines: string[]) {
        let cardsAsArray: Card[] = []
        inputLines.forEach((line) => {
            const [winningNumbersAsString, cardNumbersAsString] = line.split(':')[1].split('|')

            const card: Card = new Card(this.getArrayFromString(winningNumbersAsString), this.getArrayFromString(cardNumbersAsString))

            cardsAsArray.push(card)
        })

        return cardsAsArray
    }

    private static getArrayFromString(numbersAsString: string): number[] {
        return numbersAsString.trim().split(' ').filter(number => number).map(Number);
    }

    private static pointsCalculatorFor(commonNumbers: number): number {
        if (commonNumbers == 0) return 0
        return Math.pow(2, commonNumbers - 1)
    }
}