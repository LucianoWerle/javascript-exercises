const palindromes = function (string) {
    //convert word to lowercase.
    string = string.toLowerCase();
    //create a new variable with the reverse word.
    let reverseString = string.split('').reverse().join('');
    //compare string with reverse string and return true or false.
    if (string === reverseString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
