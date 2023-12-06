export class Matrix {
    private stringMatrix: string[][]

    constructor(stringMatrix: string[][]) {
        this.stringMatrix = stringMatrix
    }

    public findElement(symbol: string): Coordinate {
        const rowIndex = this.rowIndexForElement(symbol)

        if (rowIndex === -1) return {row: -1, column: -1}

        const columnIndex = this.columnIndexForElement(symbol, rowIndex)

        return {row: rowIndex, column: columnIndex}
    }

    private rowIndexForElement(symbol: string) {
        return this.stringMatrix.findIndex(row => row.includes(symbol))
    }

    private columnIndexForElement(symbol: string, rowIndex: number) {
        return this.stringMatrix[rowIndex].findIndex(element => element === symbol)
    }

    public findSumOfNumbersNearbySymbol(coordinates: Coordinate): number {
        if (coordinates.row === -1 && coordinates.column === -1) {
            return -1
        }

        let clonedMatrix: string[][] = Object.assign([], this.stringMatrix)

        return this.findCoordinatesOfElementsNearby(coordinates)
            .filter(coordinate => this.stringMatrix[coordinate.row][coordinate.column].match(/\d/))
            .map(coordinate => this.getAllDigitsOfANearbyNumber(coordinate, clonedMatrix))
            .map(element => parseInt(element))
            .reduce((a, b) => a + b);
    }

    private findCoordinatesOfElementsNearby(coordinates: Coordinate): Coordinate[] {
        let elementsNearby: Coordinate[] = []

        for (let i = coordinates.row - 1; i >= 0 && i < coordinates.row + 2; i++) {
            for (let j = coordinates.column - 1; j < coordinates.column + 2; j++) {
                if (i === coordinates.row && j === coordinates.column) {
                    continue
                }

                elementsNearby.push({row: i, column: j})
            }
        }

        return elementsNearby
    }

    private getAllDigitsOfANearbyNumber(coordinate: Coordinate, clonedMatrix: string[][]) {
        let currentColumn = coordinate.column - 1
        let allDigits = clonedMatrix[coordinate.row][coordinate.column]

        while (currentColumn >= 0) {
            if (!clonedMatrix[coordinate.row][currentColumn].match(/\d/)) {
                break
            }
            allDigits = clonedMatrix[coordinate.row][currentColumn] + allDigits
            clonedMatrix[coordinate.row][currentColumn] = "."
            currentColumn--
        }

        currentColumn = coordinate.column + 1
        while (currentColumn < clonedMatrix[coordinate.row].length) {
            if (!clonedMatrix[coordinate.row][currentColumn].match(/\d/)) {
                break
            }
            allDigits = allDigits + clonedMatrix[coordinate.row][currentColumn]
            clonedMatrix[coordinate.row][currentColumn] = "."
            currentColumn++
        }

        return allDigits
    }
}