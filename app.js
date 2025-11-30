let nome = "Zézinho";
let sobrenome = "da Silva";
let idade = 21;
let valorEmprestimo;
let numAnos;
let juros;
let montante;

if (idade >= 18 && idade <= 25) {
    var taxaDeJuros = 0.09;
} else if (idade >= 26 && idade <= 35) {
    var taxaDeJuros = 0.08;
} else if (idade >= 36 && idade <= 50) {
    var taxaDeJuros = 0.07;
} else {
    var taxaDeJuros = 0.06;
}

for (let cont=0 ; cont < 3 ; cont++) {
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo:"));
    numAnos = parseInt(prompt("Digite o número de anos"));
    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;
    console.log("O montante do empréstimo é: " + montante);
}