const pessoas = require('./dados/lista-nomes')
function buscaSequencial(lista, valorBusca, fnComp){
    for(let i = 0; i < lista.length; i++){
        //Encontrou o que estava procurando: retorna a posição
        //em que foi encontrado
        //if (lista[i] === valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1//valorBusca não foi encontrado em lista
}

function comparaNome(objeto, nome){
    //Retorna true se o atributo first_name do objeto for igual ao nome
    return objeto.first_name === nome
}

console.time('Buscando o nome Daniel')
let pos = (buscaSequencial(pessoas, 1000, (obj, valor)=> obj.frequancy_total > valor));
console.log(pessoas[pos], pos);

console.timeEnd('Buscando o nome Daniel')