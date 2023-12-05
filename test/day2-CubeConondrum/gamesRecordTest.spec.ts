import {AcceptableGameIdentifier} from '../../day2-CubeConondrum/acceptableGameIdentifier'
import {GamesRecord} from "../../day2-CubeConondrum/gamesRecord";
import {InputParser} from "../../day2-CubeConondrum/inputParser";
import {readFileSync} from "fs";

describe("find the sum of ids of acceptable games in a games record", () => {
    test("correctly solves provided example", () => {
        const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
            "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
            "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
            "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

        const gamesRecord: GamesRecord = InputParser.translateToGamesRecord(input)

        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)

        expect(gamesRecord.getSumOfPossibleGames(identifier)).toBe(8)
    })

    test("correctly solves provided input", () => {
        const input = readFileSync('test/day2-CubeConondrum/input.txt', 'utf-8')

        const gamesRecord: GamesRecord = InputParser.translateToGamesRecord(input)

        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)

        expect(gamesRecord.getSumOfPossibleGames(identifier)).toBe(2348)
    })
})

describe("find the sum of sets power for all games in game record", () => {
    test("correctly solves provided example", () => {
        const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
            "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
            "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
            "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

        const gamesRecord: GamesRecord = InputParser.translateToGamesRecord(input)

        expect(gamesRecord.getTotalPower()).toBe(2286)
    })

    test("correctly solves provided input", () => {
        const input = readFileSync('test/day2-CubeConondrum/input.txt', 'utf-8')

        const gamesRecord: GamesRecord = InputParser.translateToGamesRecord(input)

        expect(gamesRecord.getTotalPower()).toBe(76008)
    })
})