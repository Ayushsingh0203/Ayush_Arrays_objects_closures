
const nestedArray = [1, [2], [[3]], [[[4]]]];

function flatten(elements) {
    
    let toFlat = [];
    
    function removeArray ( item ) {
      Array.isArray( item ) ? checkItems(item) : toFlat.push(item); 
    }
    
    function checkItems ( array ) {
      for ( let item of array ) {
        console.log(item);
        removeArray( item );
      }
    }
  
    checkItems(elements);
    return toFlat;
  
  
  }
  
  console.log(flatten(nestedArray));