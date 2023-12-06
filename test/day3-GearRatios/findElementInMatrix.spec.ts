import {Matrix} from "../../day3-GearRatios/matrix";
import {findElement} from "../../day3-GearRatios/findElementInMatrix";

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

    const coordinates = findElement("*", matrix)

    expect(coordinates).toStrictEqual({row: 2, column: 3})
})