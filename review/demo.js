let dwarves = ['bifur', 'bofur', 'bombur', 'fili', 'kili', 'oin', 'gloin', 'thorin', 'balin', 'dwalin', 'nori', 'dori'];


let nameLengths = dwarves.map(function(item,index, array){

  return item.length;
});

console.log(nameLengths);