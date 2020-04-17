//4. Um loop que leia (prompt) o nome de 5 pessoas.

let listaDeNomes = [];

for (let cont = 1; cont <=5; cont++){
    let nome = prompt("Digite um nome");
    listaDeNomes.push(nome); 
}
console.log(listaDeNomes);
