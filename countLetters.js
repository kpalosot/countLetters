function countLetters(string){
  var outputObject = {};

  var newString = string.split(" ").join("").toLowerCase();

  for (var i = 0; i < newString.length; i++) {
    if(Object.keys(outputObject).includes(newString[i])){
      outputObject[newString[i]] ++;
    } else {
      outputObject[newString[i]] = 1;
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));