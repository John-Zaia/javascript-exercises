const repeatString = function(word, num) {
    let repeatWord = '';

    if (num < 0){
        return repeatWord = "ERROR";
    }
    
    for (i = 0; i < num; i++){
        repeatWord += word;
    }

    return repeatWord;
};



// Do not edit below this line
module.exports = repeatString;
