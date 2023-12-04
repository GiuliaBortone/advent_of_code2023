import {calibrationValuesSum} from "../../day1-Trebuchet/documentAnalyser";
import {readFileSync} from 'fs'

describe("sum up document's calibration values", () => {
    test("solve provided example", () => {
        const input = "1abc2\n" +
            "pqr3stu8vwx\n" +
            "a1b2c3d4e5f\n" +
            "treb7uchet\n";

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(142);
    });

    test("solve really short provided example", () => {
        const input = "1abc2\n" +
            "pqr3stu8vwx\n";

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(50);
    })

    test("solve goal input", () => {
        const input = readFileSync('test/day1-Trebuchet/input.txt', 'utf-8')

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(55902); //56465
    })
});

describe("sum up document's calibration values, with numbers spelled with letters", () => {
    test("solve provided example", () => {
        const input = "two1nine\n" +
            "eightwothree\n" +
            "abcone2threexyz\n" +
            "xtwone3four\n" +
            "4nineeightseven2\n" +
            "zoneight234\n" +
            "7pqrstsixteen\n";

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(281);
    });

    test("solve really short provided example", () => {
        const input = "two1nine\n" +
            "eightwothree\n";

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(112);
    })

    test("solve goal input", () => {
        const input = readFileSync('test/day1-Trebuchet/input.txt', 'utf-8')

        const sum = calibrationValuesSum(input);

        expect(sum).toBe(55902);
    })
});