const reverseString = function(reverseWord) {
    let myArray = reverseWord.split("");
    let newArray = myArray.reverse();
    let formattedWord = '';

    for (i in newArray){
        formattedWord += newArray[i];
    }

    return formattedWord;
};

let word = "hello";
reverseString(word);

// Do not edit below this line
module.exports = reverseString;
