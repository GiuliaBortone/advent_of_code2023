export class EngineSchematics {
    private readonly engineSchematicLines: string[][];

    constructor(engineSchematicLines: string[][]) {
        this.engineSchematicLines = engineSchematicLines;
    }

    public getLineAt(lineIndex: number) {
        return this.engineSchematicLines[lineIndex];
    }
}