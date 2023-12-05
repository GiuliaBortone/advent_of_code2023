import {Game} from "./game";
import {AcceptableGameIdentifier} from "./acceptableGameIdentifier";

export class GamesRecord {
    private games: Game[]

    public constructor(games: Game[]) {
        this.games = games
    }

    public getSumOfPossibleGames(identifier: AcceptableGameIdentifier): number {
        const possibleGames = this.games
            .filter((game) => identifier.isAcceptableGame(game))

        return possibleGames
            .map(game => game.getId())
            .reduce(function (a, b) {
                return a + b;
            });
    }
}