/**
 * O que é Map em JavaScript?
Map é uma estrutura de dados que armazena pares chave-valor onde as chaves podem ser qualquer tipo de dado (strings, números, objetos, etc.), diferentemente dos objetos, que só aceitam chaves do tipo string ou símbolo.

Quando usar Map?
Quando precisar de chaves de qualquer tipo (não apenas strings).
Quando precisar de ordem de inserção garantida (diferente dos objetos, onde a ordem não é previsível para chaves numéricas).
Quando precisar de um desempenho melhor para inserção, busca e remoção comparado a um objeto comum.
 */

// Criando um Map com times e seus títulos
const times = new Map();
times.set("Flamengo", 8);
times.set("Palmeiras", 11);
times.set("São Paulo", 6);
times.set("Corinthians", 7);

console.log(times); // Map(4)

// Obtendo o número de títulos de um time específico
console.log("Flamengo tem", times.get("Flamengo"), "títulos"); // Flamengo tem 8 títulos

// Verificando se um time está no Map
console.log(times.has("Vasco")); // false

// Removendo um time do Map
times.delete("Corinthians");
console.log(times);

// Iterando sobre um Map (chaves e valores)
for (let [time, titulos] of times) {
    console.log(`${time} tem ${titulos} títulos.`);
}

// Convertendo um Map para um Array
const arrayTimes = [...times];
console.log(arrayTimes);

// Criando um Map com objetos como chaves
const jogadores = new Map();
const jogador1 = { nome: "Neymar" };
const jogador2 = { nome: "Cristiano Ronaldo" };
jogadores.set(jogador1, "PSG");
jogadores.set(jogador2, "Al Nassr");
console.log(jogadores.get(jogador1)); // PSG

// Obtendo todas as chaves e valores
console.log([...times.keys()]); // Nomes dos times
console.log([...times.values()]); // Quantidade de títulos
