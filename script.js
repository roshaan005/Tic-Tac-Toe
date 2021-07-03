const container = document.getElementById("main")
const div = document.getElementById("text1")
const boxes = document.querySelectorAll("[data-box]")
const restartBtn = document.getElementById("restart")
const popUp = document.getElementById("playAgain")
const winnerText = document.getElementById("display")
const span = document.getElementById("span")
const playAgBtn = document.getElementById("btn")


playAgBtn.addEventListener("click",playAgain)
restartBtn.addEventListener("click",restartGame)
boxes.forEach(box=>box.addEventListener("click",turnManager))
boxes.forEach(box=>box.addEventListener("mouseover", function(){
    colors = ["#FF5733","#2C58CD","#FF9152" ]
     randomColor = colors[Math.floor(Math.random()*colors.length)]
     box.style.backgroundColor = randomColor
}))
boxes.forEach(box=>box.addEventListener("mouseleave", function(){
   
     box.style.backgroundColor = "orange"
}))

const Players = function(name,mark){
  this.name = name
  this.mark = mark
}

const player1 = new Players("player X","x")
const player2 = new Players("player O","O")
console.log(player1.name)
firstPlayer = {
    name:"player X",
    mark:"x"

}
secondPlayer = {
    name:"player O",

    mark:"O"
}

function displayWinner(player){
    boxes.forEach(box=>box.style.display = "none")
    popUp.style.display = "flex"
    container.classList.add("pop");
    span.textContent = `${player} won the game , wanna play again?`


}
function tieGame(){
    boxes.forEach(box=>box.style.display = "none")
    popUp.style.display = "flex"
    container.classList.add("pop");
    span.textContent =  `It was a Tie , wanna go again?`


}

gameBoard = ["","","","","","","","",""]
div.textContent = "Let's start the game with player X"
    
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });

}


array = [0,1,2,3,4,5,6,7,8]
function turnManager(e){
    if(e.target.textContent!== ""){
        return
    }
    
    
    if(array.length%2===0){
           e.target.textContent = player2.mark
           div.textContent = `${player1.name}'s person's turn`
            num1 = e.target.dataset.box
            array = arrayRemove(array , num1)
            gameBoard.splice(num1,1,player2.mark)
            console.log(gameBoard)
            
      
    }
    else if(array.length%2!==0){
        div.textContent = `${player2.name}'s person's turn`
            e.target.textContent = player1.mark
            num2 = e.target.dataset.box
            array = arrayRemove(array , num2)
            gameBoard.splice(num2,1,player1.mark)
            console.log(gameBoard)

        }


   winningConditionX = gameBoard[0]=="x"&& gameBoard[1]=="x"&&gameBoard[2]=="x"||
   gameBoard[3]=="x"&& gameBoard[4]=="x"&&gameBoard[5]=="x"||
   gameBoard[6]=="x"&& gameBoard[7]=="x"&&gameBoard[8]=="x"||
   gameBoard[0]=="x"&& gameBoard[3]=="x"&&gameBoard[6]=="x"||
   gameBoard[1]=="x"&& gameBoard[4]=="x"&&gameBoard[7]=="x"||
   gameBoard[2]=="x"&& gameBoard[5]=="x"&&gameBoard[8]=="x"||
   gameBoard[2]=="x"&& gameBoard[4]=="x"&&gameBoard[6]=="x"||
   gameBoard[0]=="x"&& gameBoard[4]=="x"&&gameBoard[8]=="x"
   winningComditionO = gameBoard[0]=="O"&& gameBoard[1]=="O"&&gameBoard[2]=="O"||
   gameBoard[3]=="O"&& gameBoard[4]=="O"&&gameBoard[5]=="O"||
   gameBoard[6]=="O"&& gameBoard[7]=="O"&&gameBoard[8]=="O"||
   gameBoard[0]=="O"&& gameBoard[3]=="O"&&gameBoard[6]=="O"||
   gameBoard[1]=="O"&& gameBoard[4]=="O"&&gameBoard[7]=="O"||
   gameBoard[2]=="O"&& gameBoard[5]=="O"&&gameBoard[8]=="O"||
   gameBoard[2]=="O"&& gameBoard[4]=="O"&&gameBoard[6]=="O"||
   gameBoard[0]=="O"&& gameBoard[4]=="O"&&gameBoard[8]=="O"

       
  if(winningConditionX){
     displayWinner("player X")


  }
  if(winningComditionO){
     displayWinner("player O")

  }
  else if(array.length==0&&!winningComditionO && !winningConditionX ){
      tieGame()

  }


  }
    
   
function restartGame(e){
    e.preventDefault()
    window.location.reload()


}
   

function playAgain(){
 window.location.reload()

}