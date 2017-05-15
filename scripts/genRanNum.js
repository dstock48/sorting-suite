function genRanNum (limit) {
  let numArray = [];

  for (var i = 0; i < limit; i++) {
    let randomNumber = Math.floor(Math.random() * ((100 - 1) + 1)) + 1;

    numArray.push(randomNumber)
  }

  return numArray;
}

export default genRanNum
