import {readFileSync} from "fs";
import {sumOfAllEngineParts} from "../../day3-GearRatios/sumOfAllEngineParts";

describe.skip("find sum of all engine parts", () => {
    test("acceptance test with provided example", () => {
        const example = readFileSync('test/day3-GearRatios/example.txt', 'utf-8')

        const sumAllEngineParts = sumOfAllEngineParts(example)

        expect(sumAllEngineParts).toBe(4361)
    })
})
