// Variáveis e constantes
let variavelLet = "Eu posso ser reatribuído";
const constante = "Eu sou imutável";

console.log(variavelLet);
console.log(constante);

// Operadores aritméticos
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let resto = 10 % 3;
let exponenciacao = 2 ** 3;

// Operadores de comparação
console.log(10 == "10"); // true (compara apenas valor)
console.log(10 === "10"); // false (compara valor e tipo)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false

// Operadores lógicos
let verdadeiro = true;
let falso = false;

// AND lógico (&&) - Retorna true se ambos forem verdadeiros
console.log(true && true);  // true
console.log(true && false); // false

// OR lógico (||) - Retorna true se pelo menos um for verdadeiro
console.log(true || false); // true
console.log(false || false); // false

// NOT lógico (!) - Inverte o valor booleano
console.log(!true);  // false
console.log(!false); // true
