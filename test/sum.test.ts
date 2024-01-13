const { sum } = require("../src/sum")

describe("sum", () => {
  test("should be a function", () => {
    expect(sum).toEqual(expect.any(Function))
  })

  test("should return 1", () => {
    const result = sum()
    expect(result).toEqual(1)
  })
})
