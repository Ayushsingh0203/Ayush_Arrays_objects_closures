
const items = [1, 2, 3, 4, 5, 5];


function cb(x){
  return x*4
}

    
function map(elements, cb) {
    let returnOutput = [];
  for (  let val of elements ){
    returnOutput.push(cb(val));
  }
  return returnOutput;
}
console.log(map(items, cb));



