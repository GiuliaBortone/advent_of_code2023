import {EngineSchematics} from "./engineSchematics";

export class InputParser {
    public static translateToEngineSchematic(engineSchematicContents: string) {
        const engineSchematicLines: string[] = engineSchematicContents.split("\n")
        const engineSchematicLinesAsArrays: string[][] = engineSchematicLines.map(line => [...line])

        return new EngineSchematics(engineSchematicLinesAsArrays)
    }
}