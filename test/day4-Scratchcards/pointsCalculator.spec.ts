import {PointsCalculator} from "../../day4-Scratchcards/pointsCalculator";
import {readFileSync} from "fs";

test("example input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/exampleInput.txt', 'utf-8')

    expect(PointsCalculator.totalPointsFromInput(input)).toBe(13)
})

test("long input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/longInput.txt', 'utf-8')

    expect(PointsCalculator.totalPointsFromInput(input)).toBe(25174)
})