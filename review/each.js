const items = [1, 2, 3, 4, 5, 5];
 

 function cb(x){
   console.log(x-1)
}
    
function each(elements, cb) {
    for ( let value of  elements ) {
        cb( value );
      }
    }
    each(items, cb);

    
