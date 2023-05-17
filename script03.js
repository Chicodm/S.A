alert ("Vamos iniciar um quiz e vamos ver qual vai ser o seu resultado")
let assombração = prompt("Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n A) Van Helsing \n B) Castlevania \n C) The Vampire Diaries \n D) Blade: The Series ").toUpperCase()

let pontosA = 0
let pontosB = 0
let pontosC = 0
let pontosD = 0


switch (assombração) {
    case "A":
        alert(`Van Helsing 2 pontos`)
        pontosA = 2
        break

    case "B":
        alert(`Castlevania 3 pontos`)
        pontosA = 3
        break

    case"C":
        alert('The Vampire Diaries 2 pontos')
        pontosA = 3
        break

    case"D":
        alert('Blade: The Series 1 pontos')
        pontosA = 1
        break
          
}

let fantasia = prompt("Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n A) Alice no País das Maravilhas \n B) O Hobbit \n C) A Fantástica Fábrica de Chocolates \n D) Coraline").toUpperCase()

switch (fantasia) {
    case "A":
        alert(`Alice no País das Maravilhas 4 pontos`)
        pontosB = 4
        break

    case "B":
        alert(`O Hobbit 2 pontos`)
        pontosB = 2
        break

    case"C":
        alert('A Fantástica Fábrica de Chocolates 4 pontos')
        PontosB = 4
        break

    case"D":
        alert('Coraline 3 pontos')
        PontosB = 3
        break
          
}


let nintendo = prompt("Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n A) The Legend of Zelda \n B) Kirby \n C) Metroid \n D) Super Mario Bros").toUpperCase()

switch (nintendo) {
    case "A":
        alert(`The Legend of Zelda 3 pontos`)
        pontosC = 3
        break

    case "B":
        alert(`Kirby 2 pontos`)
        pontosC = 2
        break

    case"C":
        alert(' Metroid 2 pontos')
        pontosC = 2
        break

    case"D":
        alert('Super Mario Bros 4 pontos')
        pontosC = 4
        break
          
}

let terror = prompt("Quais dos autores citados, representam melhor o gênero de livros de terror?\n A) Stephen King (4 pontos) \n B) Edgar Allan Poe \n C) H.P. Lovecraft \n D) Mary Shelley ").toUpperCase()

switch (terror) {
    case "A":
        alert(`Stephen King 4 pontos`)
        pontosD = 4
        break

    case "B":
        alert(`Edgar Allan Poe 2 pontos`)
        pontosD = 2
        break

    case"C":
        alert(' H.P. Lovecraft 3 pontos')
        pontosD = 3
        break

    case"D":
        alert('Mary Shelley 4 pontos')
        pontosD = 4
        break
          
}

soma = (pontosA + pontosB + pontosC + pontosD)
alert("A soma total foi de" + soma)

if (soma =15) {
    alert("Parabens")
}else{
    alert("")
}






