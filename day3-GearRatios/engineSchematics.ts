export class EngineSchematics {
    private readonly engineSchematicMatrix: string[][]

    constructor(engineSchematicLines: string[][]) {
        this.engineSchematicMatrix = engineSchematicLines
    }

    public getEngineMatrix() {
        return this.engineSchematicMatrix
    }
}