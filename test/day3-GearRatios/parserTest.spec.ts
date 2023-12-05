import {readFileSync} from "fs";
import {EngineSchematic} from "../../day3-GearRatios/engineSchematic";
import {InputParser} from "../../day3-GearRatios/inputParser";

describe("parse input to engine schematic", () => {
    test("parse provided example", () => {
        const example = readFileSync('test/day3-GearRatios/example.txt', 'utf-8')

        const engineSchematic: EngineSchematic = InputParser.translateToEngineSchematic(example)

        expect(engineSchematic.getLineAt(0)).toStrictEqual("467..114..")
    })
})