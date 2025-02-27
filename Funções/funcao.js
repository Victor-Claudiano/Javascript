// Função simples sem parâmetros
function saudacao() {
    return "Olá, mundo!";
}
console.log(saudacao());

// Função com parâmetros
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));

// Função com valor padrão para parâmetros
function multiplicar(a, b = 2) {
    return a * b;
}
console.log(multiplicar(4)); // Usa o valor padrão de b

// Função anônima atribuída a uma variável
const dividir = function(a, b) {
    return a / b;
};
console.log(dividir(10, 2));

// Arrow function (função de seta)
const subtrair = (a, b) => a - b;
console.log(subtrair(10, 4));

// Função que retorna outra função
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}
const dobrar = criarMultiplicador(2);
console.log(dobrar(5));
