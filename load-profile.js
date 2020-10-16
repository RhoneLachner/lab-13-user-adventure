import { getUser } from '../data/api.js';


function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const mushrooms = document.getElementById('mushrooms');
    

    /* initialize: load and parse json with user from local storage */
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
  

}

export default loadProfile;
