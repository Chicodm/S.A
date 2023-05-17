let nome = prompt("Digite seu nome ")
let idade = Number(prompt("Digite a sua idade "))
let formacao = prompt("Digite a sua formacao: ")
let cidade = prompt("Digite a sua cidade: ")

let resgate
let Tratamento

if ((idade >=25 && idade <=50) && (formacao == "biologia" ||formacao == "ecologia " && cidade == florianopolis)){
    alert ("O canditato: " + nome + " está apto para resgate" )
}else{
    if ((idade >=22 && idade <=60) && (formacao == "veterinaria" && cidade == "florianopolis" )){
    alert ("O canditato: " + nome + " está apto tratamento" )
 }else
 alert(nome + " você não está apto")
}






