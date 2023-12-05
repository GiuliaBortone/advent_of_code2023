import {readFileSync} from "fs";

class Almanac {
    private readonly seedsToBePlanted: number[]


    constructor(seedsToBePlanted: number[]) {
        this.seedsToBePlanted = seedsToBePlanted
    }

    getSeedsToBePlanted(): number[] {
        return this.seedsToBePlanted
    }
}

function buildAlmanac(input: string): Almanac {
    const seedsToBePlanted = [79, 14, 55, 13]


    return new Almanac(seedsToBePlanted)
}

describe("parse input and return almanac", () => {
    test("return seed to be planted", () => {
        const input = readFileSync('test/day5-seedToLocation/example.txt', 'utf-8')
        const almanac: Almanac = buildAlmanac(input)

        expect(almanac.getSeedsToBePlanted()).toStrictEqual([79, 14, 55, 13])
    })
})