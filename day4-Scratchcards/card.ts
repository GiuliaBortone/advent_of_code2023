export class Card {
    private readonly winningNumbers: number[]
    private readonly cardNumbers: number[]

    public constructor(winningNumbers: number[], cardNumbers: number[]){
        this.winningNumbers = winningNumbers
        this.cardNumbers = cardNumbers
    }

    public points() {
        let commonNumbers = this.findCommonNumbersQuantity()
        return this.pointCalculator(commonNumbers);
    }

    private pointCalculator(commonNumbers: number) {
        if (commonNumbers == 0) return 0
        return Math.pow(2, commonNumbers - 1)
    }

    private findCommonNumbersQuantity() {
        let commonNumbers: number = 0
        this.cardNumbers.forEach((number) => {
            if (this.winningNumbers.includes(number)) commonNumbers++
        })
        return commonNumbers;
    }
}