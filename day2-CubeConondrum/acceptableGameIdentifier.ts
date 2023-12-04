import {GameSet} from "./gameSet";

export class AcceptableGameIdentifier {
    private readonly redCubesLimit: number
    private readonly greenCubesLimit: number
    private readonly blueCubesLimit: number

    public constructor(redCubesLimit: number, greenCubesLimit: number, blueCubesLimit: number) {
        this.redCubesLimit = redCubesLimit
        this.greenCubesLimit = greenCubesLimit
        this.blueCubesLimit = blueCubesLimit
    }

    public isAcceptable(gameSet: GameSet): boolean {
        return gameSet.redCubes <= this.redCubesLimit && gameSet.greenCubes <= this.greenCubesLimit && gameSet.blueCubes <= this.blueCubesLimit
    }
}