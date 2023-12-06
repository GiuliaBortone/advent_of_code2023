import {Matrix} from "./matrix";
import {InputParser} from "./inputParser";
import {calculateSum} from "./calculateSum";

export function sumOfAllEngineParts(engineSchematicContent: string) {
    const matrix: Matrix = InputParser.translateToMatrix(engineSchematicContent)

    return calculateSum(matrix)
}
