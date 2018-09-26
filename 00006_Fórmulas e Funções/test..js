describe("perimetro", function() {
  it("com o raio 4 deveria nos retornar 25.12", () => {
	assert.equal(perimetro(4), 25.12)
  })
})
describe("area", function() {
  it("com o raio 4 deveria nos retornar 50.24", () => {
	assert.equal(area(4), 50.24)
  })
})

describe("perimetro", function() {
  it("com o raio 1 deveria nos retornar 6.28", () => {
	assert.equal(perimetro(1), 6.28)
  })
})
describe("area", function() {
  it("com o raio 1 deveria nos retornar 3.14", () => {
	assert.equal(area(1), 3.14)
  })
})

describe("perimetro", function() {
  it("com o raio 50 nos deveria nos retornar 314", () => {
	assert.equal(perimetro(50), 314)
  })
})
describe("area", function() {
  it("com o raio 50 deveria nos retornar 7850", () => {
	assert.equal(area(50), 7850)
  })
})
