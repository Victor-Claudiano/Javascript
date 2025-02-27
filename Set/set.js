/**
O que é Set em JavaScript?
Set é uma estrutura de dados embutida no JavaScript que permite armazenar valores únicos de qualquer tipo. 
Isso significa que um Set não permite valores duplicados.

Quando usar Set?
Quando você precisa armazenar valores únicos sem repetições.
Para remover duplicatas de um array de forma eficiente.
Para verificar rapidamente se um valor já existe na coleção.
Para operações matemáticas como união, interseção e diferença entre conjuntos.
 */

/**
 * Uso do Set em JavaScript - Material de Estudo
 * 
 * Exemplos utilizando times de futebol ⚽
 */

// Criando um Set com times de futebol
const times = new Set();
times.add("Flamengo");
times.add("Palmeiras");
times.add("São Paulo");
times.add("Corinthians");
times.add("Flamengo"); // Não será adicionado, pois já existe
console.log(times); // Set(4)

// Verificando se um time está no conjunto
console.log(times.has("Flamengo"));  // true
console.log(times.has("Vasco"));     // false

// Removendo um time do Set
times.delete("Corinthians");
console.log(times); // Set(3)

// Iterando sobre um Set
for (let time of times) {
    console.log(time);
}

// Convertendo um Set para um Array
const arrayTimes = [...times];
console.log(arrayTimes);

// Removendo duplicatas de um array
const timesDuplicados = ["Flamengo", "Palmeiras", "São Paulo", "Flamengo", "São Paulo"];
const timesUnicos = [...new Set(timesDuplicados)];
console.log(timesUnicos);

// Operações com conjuntos (Set)
const timesBrasil = new Set(["Flamengo", "Palmeiras", "São Paulo"]);
const timesEuropa = new Set(["Real Madrid", "Barcelona", "Bayern"]);

// União
const uniao = new Set([...timesBrasil, ...timesEuropa]);
console.log(uniao);

// Interseção
const timesFavoritos = new Set(["Flamengo", "Barcelona", "São Paulo"]);
const intersecao = new Set([...timesBrasil].filter(time => timesFavoritos.has(time)));
console.log(intersecao);

// Diferença
const diferenca = new Set([...timesBrasil].filter(time => !timesFavoritos.has(time)));
console.log(diferenca);
