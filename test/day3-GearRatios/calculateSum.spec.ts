import {calculateSum} from "../../day3-GearRatios/calculateSum";
import {Matrix} from "../../day3-GearRatios/matrix";

describe("find sum of simpler cases", () => {
    test("griglia 10x10 solo punti, ritorna 0", () => {
        const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
        let matrix: string[][] = []

        for (let i = 0; i < 10; i++) {
            matrix.push(example)
        }

        const matrixObject = new Matrix(matrix)

        expect(calculateSum(matrixObject)).toBe(0)
    })

    test("griglia 10x10 con un solo simbolo e un numero adiacente", () => {
        const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
        let matrix: string[][] = []

        for (let i = 0; i < 10; i++) {
            const clone = Object.assign([], example)
            matrix.push(clone)
        }

        matrix[1][4] = '1'
        matrix[2][3] = '*'

        const matrixObject = new Matrix(matrix)

        expect(calculateSum(matrixObject)).toBe(1)
    })
})