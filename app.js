// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot(hidingPlaces);

    handleGuess(correctSpot, 'shed');
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot(hidingPlaces);

    handleGuess(correctSpot, 'tree');
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot(hidingPlaces);

    handleGuess(correctSpot, 'boulder');
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

function getRandomHidingSpot(arr) {
    // initialize state

    const index = Math.floor(Math.random() * hidingPlaces.length);
    
    // use the random index above and the array of hidingPlaces to get a random hiding place string
    
    // return that random hiding place string
    return arr[index];
}


function handleGuess(correctSpot, userGuess) {
    //console.log(userGuess, correctSpot);
    // first, right after clicking, we need to remove the emoji face from the previous hiding place that way we don't end up with more than one emoji face
    // we can do that by removing the .face class from all containers
    resetStyles();
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const correctHidingSpotEl = document.getElementById(`${correctSpot}-container`);
    // then add the .face css class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    correctHidingSpotEl.classList.add('face');
    // update the DOM to show the new value of wins, losses and total guesses to the user
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

// function setStyles() {
//     shedContainer.classList.add('face');
//     treeContainer.classList.add('face');
//     boulderContainer.classList.add('face');
// }

function resetStyles() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}
