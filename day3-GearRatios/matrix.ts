export class Matrix {
    private stringMatrix: string[][]

    constructor(stringMatrix: string[][]) {
        this.stringMatrix = stringMatrix
    }

    public getMatrix() {
        return this.stringMatrix
    }
}