
let qualidade = Number(prompt("Digite a nota da qualidade do seu produto"))
let CustoBeneficio = Number(prompt("Digite a nota do custo beneficio do seu produto"))
let durabilidade = Number(prompt("Digite a nota da durabilidade do seu produto"))



 let media = (Number(qualidade + CustoBeneficio + durabilidade) / 3).toFixed(2)


 switch (true) {
    case media < 5:
      alert("A media foi: " + media + " Não ganha destaque: " )
      break
  
    case media >= 5 && media <= 7:
      alert ("A media foi: " + media+ " Destaque na página da categoria: ")
      break
  
    case media > 7 && media <= 9:
      alert("A media foi: " + media + " Destaque em promoções")
      break
  
    case media >9:
      alert ("A media foi: " + media + " Destaque na página principal")
      break
  }

