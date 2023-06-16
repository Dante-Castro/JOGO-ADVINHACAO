// variáveis da aplicação
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// função calback
function handleTryClick(event){
  event.preventDefault()  

  const inputNumber = document.querySelector("#inputNumber") //aqui estou guardando o valor do input
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h1").innerText = `Você acertou em ${xAttemps} tentativas`    
  }  

  inputNumber.value = ""
  xAttemps++ 
}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1
}
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}