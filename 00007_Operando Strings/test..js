describe("longitudeNomeCompleto", () => {
  it("Com o nome Juan Pérez deveria ter ua longitude de 10", () => {
	assert.equal(longitudeNomeCompleto("Juan", "Pérez"), 10)
  })
  it("Com o nome María de las Nieves deveria ter uma longitude de 19", () => {
	assert.equal(longitudeNomeCompleto("María", "de las Nieves"), 19)
  })
  it("Com o nome Jet Li deveria ter uma longitude de 6", () => {
	assert.equal(longitudeNomeCompleto("Jet", "Li"), 6)
  })
})
