describe("Não funcionou...", function() {
  it("deveria retornar 5 e devolvemos 12", () => {
	assert.equal(dobroDoProximo(5), 12)
  })
  it("deveria retornar 0 e devolvemos 2", () => {
	assert.equal(dobroDoProximo(0), 2)
  })
  it("deveria retornar -4 e devolvemos -6", () => {
	assert.equal(dobroDoProximo(-4), -6)
  })
})

