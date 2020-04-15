// 4. Crie uma lista vazia e verifique se o length == 0 
// (se a lista estiver vazia) .push() inserindo algum valor dentro. 
// Se o length for maior > 0 alert() mostrando o tamanho.

let lista = [];
console.log(lista, "valor inicial da lista");

if(lista.length === 0) {
    lista.push("oi");
    console.log(lista, "dentro do primeiro if");
} 
if (lista.length > 0 ) {
    console.log(lista.length, "dento do segundo if")
}

// } else {
//     alert(lista.length)
// }