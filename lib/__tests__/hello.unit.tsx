function add(a: number, b: number) {
  return a + b
}

describe('测试用例', () => {
  it('1+2等于3', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
