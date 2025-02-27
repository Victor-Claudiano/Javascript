// Loop while
let contador = 0;
while (contador < 5) {
    console.log("While: Contador =", contador);
    contador++;
}

// Loop do...while (executa pelo menos uma vez)
let numero = 0;
do {
    console.log("Do While: Número =", numero);
    numero++;
} while (numero < 5);

// Loop for
for (let i = 0; i < 5; i++) { // (inicialização; condição; incremento)
    console.log("For: Iteração =", i); // i = 0, 1, 2, 3, 4
}

// Loop for...of (para iterar sobre arrays)
const numeros = [10, 20, 30, 40, 50];
for (let num of numeros) {
    console.log("For...of: Número =", num);
}

// Loop for...in (para iterar sobre propriedades de objetos)
const pessoa = { nome: "João", idade: 25, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(`For...in: ${chave} = ${pessoa[chave]}`);
}

// Métodos modernos de arrays
const lista = [1, 2, 3, 4, 5]; // Array de números

// forEach - Executa uma função para cada item do array
lista.forEach(num => console.log("forEach: Número =", num)); // Exemplo de arrow function

// map - Cria um novo array com base nos valores transformados
const dobrados = lista.map(num => num * 2); // Dobrando os números
console.log("map: Números dobrados =", dobrados);

// filter - Filtra os elementos do array com base em uma condição
const pares = lista.filter(num => num % 2 === 0); // Números pares
console.log("filter: Números pares =", pares);

// reduce - Reduz o array a um único valor (exemplo: soma dos valores)
const somaTotal = lista.reduce((acumulador, num) => acumulador + num, 0);
console.log("reduce: Soma total =", somaTotal);
