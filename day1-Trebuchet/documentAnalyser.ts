import {
    recoverCalibrationValueFromSingleRow
} from './calibrationRecoverer'

export function calibrationValuesSum(input: string) {
    const documentLines = linesSeparator(input)
    let linesCalibrationValue = documentLines.flatMap(recoverCalibrationValueFromSingleRow)
    return sumAllCalibrationValues(linesCalibrationValue)
}

function sumAllCalibrationValues(linesCalibrationValue: number[]) {
    return linesCalibrationValue.reduce(function (a, b) {
        return a + b;
    });
}

function linesSeparator(input: string): string[] {
    return input.split("\n").filter(line => line);
}