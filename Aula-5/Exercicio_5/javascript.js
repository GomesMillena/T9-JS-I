//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.

// - for para ler 10 prompt 
let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

for (let num = 1; num <= 10; num++) {
    numero = parseInt(prompt(`Digite o número ${num} :`));

    if (numero % 2 === 0) {
        contPar++;
        somaPares += numero;
    }
    else {
        contImpar++; 
        somaImpares += numero;
    }
}

console.log(somaImpares, 'soma de numero impares');
console.log(somaPares, 'soma de numeros pares');
console.log(contPar, 'total de pares');
console.log(contImpar, 'total de impares');
