import {
  appendEmailAddress,
  getValueToAppend,
  prependPositiveOneDigitNumberWithZero,
} from "../src/index"

describe("appendEmailAddress()", () => {
  const testEmail = "tsuki@cat.com"
  const appendedTestEmail = "tsuki+1@cat.com"
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
    // we will need a mock here soon
    const result = appendEmailAddress(testEmail)
    expect(result).toEqual(appendedTestEmail)
  })
})

describe("getValueToAppend()", () => {
  test("should be a function", () => {
    expect(getValueToAppend).toEqual(expect.any(Function))
  })

  test("should return the date as a string", () => {
    expect(typeof getValueToAppend()).toEqual("string")
  })

  test("should date in the format 'YYYY.MM.DD.HH.MM.SS'", () => {
    const regex =
      /^\d{4}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])\.([0-5]?\d)\.([0-5]?\d)\.([0-5]?\d)$/gm
    jest.useFakeTimers().setSystemTime(new Date(2020, 9, 31))

    expect(getValueToAppend()).toMatch(regex)
  })

  test("should return the date with zero infront of 1 digit months", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 1))

    expect(getValueToAppend()).toEqual("2020.02.01.00.00.00")
  })

  test("should return the date with zero infront of 1 digit days", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 1, 2))

    expect(getValueToAppend()).toEqual("2020.02.02.00.00.00")
  })

  test("should return the date with zero infront of 1 digit hour", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 1, 2, 6))

    expect(getValueToAppend()).toEqual("2020.02.02.06.00.00")
  })

  test("should return the date with zero infront of 1 digit minute", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 1, 2, 6, 4))

    expect(getValueToAppend()).toEqual("2020.02.02.06.04.00")
  })

  test("should return the date with zero infront of 1 digit seconds", () => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 1, 2, 6, 4, 7))

    expect(getValueToAppend()).toEqual("2020.02.02.06.04.07")
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
