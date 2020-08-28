//Expressão de função tradicional
let quadrado = function(n){
    return n * n
}
console.log(quadrado(6));

//Expressão de função com Arrow Function
let quadrado2 = n => n * n
console.log(quadrado2(5));

//Retorna um número aleatório entre 0 e 99
let aleatorio = function(){
    return Math.floor(Math.random() * 100)
}

//Arrow function sem nenhum argumento
let aleatorio2 = () => Math.floor(Math.random() * 100)

//Situação alternativa 2: função com 1+ argumentos

//Função tradicional com 1+ argumentos
let imc = function(peso, altura){
    return peso / (altura ** 2)
}

console.log(imc(87, 1.81));

//Usando arrow function com 1+ argumentos
//o uso dos parênteses é obrigatório quando a função tem mais de 1 argumento
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc2(95, 1.81));


//Função tradicional de fatorial
let fatorial = function(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }
    return res
}
console.log(fatorial(5));

//Arrow function de fatorial
let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }
    return res
}

console.log(fatorial2(4));
