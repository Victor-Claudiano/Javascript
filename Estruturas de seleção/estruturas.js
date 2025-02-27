// Estruturas de seleção
let idade = 18;

// If, Else If, Else
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Maior de idade");
}

// Switch Case
let diaSemana = "segunda";

switch (diaSemana) {
    case "segunda":
        console.log("Hoje é segunda-feira");
        break;  //Break é usado para sair do switch
    case "terça":
        console.log("Hoje é terça-feira");
        break;
    case "quarta":
        console.log("Hoje é quarta-feira");
        break;
    case "quinta":
        console.log("Hoje é quinta-feira");
        break;
    case "sexta":
        console.log("Hoje é sexta-feira");
        break;
    case "sábado":
    case "domingo":
        console.log("Hoje é fim de semana");
        break;
    default:
        console.log("Dia inválido");
}

// Operador ternário
let dia = "segunda";
let mensagem = dia === "domingo" ? "Hoje é dia de descanso" : "Hoje é dia de trabalho";
console.log(mensagem);
// Output: Maior de idade
// Output: Hoje é segunda-feira
// Output: Hoje é dia de trabalho