// quests[0].choices[0].description; ==> 'negotiate with them'


const welcomePage = {
    id: 'instructions',
    title: 'Welcome!',
    image: 'forest.jpg',
    description: `
       'The Faerie Queen needs 10 mushrooms to build her castle. You have been chosen
       as the village Mushroom Hunter. To begin your quest please type your name below 
       and enter the enchanted forest.'
    `,
    choices: [{
        id: 'enter',
        description: 'Enter the Instruction Page.',
        result: `Link to instruction page`,
        mushrooms: 0,
    }], 
};
const instructions = {
    id: 'instructions',
    title: 'Welcome!',
    image: 'forest.jpg',
    description: `
       'Welcome to the Enchanted Forest! You have been given a harvest basket and its contents
       will be shown along yout quest. Please collect mushrooms, but watch out for gnomes!
       If you touch them they will steal your collected mushrooms and you will be teleported
       to the entrance of the forest.' 
    `,
    choices: [{
        id: 'enter',
        description: 'Grab your basket and begin.',
        result: `Link to instruction page`,
        mushrooms: 0,
    }, 
    {
        id: 'refuse assignment',
        description: 'Refuse assignment.',
        result: `Link to failure page`,
        mushrooms: 0,
    }], 
};
const forestPage = {
        //MUSHROOM BUTTONS HERE,
        //IF GNOME, GO TO GNOME PAGE
        //IF MUSHROOM, PRESS "COLLECT SELECTED MUSHROOMS AND MOVE FOREWARD."
};

const gnomePage = {
    id: 'Gnome Page',
    description: 'That mushroom was a gnome!!! They stole your mushrooms, but you may continue your quest.',

    choices: [{
        id: 'continue',
        description: 'Grab your basket and begin again.',
        result: `Link to forest page`,
        mushrooms: 0,
    },
    {
        id: 'run',
        description: 'Run away!',
        result: `Link to failure page`,
        mushrooms: 0,
    }]
};

const failure = {
    id: `failure`,
    description: 'You have dissapointed the Faerie Queen and failed your village. Your wings have been taken away.',

    choices: [{
        id: 'changeYourMind',
        description: 'Change your mind and earn back your wings.',
        result: `Link to forest page`,
        mushrooms: 0,
    }],

};
   


export default quests;
