//Comparando dois números distintos
let a = 10, b = 7
console.log(a > b);
console.log(b > a);

console.log('------------------------');

//Comparando duas strings distintas
let x = 'abacaxi', y = 'jabuticaba'
console.log(x > y);
console.log(y > x);
//jabuticaba é maior que abacaxi porque a letra j vem depois da letra a, portanto
//é considerada maior. É comparado através da posição na tabela ASC

console.log('-----------------');
//Comparando dois objetos
let carro1 = {
    modelo: 'Fusca',
    marca: 'Volkswagen',
    ano: 1969
}
let carro2 = {
    modelo: 'Palio',
    marca: 'Fiat',
    ano: 2011
}
console.log(carro1 > carro2);
console.log(carro2 > carro1);
console.log(carro1 == carro2);


//Comparando booleanos
console.log(true > false);
console.log(false > true);

//Tipos de dados comparáveis em JS
// - Number
// - String
// - Boolean



