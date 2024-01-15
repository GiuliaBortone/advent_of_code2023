export class Card {
    private readonly winningNumbers: number[]
    private readonly cardNumbers: number[]

    public constructor(winningNumbers: number[], cardNumbers: number[]){
        this.winningNumbers = winningNumbers
        this.cardNumbers = cardNumbers
    }

    public commonNumbers() {
        let commonNumbers: number = 0
        this.cardNumbers.forEach((number) => {
            if (this.winningNumbers.includes(number)) commonNumbers++
        })
        return commonNumbers;
    }
}