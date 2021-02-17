const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

 

 function cb(a){
     return "joker: " + a
 } 
function mapObject(obj, cb) {
  
  const batman = {}
  for ( let out in obj ){
    batman[out] = cb(obj[out]);
  }
  return batman;
}
console.log(mapObject(testObject, cb));