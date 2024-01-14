import { appendEmailAddress, getValueToAppend } from "../src/index"

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
    const result = appendEmailAddress(testEmail)
    expect(result).toEqual(appendedTestEmail)
  })
})

describe("getValueToAppend()", () => {
  test("should be a function", () => {
    expect(getValueToAppend).toEqual(expect.any(Function))
  })
})
