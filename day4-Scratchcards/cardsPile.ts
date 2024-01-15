import {Card} from "./card";

export class CardsPile {
    public cards: CardAndSons[] = []

    public constructor(cardsAsArray: Card[]) {
        cardsAsArray.forEach((card) => this.addCard(card))
        this.calculateSonsAmount()
    }

    private addCard(card: Card): void {
        this.cards.push([card, 0])
    }

    private calculateSonsAmount(): void {
        for (let i = this.cards.length - 2; i >= 0; i--) {
            const currentCardCommonNumbers = this.cards[i][0].commonNumbers()
            if (currentCardCommonNumbers == 0) {
                continue
            }

            for (let j = i + 1; j < this.cards.length && j <= i + currentCardCommonNumbers; j++) {
                this.cards[i][1] += this.cards[j][1]
            }

            this.cards[i][1] += currentCardCommonNumbers
        }
    }
}

type CardAndSons = [Card, number]