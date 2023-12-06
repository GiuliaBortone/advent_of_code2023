import {readFileSync} from "fs";
import {EngineSchematics} from "../../day3-GearRatios/engineSchematics";
import {InputParser} from "../../day3-GearRatios/inputParser";

describe("parse input to engine schematic", () => {
    test("parse provided example", () => {
        const example = readFileSync('test/day3-GearRatios/example.txt', 'utf-8')

        const engineSchematic: EngineSchematics = InputParser.translateToEngineSchematic(example)

        expect(engineSchematic.getEngineMatrix()[0]).toStrictEqual(["4", "6", "7", ".", ".", "1", "1", "4", ".", "."])
    })
})