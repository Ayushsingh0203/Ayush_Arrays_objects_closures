const items = [1, 2, 3, 4, 5, 5];





function cb(rdc, value){
  return rdc +=value
}


function reduce(elements, cb, startingValue) {
    
  
  let index = startingValue || 0;
  
  const control = elements[index];
  
  let rdc = control;
  for ( let i = index+1; i < elements.length; ++i ) {
    rdc = cb(rdc, elements[i] )
  }
  
  return rdc;
}

console.log(reduce(items, cb));
