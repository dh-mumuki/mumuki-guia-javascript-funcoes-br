Tendo essas pequenas funções, podemos combiná-las para fazer coisas mais complexas.

Por exemplo, se quisermos adicionar dois números e depois multiplicá-los por 3, poderíamos fazê-lo da seguinte maneira:

```javascript
function somaPorTres (num1, num2) {
   var resultadoDaSoma = add (num1, num2);
   return resultadoDaSoma * 3;
}
```

Aqui vemos que tendo a função **somar()** definida, podemos chamá-la dentro de outra função e tornar o trabalho mais fácil.

> Crie função `dobroDoProximo()` que recebe um parâmetro e nos retorna duas vezes mais que o próximo, ou seja, parâmetro + 1.
