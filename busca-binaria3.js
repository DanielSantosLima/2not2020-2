let comp = 0

//Implementação Recursiva
//Uma função chama a si mesma com pelo menos um de seus parâmetros 
//com valor alterado
//Toda função recursiva precisa pelo menos de uma condição de saída, isto é, 
//uma possibilidade de término que não envolve uma chamada dela mesma.

//Os parâmetros inicio e fim são opcionais. Caso a função seja chamada sem especificá-los,
//eles assumirão os valores indicados.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {
    //let inicio = 0
    //let fim = lista.length - 1

    if (fim >= inicio) {
        let meio = Math.floor((fim + inicio) / 2)
        let res = fnComp(lista[meio], valorBusca)
        //Verifica se o valor na posição média é o valor de busca
        if (res === 0) {
            comp++
            return `O número procurado está na posição ${meio}`
        }
        else if (res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        } else {//valoBusca > lista[meio]
            {
                comp += 2
                //inicio = meio + 1
                return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
            }
        }
    }
    return -1 //Valor não encontrado
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 35, (elPos, busca) => {
    if(busca === elPos) return 0
    else if(busca < elPos) return -1
    else return 1
}));

//Termina a execução sem passar pelas linhas abaixo.
process.exit(0)

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
