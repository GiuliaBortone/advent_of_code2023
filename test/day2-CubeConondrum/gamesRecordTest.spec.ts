import {Game} from "../../day2-CubeConondrum/game";
import {AcceptableGameIdentifier} from '../../day2-CubeConondrum/acceptableGameIdentifier'


class GameRecord {
    private readonly games: Game[]

    public constructor(games: Game[]) {
        this.games = games
    }

    public getSumOfPossibleGames(identifier: AcceptableGameIdentifier) {
        return this.games.filter(identifier.isAcceptableGame).map(game => game.getId()).reduce(function (a, b) {
            return a + b;
        });
    }
}

describe("find the sum of ids of acceptable games in a games record", () => {
    test("", () => {
        //const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
        //    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
        //    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
        //    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
        //    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
//
        //const games: Game[] = InputTranslator.translateToGames(input)
//
        //const gamesRecord: GameRecord = new GameRecord(games)
        //let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
//
        //expect(gamesRecord.getSumOfPossibleGames(identifier)).toBe(8)
    })
})

class InputTranslator {
    public static translateToGames(input: string) {
        const inputLines = input.split("\n").filter(line => line)

        inputLines.forEach(line => {
            line.replace(" ", "")
            const gameAndSets = line.split(":")
            const gameId = gameAndSets[0].charAt(gameAndSets[0].length - 1)

            const gameSets = InputTranslator.createSets(gameAndSets[1])
        });
    }

    private static createSets(stringSets: string) {

    }


}