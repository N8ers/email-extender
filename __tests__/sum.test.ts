import { sum } from "../src/sum"

describe("sum", () => {
  test("should be a function", () => {
    expect(sum).toEqual(expect.any(Function))
  })

  test("should return 1", () => {
    const result = sum(1)
    expect(result).toEqual(1)
  })
})
