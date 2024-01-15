export class Card {
    private readonly winningNumbers: number[];
    private readonly cardNumbers: number[];

    public constructor(winningNumbers: number[], cardNumbers: number[]){
        this.winningNumbers = winningNumbers;
        this.cardNumbers = cardNumbers;
    }

    public points() {
        if (this.cardNumbers[0] == this.winningNumbers[0])
            return 1
        else return 0
    }
}