//Pré-requisito da busca binária: o conjunto de dados PRECISA estar
//ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)

        //Verifica se o valor na posição média é o valor de busca
        if (lista[meio] === valorBusca) {
            comp++
            return meio
        }
        else if (valorBusca < lista[meio]) {
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

let vetorNomes = require('./dados/vetor-nomes')

console.clear()
console.time('Daniel')
console.log(buscaBinaria(vetorNomes, 'DANIEL'));
console.timeEnd('Daniel')
console.log('Comparações: ', comp);

