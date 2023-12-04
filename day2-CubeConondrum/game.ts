import {GameSet} from "./gameSet";

export class Game {
    private readonly id: number
    private readonly gameSets: GameSet[]

    public constructor(id: number, gameSets: GameSet[]) {
        this.id = id
        this.gameSets = gameSets
    }

    public getSets(): GameSet[] {
        return this.gameSets
    }

    public getId(): number {
        return this.id
    }
}