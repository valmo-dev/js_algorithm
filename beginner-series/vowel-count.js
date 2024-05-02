const getCount = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsNb = 0;

    const lowerCaseStr = str.toLowerCase();

    const vowelsArr = lowerCaseStr
        .split("")
        .filter((char) => vowels.includes(char));

    vowelsNb = vowelsArr.length;

    return vowelsNb;
};

// Clever solution with `match()` method to find vowels inside `str` with regex `/[aeiou]/ig`. `i` is for case insensitive and `g` is to find every occurrence inside string.
// `match()` method return an array with correspondence. To avoid error when we use `length` property on `null` object, we are using `||` to have an empty array `[]` if `match()` return `null`

/* 
    function getCount(str) {
        return (str.match(/[aeiou]/gi) || []).length;
    } 
*/
