import {Matrix} from "./matrix";

export function findSumOfNumbersNearbySymbol(coordinates: Coordinate, matrix: Matrix): number {
    if (coordinates.row === -1 && coordinates.column === -1) {
        return -1
    }

    let clonedMatrix: string[][] = Object.assign([], matrix.getMatrix())

    return findCoordinatesOfElementsNearby(coordinates)
        .filter(coordinate => matrix.getMatrix()[coordinate.row][coordinate.column].match(/\d/))
        .map(coordinate => getAllDigitsOfANearbyNumber(coordinate, clonedMatrix))
        .map(element => parseInt(element))
        .reduce((a, b) => a + b);
}

function findCoordinatesOfElementsNearby(coordinates: Coordinate): Coordinate[] {
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

function getAllDigitsOfANearbyNumber(coordinate: Coordinate, clonedMatrix: string[][]): string {
    if (!clonedMatrix[coordinate.row][coordinate.column].match(/\d/)) {
        return "0"
    }

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

    clonedMatrix[coordinate.row][coordinate.column] = "."

    return allDigits
}