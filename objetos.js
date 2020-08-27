//Declaração de objeto vazio
let pessoa1 = {} //método moderno
let pessoa2 = new Object()  //método tradicional

//Declarando e inicializando um objeto já com propriedades
//propriedade -> atributo + valor
let pessoa3 = {
    nome: 'Daniel',
    naturalidade: 'Franca/SP',
    "data de nascimento": '1997-11-03',
    estudante_fatec: true
}

//Acessando propriedades de um objeto
//Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoa3.nome);
console.log(pessoa3.estudante_fatec);

//Acessando uma propriedade composta por várias palavras
//sintaxe dos colchetes
console.log(pessoa3['data de nascimento']);

//Sintaxe dos colchetes SEMPRE funciona
console.log(pessoa3['naturalidade']);

let atrib = 'nome'
console.log(pessoa3[atrib]);

//Criando novas propriedades em um objeto
//basta atribuir o valor a um nome de atributo seguindo a sintaxe apropriada
pessoa3.nacionalidade = 'brasileiro'
pessoa3['registro de estrangeiro'] = 123456789
console.log(pessoa3);

//Eliminando uma propriedade
delete pessoa3.estudante_fatec
console.log('--------------------------');
console.log(pessoa3);

//Como percorrer todas as propriedades de um objeto
for(let prop in pessoa3){
    console.log(prop);
}

//Listando atributo e valor de um objeto usando o for..in
for(let atrib in pessoa3){
    //console.log('Atributo: ' + atrib + ';valor: ' + pessoa3[atrib]);
    //Usando string template
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`);
}