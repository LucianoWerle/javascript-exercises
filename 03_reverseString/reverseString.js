const reverseString = function(word) {
    let letters = word.split('');

    let lettersInverter = letters.reverse();

    let wordInverter = lettersInverter.join('');

    return wordInverter;
};

// Do not edit below this line
module.exports = reverseString;

//console.log(reverseString("gato"));