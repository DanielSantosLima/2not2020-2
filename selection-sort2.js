/*
//Função de Comparação fnComp
//-Recebe dois valores para comparação
//-Retorno:
//  -true se o PRIMEIRO valor for MAIOR que o segundo
//  -false caso contrário
*/
function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    //Função que encontra o menor valor em u segmento de vetor(subvetor)
    //A função deve retornar a POSIÇÃO do menor valor encontrado
    function encontraMenor(vetor, inicio) {
        let posMenor = inicio

        for (let i = inicio + 1; i < vetor.length; i++) {
            //if (vetor[i] < vetor[posMenor]) {
            if(!fnComp(vetor[i], vetor[posMenor])){
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
        //if (vetor[posMenor] < vetor[i]) {
        if (fnComp(vetor[i] , vetor[posMenor])) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas});
}



let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (x, y)=>x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
//Medindo a memória utilizada.
let memoria = process.memoryUsage().heapUsed /1024/1024
console.log(candidatos);
console.log('Memória usada (MB): ' + memoria);




