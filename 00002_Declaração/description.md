Vamos começar com o básico:

As funções consistem em 4 partes. A _palavra reservada_ **function**, o _nome_ com o qual vamos chamar a função, os parênteses onde irá os _parametros_  (se você precisar deles) as _{} chaves_ e o código que queremos que a função execute .

Se quisermos que uma função retorne um valor, precisaremos da palavra-chave **return**. Depois disso, tudo o que queremos irá voltar.

Com as funções, podemos fazer muitas coisas, mas vamos começar com algo fácil. Aqui escrevemos a função que dobra o valor do número que passamos para ela.

```javascript
function dobro(numero) {
   return numero*2;
}
```
Como podemos ver, acima nós declaramos uma função com a palavra reservada **function** e o nome _dobro_. Entre os parênteses, colocamos o **parâmetro** _numero_ que será substituído pelo número que damos quando o chamamos. Para terminar, com a palavra **return** dizemos que queremos é que ele retorne 2 vezes o _numero_ que lhe demos.

Para executar a função e fazer o que queremos, você precisa chamá-la pelo nome e digitar o número que deseja usar entre parênteses.

```javascript
dobro(5);   //Isto iá devolver 10
dobro(1.5); //E isto irá devolver 3
```
