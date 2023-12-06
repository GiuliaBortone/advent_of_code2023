import {Matrix} from "./matrix";
import {findElement} from "./findElementInMatrix";
import {findSumOfNumbersNearbySymbol} from "./findSumOfNumbersNearbyElement";

export function calculateSum(matrix: Matrix) {
    const coordinates: Coordinate = findElement("*", matrix)

    if (coordinates.row == -1 && coordinates.column == -1) {
        return 0
    }

    return findSumOfNumbersNearbySymbol(coordinates, matrix)
}

