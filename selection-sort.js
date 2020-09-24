function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    //Função que encontra o menor valor em u segmento de vetor(subvetor)
    //A função deve retornar a POSIÇÃO do menor valor encontrado
    function encontraMenor(vetor, inicio) {
        let posMenor = inicio

        for (let i = inicio + 1; i < vetor.length; i++) {
            if (vetor[i] < vetor[posMenor]) {
                posMenor = i
                comparacoes++
            }
        }
        return posMenor
    }

    //O for externo vai até a penúltima posição
    for (let i = 0; i < vetor.length - 1; i++) {
        passadas++
        //Busca-se o menor valor no restante do vetor
        posMenor = encontraMenor(vetor, i + 1)
        //Caso o valor encontrado seja menor que o valor atual, 
        //procede-se à troca
        if (vetor[posMenor] < vetor[i]) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas});
}

/* let nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]
selectionSort(nums)
console.log(nums); */
let nomes = require('./dados/100-mil-nomes')
console.time('Teste 1')
selectionSort(nomes)
console.timeEnd('Teste 1')
console.log(nomes);


