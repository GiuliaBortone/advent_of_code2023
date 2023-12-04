import {GameSet} from "./gameSet";
import {Game} from "./game"


export class AcceptableGameIdentifier {
    private readonly redCubesLimit: number
    private readonly greenCubesLimit: number
    private readonly blueCubesLimit: number

    public constructor(redCubesLimit: number, greenCubesLimit: number, blueCubesLimit: number) {
        this.redCubesLimit = redCubesLimit
        this.greenCubesLimit = greenCubesLimit
        this.blueCubesLimit = blueCubesLimit
    }

    public isAcceptableSet(gameSet: GameSet): boolean {
        return gameSet.redCubes <= this.redCubesLimit && gameSet.greenCubes <= this.greenCubesLimit && gameSet.blueCubes <= this.blueCubesLimit
    }

    public isAcceptableGame(game: Game): boolean {
        return game.getSets().every(set => this.isAcceptableSet(set))
    }
}