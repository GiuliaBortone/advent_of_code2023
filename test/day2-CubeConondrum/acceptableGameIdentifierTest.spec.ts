import {AcceptableGameIdentifier} from '../../day2-CubeConondrum/acceptableGameIdentifier'
import {GameSet} from "../../day2-CubeConondrum/gameSet";

describe("find if a set is acceptable", () => {
    test("set is acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet: GameSet = {
            redCubes: 4,
            greenCubes: 0,
            blueCuaddbes: 3
        }

        expect(identifier.isAcceptable(gameSet)).toBe(true)
    })

    test("set is not acceptable", () => {
        let identifier: AcceptableGameIdentifier = new AcceptableGameIdentifier(12, 13, 14)
        let gameSet: GameSet = {
            redCubes: 8,
            greenCubes: 6,
            blueCubes: 20
        }

        expect(identifier.isAcceptable(gameSet)).toBe(false)
    })
})

