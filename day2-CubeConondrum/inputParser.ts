import {Game} from "./game";
import {GameSet} from "./gameSet";

export class InputParser {
    public static translateToGames(input: string): Game[] {
        const inputLines = input.split("\n").filter(line => line)

        return inputLines.map((line) => this.createGame(line));
    }

    private static createGame(stringGame: string) {
        const gameIdAndSets = stringGame.split(":")
        const gameId = parseInt(gameIdAndSets[0].charAt(gameIdAndSets[0].length - 1))

        const gameSets = InputParser.createSets(gameIdAndSets[1])

        return new Game(gameId, gameSets)
    }

    private static createSets(stringSets: string): GameSet[] {
        const stringSetArray = stringSets.split(";")

        return stringSetArray.map(this.createSet)
    }

    private static createSet(stringSet: string): GameSet {
        const setCubesArray = stringSet.split(",")
        let redCubesQuantity = 0, greenCubesQuantity = 0, blueCubesQuantity = 0;

        setCubesArray.forEach((cubes) => {
            const quantity: number = parseInt(cubes.match(/\d+/)![0])

            if (cubes.includes("red")) {
                redCubesQuantity = quantity
            }

            if (cubes.includes("green")) {
                greenCubesQuantity = quantity
            }

            if (cubes.includes("blue")) {
                blueCubesQuantity = quantity
            }
        })

        return {
            redCubes: redCubesQuantity,
            greenCubes: greenCubesQuantity,
            blueCubes: blueCubesQuantity
        }
    }
}