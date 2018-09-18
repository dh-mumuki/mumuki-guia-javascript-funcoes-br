it("escreverCartao(\"Dra.\", \"Ana\", \"Pérez\"), es \"Dra. Ana Pérez\"", () => {
  assert.equal(escreverCartao("Dra.", "Ana", "Pérez"), "Dra. Ana Pérez")
})
it("escreverCartao(\"Dr.\", \"Julio\", \"Gelman\"), es \"Dr. Julio Gelman\"", () => {
  assert.equal(escreverCartao("Dr.", "Julio", "Gelman"), "Dr. Julio Gelman")
})
