import {AcceptableGameIdentifier} from '../../day2-CubeConondrum/acceptableGameIdentifier'
import {GameSet} from "../../day2-CubeConondrum/gameSet";
import {Game} from "../../day2-CubeConondrum/game";


describe("find if a set is acceptable", () => {
    test("set is acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet: GameSet = {
            redCubes: 4,
            greenCubes: 0,
            blueCubes: 3
        }

        expect(identifier.isAcceptableSet(gameSet)).toBe(true)
    })

    test("set is not acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet: GameSet = {
            redCubes: 8,
            greenCubes: 6,
            blueCubes: 20
        }

        expect(identifier.isAcceptableSet(gameSet)).toBe(false)
    })
})

describe("find if a game is acceptable", () => {
    test("game is acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet1: GameSet = {redCubes: 4, greenCubes: 0, blueCubes: 3}
        let gameSet2: GameSet = {redCubes: 1, greenCubes: 2, blueCubes: 6}
        let gameSet3: GameSet = {redCubes: 0, greenCubes: 2, blueCubes: 0}
        let game = new Game(1, Array.of(gameSet1, gameSet2, gameSet3))

        expect(identifier.isAcceptableGame(game)).toBe(true)
    })

    test("game is not acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet1: GameSet = {redCubes: 20, greenCubes: 8, blueCubes: 6}
        let gameSet2: GameSet = {redCubes: 4, greenCubes: 13, blueCubes: 5}
        let gameSet3: GameSet = {redCubes: 1, greenCubes: 5, blueCubes: 0}
        let game = new Game(1, Array.of(gameSet1, gameSet2, gameSet3))

        expect(identifier.isAcceptableGame(game)).toBe(false)
    })
})

