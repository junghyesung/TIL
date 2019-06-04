function findKey (start, swaps){
  if(swaps.length === 0){
    return start;
  }

  for(var i = 0; i < swaps.length; i++) {
    if( swaps[i][0] === start || swaps[i][1] === start ){
      swaps[i][0] === start ? start = swaps[i][1] : start = swaps[i][0];
    }
  }
  return start;
}


