
//Resultado esperado: [0,1,2,3,4,5,6,7,8,9]
//console.log(mesclarVetores([0,4,7,8,9], [1,2,3,5,6]));
let comparacoes = 0, divisoes = 0, juncoes = 0
function mergeSort(vetor) {
    //Recebe dois vetores já ordenados previamente e os mescla em um
    //único vetor, também ordenado.
    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while (posEsq < vetEsq.length && posDir < vetDir.length) {
            comparacoes++
            if (vetEsq[posEsq] < vetDir[posDir]) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            } else {//vetDir[posDir < vetEsq[posEsq]]
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }

        //slice(): retorna  um subvetor a partir da posição especificada até o fim
        //Sobra no vetor da esquerda
        if (posEsq < posDir) sobra = vetEsq.slice(posEsq)
        //Sobra no vetor da direita
        else sobra = vetDir.slice(posDir)

        //console.log({posEsq, posDir, sobra: sobra});


        //A sobra é acrescentada no resultado final
        return vetRes.concat(sobra)
    }

    if (vetor.length > 1) {
        //Encontra o meio do vetor
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)//A posição do meio não entra
        let vetDir = vetor.slice(meio)
        divisoes++
        //console.log({vetor, vetEsq, vetDir});

        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        juncoes++
        return mesclarVetores(vetEsq, vetDir)
    }
    return vetor
}

//console.log(mergeSort([33,56,9,10,82,54,20,31,44,77,30]));
const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes');
console.log(mergeSort(nomes));
console.timeEnd('Teste nomes');
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada: ' + memoria);
console.log({comparacoes, divisoes, juncoes});




