function genRanNum (limit, min = 1, max = 100) {
  let numArray = [];

  for (var i = 0; i < limit; i++) {
    let randomNumber = Math.floor((Math.random()) * ((max - min) + min)) + 1;
    
    randomNumber *= Math.random() < 0.5 ? -1 : 1;
    numArray.push(randomNumber)
  }
  return numArray;
}

export default genRanNum
