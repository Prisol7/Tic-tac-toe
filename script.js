//document.getElementById("1").style.pointerEvents = "none";
const box1 = document.getElementById("1")
const box2 = document.getElementById("2")
const box3 = document.getElementById("3")
const box4 = document.getElementById("4")
const box5 = document.getElementById("5")
const box6 = document.getElementById("6")
const box7 = document.getElementById("7")
const box8 = document.getElementById("8")
const box9 = document.getElementById("9")
const modal = document.getElementById("myModal");
const winner = document.getElementById('winner')



const resetButton = document.getElementById('reset')
const restartButton = document.getElementById('restart')

let turn = 0

const declareWinner = (winner1) => {

  
    modal.style.display = "block";
    
    winner.innerHTML = `${winner1} Wins`
 
}

const valdateTurn = () => {
    if(turn == 9){
        box1.style.pointerEvents = "auto";
        box2.style.pointerEvents = "auto";
        box3.style.pointerEvents = "auto";
        box4.style.pointerEvents = "auto";
        box5.style.pointerEvents = "auto";
        box6.style.pointerEvents = "auto";
        box7.style.pointerEvents = "auto";
        box8.style.pointerEvents = "auto";
        box9.style.pointerEvents = "auto";
        box1.innerHTML = ''
        box2.innerHTML = ''
        box3.innerHTML = ''
        box4.innerHTML = ''
        box5.innerHTML = ''
        box6.innerHTML = ''
        box7.innerHTML = ''
        box8.innerHTML = ''
        box9.innerHTML = ''
        
        
        turn = 0
    
    }
}
 
const reset = () => {



    box1.style.pointerEvents = "auto";
    box2.style.pointerEvents = "auto";
    box3.style.pointerEvents = "auto";
    box4.style.pointerEvents = "auto";
    box5.style.pointerEvents = "auto";
    box6.style.pointerEvents = "auto";
    box7.style.pointerEvents = "auto";
    box8.style.pointerEvents = "auto";
    box9.style.pointerEvents = "auto";
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
    
    console.log('hellow rodl')
    turn = 0
    

}





const checkWinEven = (boxSelection) => {
    switch (boxSelection) {
        case '1':
            if (box2.innerHTML == 'x' && box3.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box5.innerHTML == 'x' && box9.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box4.innerHTML == 'x' && box7.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            
            break;
        case '2':
            if (box1.innerHTML == 'x' && box3.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box5.innerHTML == 'x' && box8.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
             
            break;
    
        case '3':
            if (box5.innerHTML == 'x' && box7.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box1.innerHTML == 'x' && box2.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box5.innerHTML == 'x' && box9.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            break;
    
        case '4':
            if (box1.innerHTML == 'x' && box7.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box5.innerHTML == 'x' && box6.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            break;

        case '5':
            if (box4.innerHTML == 'x' && box6.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box3.innerHTML == 'x' && box7.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box2.innerHTML == 'x' && box8.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box1.innerHTML == 'x' && box9.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            
            break;

        case '6':
            if (box4.innerHTML == 'x' && box6.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box3.innerHTML == 'x' && box7.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            break;
        
        case '7':
            if (box5.innerHTML == 'x' && box3.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box1.innerHTML == 'x' && box4.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box8.innerHTML == 'x' && box9.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            
            break;
        
        case '8':
            if (box7.innerHTML == 'x' && box9.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box2.innerHTML == 'x' && box5.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            break;

        case '9':
            if (box3.innerHTML == 'x' && box6.innerHTML =='x') {
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box1.innerHTML == 'x' && box5.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            else if(box7.innerHTML == 'x' && box8.innerHTML == 'x'){
                console.log('x wins')
                reset()
                declareWinner('X')
            }
            break;
        
        default:
            break;
    }


}

const checkWinOdd = (boxSelection) => {
    switch (boxSelection) {
        case '1':
            if (box2.innerHTML == 'o' && box3.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box5.innerHTML == 'o' && box9.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box4.innerHTML == 'o' && box7.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            
            break;
        case '2':
            if (box1.innerHTML == 'o' && box3.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box5.innerHTML == 'o' && box8.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
             
            break;
    
        case '3':
            if (box5.innerHTML == 'o' && box7.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box1.innerHTML == 'o' && box2.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box5.innerHTML == 'o' && box9.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            break;
    
        case '4':
            if (box1.innerHTML == 'o' && box7.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box5.innerHTML == 'o' && box6.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            break;

        case '5':
            if (box4.innerHTML == 'o' && box6.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box3.innerHTML == 'o' && box7.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box2.innerHTML == 'o' && box8.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box1.innerHTML == 'o' && box9.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            
            break;

        case '6':
            if (box4.innerHTML == 'o' && box6.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box3.innerHTML == 'o' && box7.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            break;
        
        case '7':
            if (box5.innerHTML == 'o' && box3.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box1.innerHTML == 'o' && box4.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box8.innerHTML == 'o' && box9.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            
            break;
        
        case '8':
            if (box7.innerHTML == 'o' && box9.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box2.innerHTML == 'o' && box5.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            break;

        case '9':
            if (box3.innerHTML == 'o' && box6.innerHTML =='o') {
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box1.innerHTML == 'o' && box5.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            else if(box7.innerHTML == 'o' && box8.innerHTML == 'o'){
                console.log('o wins')
                reset()
                declareWinner('O')
            }
            break;
        
        default:
            break;
    }


}





const AdvanceTurn = (box) => {
    switch (box) {
        case 'box1':
            if(turn % 2 == 0){
                console.log('even')
                
                box1.innerHTML = 'x'
                checkWinEven('1')
                turn++
                
            }
            else{
                console.log('odd')
                box1.innerHTML = 'o'
                checkWinOdd('1')
                turn++
            }
            box1.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box2':
            if(turn % 2 == 0){
                console.log('even')
                box2.innerHTML = 'x'
                checkWinEven('2')
                turn++
            }
            else{
                console.log('odd')
                box2.innerHTML = 'o'
                checkWinOdd('2')
                turn++
            }
            box2.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box3':
            if(turn % 2 == 0){
                console.log('even')
                box3.innerHTML = 'x'
                checkWinEven('3')
                turn++
            }
            else{
                console.log('odd')
                box3.innerHTML = 'o'
                checkWinOdd('3')
                turn++
            }
            box3.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box4':
            if(turn % 2 == 0){
                console.log('even')
                box4.innerHTML = 'x'
                checkWinEven('4')
                turn++
            }
            else{
                console.log('odd')
                box4.innerHTML = 'o'
                checkWinOdd('4')
                turn++
            }
            box4.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box5':
            if(turn % 2 == 0){
                console.log('even')
                box5.innerHTML = 'x'
                checkWinEven('5')
                turn++
            }
            else{
                console.log('odd')
                box5.innerHTML = 'o'
                checkWinOdd('5')
                turn++
            }
            box5.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box6':
            if(turn % 2 == 0){
                console.log('even')
                box6.innerHTML = 'x'
                checkWinEven('6')
                turn++
            }
            else{
                console.log('odd')
                box6.innerHTML = 'o'
                checkWinOdd('6')
                turn++
            }
            box6.style.pointerEvents = "none";
            valdateTurn()
            break;

        case 'box7':
            if(turn % 2 == 0){
                console.log('even')
                box7.innerHTML = 'x'
                checkWinEven('7')
                turn++
            }
            else{
                console.log('odd')
                box7.innerHTML = 'o'
                checkWinOdd('7')
                turn++
            }
            box7.style.pointerEvents = "none";
            valdateTurn()
            break;
        case 'box8':
            if(turn % 2 == 0){
                console.log('even')
                box8.innerHTML = 'x'
                checkWinEven('8')
                turn++
            }
            else{
                console.log('odd')
                box8.innerHTML = 'o'
                checkWinOdd('8')
                turn++
            }
            box8.style.pointerEvents = "none";
            valdateTurn()
            break;

        case 'box9':
            if(turn % 2 == 0){
                console.log('even')
                box9.innerHTML = 'x'
                checkWinEven('9')
                turn++
            }
            else{
                console.log('odd')
                box9.innerHTML = 'o'
                checkWinOdd('9')
                turn++
            }
            box9.style.pointerEvents = "none";
            valdateTurn()
            break;
        default:
            break;
    }

}

box1.addEventListener('click', () => {
    box1.innerHTML = 'x'
    AdvanceTurn('box1')
})
box2.addEventListener('click', () => {
    AdvanceTurn('box2')
})
box3.addEventListener('click', () => {
    AdvanceTurn('box3')
})
box4.addEventListener('click', () => {
    AdvanceTurn('box4')
})
box5.addEventListener('click', () => {
    AdvanceTurn('box5')
})
box6.addEventListener('click', () => {
    AdvanceTurn('box6')
})
box7.addEventListener('click', () => {
    AdvanceTurn('box7')
})
box8.addEventListener('click', () => {
    AdvanceTurn('box8')
})
box9.addEventListener('click', () => {
    AdvanceTurn('box9')
})

resetButton.addEventListener('click', reset)
restartButton.addEventListener('click', () => {
    reset()
    modal.style.display = "none";
}
    )

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      
    }
  }