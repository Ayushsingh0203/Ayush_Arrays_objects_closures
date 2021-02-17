const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function pairs(obj) {
    
    return Object.entries(obj);
  }
  console.log(pairs(testObject));