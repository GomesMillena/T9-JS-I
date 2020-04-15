let nomeDoMes = "";
let numeroDoMes = prompt('Digite o numero do mes').toLowerCase();
console.log(numeroDoMes);

switch (numeroDoMes) {
    case 'janeiro':
        nomeDoMes = "mes 1";
        break;
    case 'fevereiro':
        nomeDoMes = "mes 2";
        break;
    default:
        nomeDoMes = "Mês inválido";
}

alert(nomeDoMes);

