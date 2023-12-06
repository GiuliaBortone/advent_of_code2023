import {readFileSync} from "fs";
import {sumOfAllEngineParts} from "../../day3-GearRatios/engineSchematics";

describe.skip("find sum of all engine parts", () => {
    test("acceptance test with provided example", () => {
        const example = readFileSync('test/day3-GearRatios/example.txt', 'utf-8')

        const sumAllEngineParts = sumOfAllEngineParts(example)

        expect(sumAllEngineParts).toBe(4361)
    })
})

function calculateSum(matrix: string[][]) {
    /*
    1. ricercare il simbolo
    2. prendiamo i vicini del simbolo
    3. sommiamo i vicini
     */

    let rowIndexFinder = (arr: string[][], target: string) => {
        return arr.findIndex(v => v.includes(target))
    }

    let columnIndexFinder = (arr: string[], target: string) => {
        return arr.findIndex(v => v.includes(target))
    }

    const rowIndex = rowIndexFinder(matrix, "*")
    if (rowIndex == -1) {
        return 0
    }

    const columnIndex = columnIndexFinder(matrix[rowIndex], "*")

    for (let i = rowIndex - 1; i < rowIndex + 2; i++) {
        for (let j = columnIndex - 1; j < columnIndex + 2; j++) {
            if (matrix[i][j].match(/\d/)) {
                return parseInt(matrix[i][j])
            }
        }
    }
}

describe("find sum of simpler cases", () => {
    test("griglia 10x10 solo punti, ritorna 0", () => {
        const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
        let matrix: string[][] = []

        for (let i = 0; i < 10; i++) {
            matrix.push(example)
        }

        expect(calculateSum(matrix)).toBe(0)
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

        expect(calculateSum(matrix)).toBe(1)
    })
})
