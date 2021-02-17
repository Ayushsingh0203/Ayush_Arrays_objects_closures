const items = [1, 2, 3, 4, 5, 5];

cb = ( x ) => x === "anyFilter" ? true : false;


function filter(elements, cb) {
    let filtered =[];
  for ( let value of elements ){
    cb(value) ? filtered.push(value) : null;
  }
  return filtered;
}

console.log(filter(items,cb));