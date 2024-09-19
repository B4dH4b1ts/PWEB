let x = parseFloat(prompt("Primeiro numero: "));
let y = parseFloat(prompt("Segundo número: "));

function soma(){
    return x + y;
}

function subtracao(){
    return x - y;
}

function produto(){
    return x * y;
}

function divisao(){
    return x / y;
}

function resto(){
    return x % y;
}

alert(`Soma: ` + soma() + ` Subtração: ` + subtracao() + ` Multiplicação: ` + produto() + ` Divisão: ` + divisao() + ` Resto: ` + resto());