import {Matrix} from "../../day3-GearRatios/matrix";

test("find symbol coordinates", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    stringMatrix[1][2] = '1'
    stringMatrix[2][3] = '*'

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(coordinates).toStrictEqual({row: 2, column: 3})
})

test("find single number nearby symbol", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    stringMatrix[1][2] = '1'
    stringMatrix[2][3] = '*'

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(matrix.findSumOfNumbersNearbySymbol(coordinates)).toBe(1)
})

test("no symbol found returns -1, -1 and find sum returns -1", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(coordinates).toStrictEqual({row: -1, column: -1})
    expect(matrix.findSumOfNumbersNearbySymbol(coordinates)).toBe(-1)
})

test("find sum of more than one number nearby symbol", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    stringMatrix[1][2] = '1'
    stringMatrix[2][2] = '1'
    stringMatrix[2][3] = '*'

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(matrix.findSumOfNumbersNearbySymbol(coordinates)).toBe(2)
})

test("find number near symbol when number has more than one digit, not in its scope", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    stringMatrix[1][1] = '1'
    stringMatrix[1][2] = '1'
    stringMatrix[2][2] = '1'
    stringMatrix[2][3] = '*'

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(matrix.findSumOfNumbersNearbySymbol(coordinates)).toBe(12)
})

test("find number near symbol when number has more than one digit, but with some in its scope", () => {
    const example = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    let stringMatrix: string[][] = []

    for (let i = 0; i < 10; i++) {
        const clone = Object.assign([], example)
        stringMatrix.push(clone)
    }

    stringMatrix[1][2] = '1'
    stringMatrix[1][3] = '1'
    stringMatrix[2][2] = '1'
    stringMatrix[2][3] = '*'

    let matrix = new Matrix(stringMatrix)

    const coordinates = matrix.findElement("*")

    expect(matrix.findSumOfNumbersNearbySymbol(coordinates)).toBe(12)
})