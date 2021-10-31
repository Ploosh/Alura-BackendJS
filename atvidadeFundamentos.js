console.log('01. Tipos primitivos');

const nome = 'Ferna';
const sobrenome = 'Fonseca';
const idade = 25
const bacharel = true;
const dezAnosDepois = 35;

console.log(nome + sobrenome);
console.log(idade + dezAnosDepois);
console.log(bacharel == 0);

console.log('02. Declarando variáveis');

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)
    
}

console.log(respostaDeTudo, idade, pi)

console.log('05. Funções Q1');

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))

const exibeListaCorreta = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
    return e
}

console.log(exibeListaCorreta(listaFuncionarios, 'Funcionário: '))
console.log(exibeListaCorreta(listaIdades, "Idades: "))

console.log('05. Funções Q2');

function comParametro(param) {
    console.log(param)
}
comParametro()