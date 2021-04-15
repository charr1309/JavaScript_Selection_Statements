let playAgain = true;

const userInput = document.querySelector("input");
const submit = document.querySelector("button");
const element = document.getElementById("guesses");
const solved = document.getElementById("solved")


let rand = 10;
let counter = 0;
  // let rand = Math.floor(Math.random() * 100) + 1;

function playGame() {
  
//   do {
    // let userInput = window.prompt("Enter a number between 1 and 10");
    console.log('working');
    counter++;
    // {
    if (userInput.value < rand) {
        // newParagraph = document.createElement("p");
        // responseText = document.createTextNode("Your answer is too low. Please try again.");
        // newParagraph.appendChild(responseText);       
        // element.appendChild(newParagraph);
        element.textContent = `count number: ${counter} Your answer is to low.`
    //   alert(`${userInput} is to low try again`);
    } else if (userInput.value > rand) {
        // newParagraph2 = document.createElement("p");
        // responseText = document.createTextNode("Your answer is too high. Please try again.");
        // newParagraph2.appendChild(responseText);
        // element.appendChild(newParagraph2);
        element.textContent = `count number: ${counter} Your answer is to high.`
    //   alert(`${userInput} is to high try again`);
    } else {
        element.textContent = `count number: ${counter}`
        solved.textContent = " Congratulations!!!"
      playAgain = false;
    }
    userInput.value = "";
// }    
//   } while (playAgain);

//   let again = confirm("Play again?");
//   if (again == true) {
//     playAgain = true;
//     playGame();
//   }
    }
// playGame();
submit.onclick = playGame;

// let playAgain = true;
// function playGame() {
//   let rand = 10;
//   // let rand = Math.floor(Math.random() * 100) + 1;
//   do {
//     let userInput = window.prompt("Enter a number between 1 and 10");
//     if (userInput < rand) {
//       alert(`${userInput} is to low try again`);
//     } else if (userInput > rand) {
//       alert(`${userInput} is to high try again`);
//     } else {
//       alert("Congratulations");
//       playAgain = false;
//     }
//   } while (playAgain);

//   let again = confirm("Play again?");
//   if (again == true) {
//     playAgain = true;
//     playGame();
//   }
// }
// playGame();