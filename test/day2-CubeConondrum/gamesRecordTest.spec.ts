import {Game} from "../../day2-CubeConondrum/game";
import {AcceptableGameIdentifier} from '../../day2-CubeConondrum/acceptableGameIdentifier'
import {GamesRecord} from "../../day2-CubeConondrum/gamesRecord";
import {InputParser} from "../../day2-CubeConondrum/inputParser";

describe("find the sum of ids of acceptable games in a games record", () => {
    test("correctly solves provided example", () => {
        const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
            "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
            "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
            "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
            "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

        const games: Game[] = InputParser.translateToGames(input)

        const gamesRecord: GamesRecord = new GamesRecord(games)
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)

        expect(gamesRecord.getSumOfPossibleGames(identifier)).toBe(8)
    })
})