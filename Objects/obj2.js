const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

function values(obj) {
    
    const values = [];
    for ( let output in obj ) {
      
      (typeof obj[output] === "function") ? null : values.push(obj[output])
    }
    return values;
  }
  console.log(values(testObject));