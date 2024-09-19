do{
var nome = prompt("Nome do aluno: ");
var nota1 = prompt("Primeira Nota: ");
var nota2 = prompt("Segunda Nota: ");
var nota3 = prompt("Terceira Nota: ");
var nota4 = prompt("Quarta Nota: ");
var media = (parseFloat (nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4)) / 4;

alert("A média do aluno " + nome + " foi: " + media);

}while (confirm("Calcular outra nota?"));