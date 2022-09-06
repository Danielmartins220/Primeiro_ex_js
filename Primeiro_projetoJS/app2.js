const prompt = require("prompt-sync")()

let idade = Number("digite sua idade: ")

let resp = prompt("ja fez aniversario esse ano? s/n :" )

let nasc = Int


if (resp == "s"){
    nasc = anoatual - idade
} else {
    nasc = anoatual - (idade + 1)
}
console.log("O seu ano de nascimento é "+ nasc)
