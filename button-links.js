// import functions and grab DOM elements
import { findById } from './findById.js';

const beginQuestButton = document.getElementById('beginQuestButton');
const enterForestButton = document.getElementById('enterForestButton');
const collectButton = document.getElementById('collectButton');
const changeMindButton = document.getElementById('changeMindButton');
const refuseButton = document.getElementById('refuseAssignmentButton');
const runAwayButton = document.getElementById('runAwayButton');
const beginAgainButton = document.getElementById('beginAgainButton');
const restartGameButton = document.getElementById('restartGameButton');

const mushroomRadio = document.querySelector('mushroom');
const gnomeRadio = document.querySelector('gnome');
// initialize state

// set event listeners to update state and DOM

beginQuestButton.addEventListener('click', () => {
    window.location.href = './forest-pages/forest.html';
});

enterForestButton.addEventListener('click', () => {
    window.location.href = './instructions-page/instructions.html';
});

refuseButton.addEventListener('click', () => {
    window.location.href = './failure-page/failure.html';
});

runAwayButton.addEventListener('click', () => {
    window.location.href = './failure-page/failure.html';
});

changeMindButton.addEventListener('click', () => {
    window.location.href = './instructions-page/instructions.html';
});

beginAgainButton.addEventListener('click', () => {
    window.location.href = './forest-pages/forest.html';
});


collectButton.addEventListener('click', () => {
    if (mushroom === 3) {
        setInLocalStorage(CART, resultsArray);
        location.href = './completion-page/completion.html';
    }
});
///have access to mushroom state. put in same file as mushroom, and import things in red
mushroomRadio.addEventListener('click', () => {
    if (mushrooms += 1) {
        setInLocalStorage(CART, resultsArray);
        location.href = './completion-page/completion.html';
    }
});
gnomeRadio.addEventListener('click', () => {
    setInLocalStorage(CART, resultsArray);
      //SET MUSHROOM COUNT TO 0 IN LOCAL STORAGE. HOW?????
    location.href = './gnome-page/gnome.html';
    
});
restartGameButton.addEventListener('click', () => {
    
    clearLocalStorage(CART, resultsArray);
    location.href = './welcome-page/welcome.html';
     
});
