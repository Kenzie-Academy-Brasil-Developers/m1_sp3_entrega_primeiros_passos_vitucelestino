// EXERCICIO 1
// let numero1 = prompt('Digite o número 1 aqui');
// let numero2 = prompt('Digite o número 2 aqui');
// let valor1 = Math.max(numero1, numero2);
// let valor2 = numero1 - numero2;
// alert(`O maior número é ${valor1} e a diferença é ${valor2}`);

// EXERCICIO 2
// let numero1 = parseFloat(prompt('Digite o número 1 aqui'));
// let numero2 = parseFloat(prompt('Digite o número 2 aqui'));
// let valor1 = Math.max(numero1, numero2);
// let valor2 = Math.min(numero1, numero2);
// if (numero1 === numero2){
//     alert(`Números iguais`);
// } else {
//     alert(`O número ${valor1} é maior que número ${valor2}`);
// }

// EXERCICIO 3
// let n1 = parseFloat(prompt('Digite aqui o seu salário'));
// let prestacao = parseFloat(prompt('Digite aqui o valor da prestação'));
//  if (prestacao > n1 * 0.30){
//     alert('Empréstimo não concedido')
// } else {
//     alert('Empréstimo concedido')
// }

// EXERCICIO 4
// let numero1 = parseInt(prompt('Digite o número aqui'));
// let valor3 = 3;
// let valor5 = 5;

// if ((numero1 % valor5) == 0 && (numero1 % valor3) == 0){
//     alert(`Valor inválido`)
// } else if ((numero1 % valor3) == 0){
//     alert(`Valor divisível por 3`)
// } else if ((numero1 % valor5) == 0){
//     alert(`Valor divisível por 5`)
// } else if (numero1 % 2 === 0){
//     alert(`${numero1} Par`);
// } else {
//     alert(`${numero1} Impar`);
// }

// EXERCICIO 5
// let n1 = parseInt(prompt('Informe um número'))
// if (n1 === 1){
//     alert('Domingo')
// } else if (n1 === 2){
//     alert('Segunda-feira')
// } else if (n1 === 3){
//     alert('Terça-feira')
// } else if (n1 === 4){
//     alert('Quarta-feira')
// } else if (n1 === 5){
//     alert('Quinta-feira')
// } else if (n1 === 6){
//     alert('Sexta-feira')
// } else if (n1 === 7){
//     alert('Sabádo')
// } else {
//     alert('Não corresponde a um número da semana')
// }

// EXERCICIO 6
// let salario = parseFloat(prompt('Digite o salário'));
// let porcentagem = parseFloat(prompt('Digite o valor do reajuste'));
// let total = salario * (porcentagem/100);
// let valorTotal = salario + total;
// alert(`O salário do funcionário corrigido é de: R$${valorTotal}`);

// EXERCICIO 7
// let real = parseFloat(prompt('Digite o valor em real para ser convertido em dólar'));
// let cotacao = parseFloat(prompt('Digite o valor da cotação atual do Dólar'));
// let dolar = real * cotacao;
// alert(`R$${real} é equivalente a R$${dolar}, tendo ${cotacao} como cotação`);

// EXERCICIO 8

// let tipo = parseInt(prompt('Digite o tipo da área'))
// let area = parseInt(prompt('Digite a área a ser pulverizada'));
// let valorTotal = 0;
 
// if(tipo == 1){
//     valorTotal = area * 50;
// } else if (tipo == 2){
//     valorTotal = area * 100;
// } else if (tipo == 3){
//     valorTotal = area * 150;
// } else if (tipo == 4){
//     valorTotal = area * 250;
// }

// if(area > 1000){
//     valorTotal = valorTotal * 0.95;
// }

// if(valorTotal > 750){
//     let ultrapassa = valorTotal - 750;
//     let desconto = ultrapassa * 0.1;
//     valorTotal -= desconto;
// }

// alert(`O valor a ser pago é de: R$${valorTotal.toFixed(2)}`);

// EXERCICIO 9
// let tempo = parseInt(prompt('Digite o tempo'));
// let velocidade = parseInt(prompt('Digite a velocidade'));
// let distancia = tempo * velocidade;
// let litros_usados = distancia / 12;
// alert(`Seu veículo percorreu ${distancia} km a ${velocidade}km/h em ${tempo}h de viagem e 
// consumiu ${litros_usados.toFixed(2)}l de gasolina`);

// EXERCICIO 10
// let valor = parseFloat(prompt('Digite o valor da fatura'));
// let taxa = parseFloat(prompt('Digite o valor da taxa'));
// let tempo = parseFloat(prompt('Digite o tempo de atraso'));
// let prestacao = valor + (valor* (taxa/100) *tempo);
// if (tempo === 0 || tempo % 1 !== 0){
//     alert(`Valor inválido o tempo de atraso deve ser em dias`)
// } else {
//     alert(`R$ ${prestacao}`)
// }