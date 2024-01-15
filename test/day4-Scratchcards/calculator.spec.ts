import {Calculator} from "../../day4-Scratchcards/calculator";
import {readFileSync} from "fs";

test("points from example input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/exampleInput.txt', 'utf-8')

    expect(Calculator.totalPointsFromInput(input)).toBe(13)
})

test("points from long input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/longInput.txt', 'utf-8')

    expect(Calculator.totalPointsFromInput(input)).toBe(25174)
})

test("scratchcards from example input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/exampleInput.txt', 'utf-8')

    expect(Calculator.totalScratchcardsFromInput(input)).toBe(30)
})

test("scratchcards from long input", () => {
    const input: string = readFileSync('test/day4-Scratchcards/longInput.txt', 'utf-8')

    expect(Calculator.totalScratchcardsFromInput(input)).toBe(6420979)
})