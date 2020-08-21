let vetor1 = [] //forma moderna
let vetor2 = Array() //forma antiga

//Criação de vetores com valores iniciais
let vetor3 = [2,4,6,8]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

//Inserção de novos valores em um vetor

//Forma 1: push() -> Adiciona novos elementos no final do vetor
vetor1.push('laranja')
vetor1.push('limão')

//console.log(vetor1);

//Forma 2: unshift() -> Adiciona novos elementos no início do vetor
vetor1.unshift('maça')
//console.log(vetor1);

vetor1.unshift('abacaxi')
//console.log(vetor1);

//Forma 3: splice()
//1º parâmetro: posição de inserção
//2º parâmetro: quantos elementos serão eliminados(para inserção == 0)
vetor1.splice(2,0, 'morango')
//console.log(vetor1);

vetor1.splice(1,0,'jaca')
//console.log(vetor1);

//Remoção de elementos do vetor
//Forma 1: pop() -> retira o último elemento do vetor

let x1 = vetor1.pop()
//console.log(vetor1, x1);

//Forma 2: shift() -> retira o primeiro elemento do vetor
let x2 = vetor1.shift()
//console.log(vetor1, x2);

//Forma 3: splice()
// O retorno de splice() na remoção será um vetor contendo o(s) itens removidos
let x3 = vetor1.splice(2,1)
//console.log(vetor1, x3);

//O aplice() também serve para fazer substituições
vetor1.splice(1,1,'pêra')
//console.log(vetor1);

//Colocando mais elementos no vetor
vetor1.push('amora', 'jabuticaba')
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')

//console.log(vetor1);


//Métodos de percurso de vetores

//Forma 1: usando o for() tradicional
//O início da variável é sempre na posição 0 e seu incremento
//deve ir até uma posição ANTES do seu número de elementos (length)
for(let i = 0; i < vetor1.length; i++){
    console.log(vetor1[i]);
}
console.log('-----------------------------------------------');

//Forma 2: for..of
for(let fruta of vetor1){
    console.log(fruta);
}
