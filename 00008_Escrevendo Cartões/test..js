it("escreverCartao(\"Dra.\", \"Ana\", \"Pérez\"), é \"Dra. Ana Pérez\"", () => {
  assert.equal(escreverCartao("Dra.", "Ana", "Pérez"), "Dra. Ana Pérez")
})
it("escreverCartao(\"Dr.\", \"Julio\", \"Gelman\"), é \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartao("Dr.", "Julio", "Gelman"), "Dr. Julio Gelman")
})
