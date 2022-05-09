const fatorial = a => {
  
  let total = 1;
  for(i = 2; i <= a; i+=1) {
    total *= i
  }
  return total
}


const fatorial2  = a => a >1 ? a * fatorial2(a-1) : 1;

console.log(fatorial(4))
console.log(fatorial2(4))

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));