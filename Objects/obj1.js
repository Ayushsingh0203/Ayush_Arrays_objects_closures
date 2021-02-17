const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions


function keys(obj) {
    return Object.keys(obj);
}
console.log(keys(testObject));