
//numero 1 
//declarar variavel com valor undefined
let num1;
//atribuir valor a variavel
num1 = undefined;

console.log(num1);

//numero 2 
//Como usar o operador % em JavaScript? Exemplifique e demonstre a saída!

let resultado = 10 % 3;
console.log(resultado);

let numero = 7;
if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

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
  console.log("Seu IMC é " + imc.toFixed(2) + ", você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ", você está no peso ideal.");
} else {
  console.log("Seu IMC é " + imc.toFixed(2) + ", você está acima do peso.");
}

//numero 8

//Crie um programa em Javascript que troque a palavra lugar por mundo da frase O LUGAR VIRA 
// TECNOLOGIA e apresente na tela. (20 Pontos)

const frase = "O LUGAR VIRA TECNOLOGIA";
const novaFrase = frase.replace("LUGAR", "MUNDO");

document.getElementById("texto").innerHTML = novaFrase;



//numero 9
// Crie um programa que declare a variável como String depois converta para float e em seguida apresente 
// apenas dois numeros depois da virgula (20 Pontos)

let valorString = "444.41441";
let valorFloat = parseFloat(valorString).toFixed(2);

document.write(valorFloat) // irá exibir 444.41

