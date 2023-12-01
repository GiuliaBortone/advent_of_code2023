test.skip("solve provided example", () => {
    const input = "1abc2\n" +
      "pqr3stu8vwx\n" +
      "a1b2c3d4e5f\n" +
      "treb7uchet\n"

    const sum = calibrationValuesSum(input)

    expect(sum).toBe(142)
})

describe("recover calibration value from single row", () => {
  test("numbers at the edges", () => {
    const value = recoverCalibrationValueFromSingleRow("1abc2")

    expect(value).toBe(12)
  })
})

function calibrationValuesSum(input: string): number {
  throw new Error("Function not implemented.")
}

function recoverCalibrationValueFromSingleRow(input: string) {
  return 12
}
