import {
  appendEmailAddress,
  getValueToAppend,
  prependPositiveOneDigitNumberWithZero,
} from "../src/index"

describe("appendEmailAddress()", () => {
  const testEmail = "tsuki@cat.com"
  const incorrectAtSignError =
    "Email address has incorrect number of '@' symbols."
  test("should be a function", () => {
    expect(appendEmailAddress).toEqual(expect.any(Function))
  })

  test("should throw error if there are zero '@' signs in email", () => {
    const testEmail = "test.email.com"
    expect(() => appendEmailAddress(testEmail)).toThrow(incorrectAtSignError)
  })

  test("should throw error if there are more than 1 '@' signs", () => {
    const testEmail = "test@email@com"
    expect(() => appendEmailAddress(testEmail)).toThrow(incorrectAtSignError)
  })

  test("should return email with it's appendion", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 9, 31))

    const result = appendEmailAddress(testEmail)

    expect(result).toEqual("tsuki+2020.10.31.00.00.00@cat.com")
  })
})

describe("getValueToAppend()", () => {
  test("should be a function", () => {
    expect(getValueToAppend).toEqual(expect.any(Function))
  })

  test("should return the date as a string", () => {
    expect(typeof getValueToAppend()).toEqual("string")
  })

  test.each([
    {
      testName: "zero infront of 1 digit months",
      dateToSet: new Date(2020, 1),
      expected: "2020.02.01.00.00.00",
    },
    {
      testName: "zero infront of 1 digit days",
      dateToSet: new Date(2020, 1, 2),
      expected: "2020.02.02.00.00.00",
    },
    {
      testName: "zero infront of 1 digit hour",
      dateToSet: new Date(2020, 1, 2, 6),
      expected: "2020.02.02.06.00.00",
    },
    {
      testName: "zero infront of 1 digit minute",
      dateToSet: new Date(2020, 1, 2, 6, 4),
      expected: "2020.02.02.06.04.00",
    },
    {
      testName: "zero infront of 1 digit minute",
      dateToSet: new Date(2020, 1, 2, 6, 4, 7),
      expected: "2020.02.02.06.04.07",
    },
  ])("should return the date with $testName", ({ dateToSet, expected }) => {
    jest.useFakeTimers().setSystemTime(new Date(dateToSet))

    expect(getValueToAppend()).toEqual(expected)
  })
})

describe("prependPositiveOneDigitNumbersWithZero()", () => {
  test("should be a function", () => {
    expect(prependPositiveOneDigitNumberWithZero).toEqual(expect.any(Function))
  })

  test("should return single digit number with a leading 0", () => {
    expect(prependPositiveOneDigitNumberWithZero(5)).toEqual("05")
  })

  test("should return double digit number without a leading 0", () => {
    expect(prependPositiveOneDigitNumberWithZero(11)).toEqual("11")
  })

  test("should return 0 with a leading 0", () => {
    expect(prependPositiveOneDigitNumberWithZero(0)).toEqual("00")
  })

  test("should throw argument is less than 0", () => {
    expect(() => prependPositiveOneDigitNumberWithZero(-3)).toThrow(
      "Number must be positive."
    )
  })
})
