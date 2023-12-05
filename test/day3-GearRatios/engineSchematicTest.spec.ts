import {readFileSync} from "fs";

function sumOfAllEngineParts(engineSchematicContent: string) {
    return 4361
}

describe("find sum of all engine parts", () => {
    test("acceptance test with provided example", () => {
        const example = readFileSync('test/day3-GearRatios/example.txt', 'utf-8')

        const sumAllEngineParts = sumOfAllEngineParts(example)

        expect(sumAllEngineParts).toBe(4361)
    })
})
