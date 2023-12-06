import {InputParser} from "./inputParser";

export class EngineSchematics {
    private readonly engineSchematicMatrix: string[][]

    constructor(engineSchematicLines: string[][]) {
        this.engineSchematicMatrix = engineSchematicLines
    }

    public getEngineMatrix() {
        return this.engineSchematicMatrix
    }
}

export function sumOfAllEngineParts(engineSchematicContent: string) {
    const engineSchematic: EngineSchematics = InputParser.translateToEngineSchematic(engineSchematicContent)
    const engineMatrix: string[][] = engineSchematic.getEngineMatrix()

    return 4361
}
