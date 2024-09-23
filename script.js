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
console.log('---------------------------------------');
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function calcFibonacci(num) {
  let a = 0,
    b = 1,
    next = 0;

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
  console.log(`Resultado 2: ${numero} pertence à sequencia Fibonacci.`);
} else {
  console.log(`Resultado 2: ${numero} não percente à sequência de Fibonacci.`);
}
console.log('---------------------------------------');
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Utilizando JSON:

// [
//   { dia: 1, faturamento: 1000 },
//   { dia: 2, faturamento: 0 },
//   { dia: 3, faturamento: 2000 },
//   { dia: 4, faturamento: 1500 },
//   { dia: 5, faturamento: 0 },
//   { dia: 6, faturamento: 1800 },
//   { dia: 7, faturamento: 2300 },
//   { dia: 8, faturamento: 0 },
// ];

const faturamentoMensal = [
  { dia: 1, faturamento: 3000 },
  { dia: 2, faturamento: 500 },
  { dia: 3, faturamento: 2000 },
  { dia: 4, faturamento: 1500 },
  { dia: 5, faturamento: 0 },
  { dia: 6, faturamento: 1800 },
  { dia: 7, faturamento: 2300 },
  { dia: 8, faturamento: 0 },
  { dia: 9, faturamento: 5000 },
  { dia: 10, faturamento: 0 },
];

const diasComFaturamento = faturamentoMensal.filter(
  (dia) => dia.faturamento > 0
);

const menorFaturamento = Math.min(
  ...diasComFaturamento.map((dia) => dia.faturamento)
);
const maiorFaturamento = Math.max(
  ...diasComFaturamento.map((dia) => dia.faturamento)
);

const totalFaturamento = diasComFaturamento.reduce(
  (total, dia) => total + dia.faturamento,
  0
);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia) => dia.faturamento > mediaMensal
).length;

console.log(`Resultado 3: Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Resultado 3: Maior valor de faturamento: ${maiorFaturamento}`);
console.log(
  `Resultado 3: Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);

console.log('---------------------------------------');


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamento).reduce(
  (total, valor) => total + valor,
  0
);

for (let estado in faturamento) {
  const percentual = (faturamento[estado] / faturamentoTotal) * 100;
  console.log(`Resultado 4: ${estado}: ${percentual.toFixed(2)}%`);
}
