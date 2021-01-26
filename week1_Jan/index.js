//Palindrome Permutation
//Given a String, determine if a permutation of the string could form a palindrome

//Hint 1: Consider the palindromes of odd vs even length. What difference do you notice?
//Hint 2: Count the frequency of each character.
//Hint 3: If each character occurs even number of times, then it must be a palindrome. How about character which occurs odd number of times?

let string = 'diuguid';
console.log(string.length);

//Need to check if the length is even or odd
if(string.length % 2 == 0) {
    console.log("the number is even");
} else {
    console.log("the number is odd");
}

//Count the frequency of each character
function getFrequency() {
    let freq = {};
  for (let i=0; i< string.length; i++) {
      let letter = string.charAt(i);
      if(freq[letter]) {
          freq[letter]++;
      } else {
          freq[letter] = 1;  
      }
  }
  return freq;
}

let freqArray = getFrequency();
console.log(freqArray);
