/* ADD GLOW EFFECT TO MUSHROOMS ON CLICK!*/
/*  

import { mushroomData } from '../data.js';
import { gnomeData } from '../data.js';
import { CART } from './constants.js';
import { setInLocalStorage } from './utils.js';

const collectButton = document.getElementById('collectButton');
const pageTwoButton = document.getElementById('pageTwoCollectButton');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

const resultsArray = [];


export function getRandomMushroom(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

while (selectionOne.id === selectionTwo.id || selectionTwo.id === selectionThree.id || selectionThree.id === selectionFour.id || 
    selectionFive === selectionSix || selectionSix === selectionSeven || selectionSeven.id === selectionOne.id) {
    selectionTwo = getRandomMushroom(mushroomData);  
    selectionThree = getRandomMushroom(mushroomData);
    selectionTwo = getRandomMushroom(mushroomData);  
    selectionThree = getRandomMushroom(mushroomData);
    selectionTwo = getRandomMushroom(mushroomData);  
    selectionThree = getRandomMushroom(mushroomData);
    selectionTwo = getRandomMushroom(mushroomData);  
    selectionThree = getRandomMushroom(mushroomData);
}

radios[0].value = selectionOne.id;
images[0].src = selectionOne.image;
radios[0].checked = false; 

radios[1].value = selectionTwo.id;
images[1].src = selectionTwo.image;
radios[0].checked = false; 

radios[2].value = selectionThree.id;
images[2].src = selectionThree.image;
radios[0].checked = false; 


for (let i = 0; i < radios.length; i++) {
    radios[i].disabled = false;
    radios[i].checked = false;
    images[i].style.opacity = 1;
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}
*/

