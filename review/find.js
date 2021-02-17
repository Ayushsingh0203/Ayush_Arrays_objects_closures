
const items = [1, 2, 3, 4, 5, 5];
cb = ( x ) => x === "valueCompare" ? true : false;

function find(elements, cb) {
    let output = undefined;
  for ( let i = 0; i < elements.length; ++i) {
    if ( cb(elements[i]) ) { return output = elements[i] }
  }
  return output;
}
let something = [undefined,];

console.log(find(something, cb));