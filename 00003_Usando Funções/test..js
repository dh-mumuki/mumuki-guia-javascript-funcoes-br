describe("metade", () => {
  it("deveria dividir 6 na metade para termos 3", () => {
    assert.equal(metade(6), 3)
  })
  it("deveria dividir 100 na metade para termos 50", () => {
    assert.equal(metade(100), 50)
  })
  it("deveria dividir 1 na metade para termos 0.5", () => {
    assert.equal(metade(1), 0.5)
  })
})