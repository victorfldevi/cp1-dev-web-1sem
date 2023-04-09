//numero 1 
//declarar variavel com valor undefined

let num1;
//atribuir valor a variavel
num1 = undefined;

document.write(num1);
document.write("<br><br>")



//numero 2 
//Como usar o operador % em JavaScript? Exemplifique e demonstre a saída!

let resultado = 10 % 3;
document.write(resultado);
document.write("<br><br>")

let numero = 7;
if (numero % 2 == 0) {
  document.write("O número é par");
} else {
  document.write("O número é ímpar");
}
document.write("<br><br>")

//numero 3
//  - Escreva um programa que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma 
//  mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de 
//  IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9 (acima do peso). 
//  Exemplifique e demonstre a saída!


// Declaração das variáveis
let peso = 88; // em kg
let altura = 1.76; // em metros
let imc = peso / (altura * altura);

// Exibição do resultado
if (imc < 18.5) {
  document.write("Seu IMC é " + imc.toFixed(2) + ", você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  document.write("Seu IMC é " + imc.toFixed(2) + ", você está no peso ideal.");
} else {
  document.write("Seu IMC é " + imc.toFixed(2) + ", você está acima do peso.");
}
document.write("<br><br>")


//numero 4
/*Faça um programa que receba a idade de uma pessoa e exiba uma mensagem indicando em qual faixa
etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos)
ou idoso (mais de 60 anos). Exemplifique e demonstre a saída!*/

// declarar variável

let idade = 18;

if (idade <= 12){
  document.write("É uma criança.")
}else if (13 <= idade <= 18){
  document.write("É um adolescente.")
}else if (19 <= idade <= 60){
  document.write("É um adulto.")
}else {
  document.write("É um idoso.")
}
document.write("<br><br>")


//numero 5
/*Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos
dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e
senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou
se houve falha de autenticação. Exemplifique e demonstre a saída!*/

// declaração de variaveis

let userName = prompt("Digite o nome de usuário", "Nome de Usuário");
let senha = prompt("Digite a senha", "Senha");

if (userName == "admin" && senha == "1234"){
  document.write("Dados verificados.");
}else {
  document.write("Nome de usuário ou senha incorretos.")
}
document.write("<br><br>")


//numero 6
/*Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere 
que a média mínima para aprovação é 6. Exemplifique e demonstre a saída! (5 Pontos)*/

let nota1 = parseFloat(prompt('Digite a nota 1:'));
let nota2 = parseFloat(prompt('Digite a nota 2:'));
let nota3 = parseFloat(prompt('Digite a nota 3:'));
let nota4 = parseFloat(prompt('Digite a nota 4:'));
let nota5 = parseFloat(prompt('Digite a nota 5:'));
let nota6 = parseFloat(prompt('Digite a nota 6:'));
let nota7 = parseFloat(prompt('Digite a nota 7:'));

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

if (media >= 6) {
  document.write(`O aluno foi aprovado com média ${media.toFixed(1)}`);
} else {
  document.write(`O aluno foi reprovado com média ${media.toFixed(1)}`);
}


//numero 7
// Crie um programa que digite o nome, idade, Curso e ano na tela um embaixo do outro , no seu html 
// coloque um fundo e um titulo e o javascript deve ser externo.(20 Pontos)

document.write("Nome: Clebinho");
document.write("<br><br>");
document.write("Idade: 32");
document.write("<br><br>");
document.write("Curso: Engenharia de software");
document.write("<br><br>");


document.write("Ano: 2023");
document.write("<br><br>");


//numero 8
//Crie um programa em Javascript que troque a palavra lugar por mundo da frase O LUGAR VIRA 
// TECNOLOGIA e apresente na tela. (20 Pontos)

const frase = "O LUGAR VIRA TECNOLOGIA";
const novaFrase = frase.replace("LUGAR", "MUNDO");

document.write(novaFrase);
document.write("<br><br>")



//numero 9
//9 - Crie um programa que declare a variável como String depois converta para float e em seguida apresente 
//apenas dois numeros depois da virgula (20 Pontos)

let numeroString = "3.14159";
let numeroFloat = parseFloat(numeroString);
let numeroTeste = numeroFloat.toFixed(2);

document.write(numeroTeste);