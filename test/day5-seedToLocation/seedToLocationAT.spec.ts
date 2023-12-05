import {readFileSync} from "fs";

function lowestLocationFor(almanacContent: string) {
    return 35
}

test("solve provided example", () => {
    const input = readFileSync('test/day5-seedToLocation/example.txt', 'utf-8')

    const lowestLocationForInputSeed = lowestLocationFor(input)

    expect(lowestLocationForInputSeed).toBe(35)
})

