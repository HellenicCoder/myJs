const MySquare = document.querySelectorAll(".square")
const MyMole = document.querySelector(".mole")
const TimeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0;
let IdPosition;
let currentTime = 60;
function randomSquare(){
    MySquare.forEach((square) => {
        square.classList.remove("mole")
    })
    let RandomMath = Math.floor(Math.random() * MySquare.length)
    let MyRandomPosition = MySquare[RandomMath]
    IdPosition = MyRandomPosition.id
    MyRandomPosition.classList.add("mole")
}

MySquare.forEach(square => {
    square.addEventListener("mousedown", () => {
        if(square.id == IdPosition){
            result++
            score.textContent = result
            IdPosition = null
        }
    })
})
function moveMole(){
    timerId = setInterval(randomSquare , 500)
}
moveMole()
// randomSquare()

function CountDown(){
   currentTime--;
   TimeLeft.textContent = currentTime;
   if(currentTime == 0){
    clearInterval(counterDownTimerId)
    clearInterval(timerId)
    alert(`GAME OVER! YOUR FINAL SCORE IS ${result}`)
   }
}

let counterDownTimerId = setInterval(CountDown, 1000)