describe("tirarMoeda", () => {
  it("tem que devolver só 0 ou 1", () => {
	var result = gerarProbabilidade()
	assert(result >= 0 && result <= 100)
  })
})
