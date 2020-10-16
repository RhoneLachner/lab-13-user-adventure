

// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        mushrooms: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    mushrooms: 0,
    completed: {}
});

export default makeUser;
