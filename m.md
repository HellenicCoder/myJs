<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="myJs.css">
    <title>Wawa</title>
</head>
<body>
     <div id="gameContainer">
        <h1>Tic Tac toc</h1>
        <div id="cellContainer">
           <div cellIndex="1" class="cell">O</div>
            <div cellIndex="2" class="cell"></div>
           <div cellIndex="3" class="cell"></div>
           <div cellIndex="4" class="cell"></div>
           <div cellIndex="5" class="cell"></div>
           <div cellIndex="6" class="cell"></div>
           <div cellIndex="7" class="cell"></div>
           <div cellIndex="8" class="cell"></div>
           <div cellIndex="9" class="cell"></div>
        </div>
        <h2 id="statusText"></h2>
        <button id="restartBtn">restart</button>
     </div>
    <script src="myJs.js"></script>
</body>
</html>


const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
]
let options = ["", "","", "", "", "","","", ""]
let currentPlayer = "X";
let runing = true;

function initializeGame(){}