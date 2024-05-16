/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test" 
*/

const spinWords = (string) => {
    const stringToArr = string.split(" ");
    const wordSpin = stringToArr.map((word) => {
        return word.length >= 5 ? word.split("").reverse().join("") : word;
    });
    return wordSpin.join(" ");
};

/* Cleaner solution could be
const spinWords = (words) => {
    return words.split(' ').map(word => {
        return word.length > 4 ? word.split("").reverse().join("") : word;
    }).join(" ")
}
*/

/* Clever solution with regex
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
*/
