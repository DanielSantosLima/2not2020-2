let comp = 0
//Implemantação Iterativa
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)
        let res = fnComp(lista[meio], valorBusca)
        //Verifica se o valor na posição média é o valor de busca
        if (res === 0) {
            comp++
            return meio
        }
        else if (res < 0) {
            comp += 2
            fim = meio - 1
        } else {//valoBusca > lista[meio]
            {
                comp += 2
                inicio = meio + 1
            }
        }
    }
    return -1 //Valor não encontrado
}

let listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, valorBusca){
    //Os dois números são iguais
    if(valorBusca === obj.first_name) return 0
    else if(valorBusca < obj.first_name) return -1
    else return 1
}

console.time('Daniel')
console.log(buscaBinaria(listaNomes, 'DANIEL', comparaNome));
console.timeEnd('Daniel')
