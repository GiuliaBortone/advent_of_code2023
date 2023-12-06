import {Matrix} from "./matrix";

export class InputParser {
    public static translateToMatrix(engineSchematicContents: string): Matrix {
        const engineSchematicLines: string[] = engineSchematicContents.split("\n")
        const engineSchematicLinesAsArrays: string[][] = engineSchematicLines.map(line => [...line])

        return new Matrix(engineSchematicLinesAsArrays)
    }
}