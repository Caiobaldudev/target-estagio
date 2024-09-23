// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(`Resultado 1: ${SOMA}`);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function calcFibonacci(num) {
  let a = 0, b = 1, next = 0;

  if (num === 0 || num === 1) {
    return true;
  }

  while (next < num) {
    next = a + b;
    a = b;
    b = next;
  }

  return next === num;
}

const numero = 34; // Colocar aqui o número

if (calcFibonacci(numero)) {
  console.log(`${numero} pertence à sequencia Fibonacci.`);
} else {
  console.log(`${numero} não percente à sequência de Fibonacci.`);
  
}