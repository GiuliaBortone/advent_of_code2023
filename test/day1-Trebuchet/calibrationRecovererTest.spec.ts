import {recoverCalibrationValueFromSingleRow} from '../../day1-Trebuchet/calibrationRecoverer'

describe("recover calibration value from single row", () => {
    test("numbers at the edges", () => {
        const value = recoverCalibrationValueFromSingleRow("1abc2")

        expect(value).toBe(12)
    })

    test("2 numbers in the middle of the word", () => {
        const value = recoverCalibrationValueFromSingleRow("pqr3stu8vwx")

        expect(value).toBe(38)
    })

    test("more than 2 numbers in the word", () => {
        const value = recoverCalibrationValueFromSingleRow("a1b2c3d4e5f")

        expect(value).toBe(15)
    })

    test("single digit in word", () => {
        const value = recoverCalibrationValueFromSingleRow("treb7uchet")

        expect(value).toBe(77)
    })
})

describe("recover calibration value from single row, with numbers spelled out with letters", () => {
    test("spelled numbers at the edges", () => {
        const value = recoverCalibrationValueFromSingleRow("two1nine")

        expect(value).toBe(29)
    })

    test("only spelled numbers", () => {
        const value = recoverCalibrationValueFromSingleRow("eightwothree")

        expect(value).toBe(83)
    })

    test("spelled numbers and digits in the word", () => {
        const value = recoverCalibrationValueFromSingleRow("abcone2threexyz")

        expect(value).toBe(13)
    })

    test("spelled numbers overlapping", () => {
        const value = recoverCalibrationValueFromSingleRow("xtwone3four")

        expect(value).toBe(24)
    })

    test("spelled numbers and digits, digits at the edges", () => {
        const value = recoverCalibrationValueFromSingleRow("4nineeightseven2")

        expect(value).toBe(42)
    })

    test("spelled numbers and digits overlapping", () => {
        const value = recoverCalibrationValueFromSingleRow("zoneight234")

        expect(value).toBe(14)
    })

    test("digit at the beginning and spelled number in the word", () => {
        const value = recoverCalibrationValueFromSingleRow("7pqrstsixteen")

        expect(value).toBe(76)
    })
})


