
let playAgain = true;
function playGame(){
let rand = 10;
do{
let userInput = window.prompt('Enter a number between 1 and 10');
    if (userInput < rand){
        alert(`${userInput} is to low try again`);
    }else if(userInput > rand){
        alert(`${userInput} is to high try again`);
    }else
        alert('Congratulations');
        let again = confirm('Play again?');
            if (again == true){
                playAgain = true;
            }else {
                playAgain =  false;
            }
            
    }while(playAgain);
} 




playGame();
