import {Card} from "./card";

export class PointsCalculator {
    public static totalPointsFromInput(input: string): number {
        const inputLines = input.split('\n')
        let totalPoints = 0
        inputLines.forEach((line) => {
            const [winningNumbersAsString, cardNumbersAsString ] = line.split(':')[1].split('|')

            const card: Card = new Card(this.getArrayFromString(winningNumbersAsString), this.getArrayFromString(cardNumbersAsString))

            totalPoints += card.points()
        })

        return totalPoints
    }

    private static getArrayFromString(numbersAsString: string): number[] {
        return numbersAsString.trim().split(' ').filter(number => number).map(Number);
    }
}