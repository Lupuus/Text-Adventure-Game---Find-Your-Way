console.log('loading...');

const descriptionText = document.querySelector('.adventure-description');
const buttons = document.querySelectorAll('.button');
const textAdventure = [
{
    description: 'This is the adventure of Juan, who got lost in the forest when looking for his Dog that run into the forest. Juan needs your help to reunite with his dog and find his way out. Choose one of the options below',
    options: [
      'Go in the last dirction you saw your dog',
      'Look up at the sky and head towards the sun'
    ]
  },
  {
      description: 'Juan was able to find tracks of his dogs paws but see a shelter and its about to rain, what does he do now?',
    options: [
      'Follow the paws',
      'Go into the shelter, and risk lossing the tracks'
    ]
  },
  {
    description: 'Amazing, Juan has found his dog but what should he do now its still raining?',
    options: [
      'Go back to the shelter you saw',
      'Look around and risk getting lost'
    ]
  },
  {
    description: 'Juan has reach the shelter and while staying inside the rain has passed what should he do now?',
    options: [
      'Try to back where you came from'
      'Look around and risk getting lost again'
    ]
 }
]

let index = 0;

function setGameState() {
  let gameStateText = textAdventure[index];
  descriptionText.textContent = gameStateText.description;
  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    let buttonText = gameStateText.options[i];

    button.textContent = buttonText;
  }
}

function resetGame() {
  index = 0;

  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    button.removeEventListener('click', resetGame);
    button.addEventListener('click', buttonClick);  
  }

  setGameState();
}

function forward() {
  if (index == textAdventure.length - 1) {
    descriptionText.textContent = 'Juan has made it home, Thank you for playing!';
    for (let i=0, ii=buttons.length; i<ii; i++) {
      let button = buttons[i];
      button.removeEventListener('click', buttonClick);
      button.textContent = 'Play Again';
      button.addEventListener('click', resetGame);
    }
  }
  index++;
  setGameState();
}

function back() {
  if (index == 0) {
    console.log("can't go back any further!")
    return;
  }
  
  index--;
  setGameState();
}

function buttonClick(event) {
  if (event.target.id == 'first_btn') {
    forward();
  } else {
    back();
  }
}

for (let i=0, ii=buttons.length; i<ii; i++) {
  let button = buttons[i];
  button.addEventListener('click', buttonClick);  
}

setGameState();