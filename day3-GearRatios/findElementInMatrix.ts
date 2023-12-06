import {Matrix} from "./matrix";

export function findElement(symbol: string, matrix: Matrix): Coordinate {
    const rowIndex = rowIndexForElement(symbol, matrix)

    if (rowIndex === -1) return {row: -1, column: -1}

    const columnIndex = columnIndexForElement(symbol, rowIndex, matrix)

    return {row: rowIndex, column: columnIndex}
}

function rowIndexForElement(symbol: string, matrix: Matrix) {
    return matrix.getMatrix().findIndex(row => row.includes(symbol))
}

function columnIndexForElement(symbol: string, rowIndex: number, matrix: Matrix) {
    return matrix.getMatrix()[rowIndex].findIndex(element => element === symbol)
}