const container = document.getElementById("main")
const div = document.getElementById("text1")
const boxes = document.querySelectorAll("[data-box]")
const restartBtn = document.getElementById("restart")
const popUp = document.getElementById("playAgain")
const winnerText = document.getElementById("display")
const span = document.getElementById("span")
const playAgBtn = document.getElementById("btn")

const players = function(name,mark){
    return{name,mark}
  }

const player1 =  players("player X","x")
const player2 = players("player O","O")

div.textContent = "Let's start the game with player X"
  

const additionalFunctions = (function(){
    playAgain = function(){
        window.location.reload()
    }
    restartGame = function(e){  
            e.preventDefault()
            window.location.reload()
        
        
        
           
    }

    return {playAgain ,restartGame}

    

})()

boxes.forEach(box=>box.addEventListener("mouseover", function(){
    colors = ["#FF5733","#2C58CD","#FF9152" ]
     randomColor = colors[Math.floor(Math.random()*colors.length)]
     box.style.backgroundColor = randomColor
}))
boxes.forEach(box=>box.addEventListener("mouseleave", function(){
   
     box.style.backgroundColor = "orange"
}))




    

const supplementaryFunctions = (function(){
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    
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
    

    return{arrayRemove,tieGame,displayWinner}

})()


   
const gamePlay = (function(){
    let gameBoard = ["","","","","","","","",""]
    let array = [0,1,2,3,4,5,6,7,8]
    turnManager = function(e){
        if(e.target.textContent!== ""){
            return
        }
        
        
        if(array.length%2===0){
               e.target.textContent = player2.mark
               div.textContent = `${player1.name}'s turn`
                num1 = e.target.dataset.box
                array = supplementaryFunctions.arrayRemove(array , num1)
                gameBoard.splice(num1,1,player2.mark)
                console.log(gameBoard)
                
          
        }
        else if(array.length%2!==0){
            div.textContent = `${player2.name}'s  turn`
                e.target.textContent = player1.mark
                num2 = e.target.dataset.box
                array = supplementaryFunctions.arrayRemove(array , num2)
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
         supplementaryFunctions.displayWinner("player X")
    
    
      }
      if(winningComditionO){
       supplementaryFunctions.displayWinner("player O")
    
      }
      else if(array.length==0&&!winningComditionO && !winningConditionX ){
          supplementaryFunctions.tieGame()
    
      }
    
    
      }

      return {turnManager}
        
       
    

    
})()


boxes.forEach(box=>box.addEventListener("click",gamePlay.turnManager))
playAgBtn.addEventListener("click",additionalFunctions.playAgain)
restartBtn.addEventListener("click",additionalFunctions.restartGame)