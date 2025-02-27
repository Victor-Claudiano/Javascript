// Tipos primitivos
let nome = "João"; // string
let idade = 25; // number
let preco = 99.99; // number
let ativo = true; // boolean
let vazio = null; // null
let indefinido; // undefined
let numeroGrande = 123456789012345678901234567890n; // bigint(grande)
let simbolo = Symbol("descricao"); // symbol

// Exibindo os tipos primitivos
console.log(typeof nome, nome);
console.log(typeof idade, idade);
console.log(typeof preco, preco);
console.log(typeof ativo, ativo);
console.log(typeof vazio, vazio);
console.log(typeof indefinido, indefinido);
console.log(typeof numeroGrande, numeroGrande);
console.log(typeof simbolo, simbolo);

// Tipo objeto
let pessoa = { nome: "Carlos", idade: 30 };
console.log(typeof pessoa, pessoa);

// Tipo array (que é um objeto)
let numeros = [1, 2, 3, 4, 5];
console.log(typeof numeros, numeros);

// Tipo function (também um objeto)
function saudacao() {
    return "Olá, mundo!";
}
console.log(typeof saudacao, saudacao());
