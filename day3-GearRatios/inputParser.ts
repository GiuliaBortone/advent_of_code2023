import {EngineSchematic} from "./engineSchematic";

export class InputParser {
    public static translateToEngineSchematic(engineSchematicContents: string) {
        const engineSchematicLines: string[] = engineSchematicContents.split("\n")

        return new EngineSchematic(engineSchematicLines)
    }
}