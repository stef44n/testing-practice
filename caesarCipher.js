function caesarCipher(string) {
    let stringArray = string.split(""); //string split into array of single letters
    let wordCiphered = [];
    for (let i = 0; i < stringArray.length; i++) {
        let charAtArr = stringArray[i].charCodeAt(0);

        if (charAtArr >= 97 && charAtArr <= 122) {
            //lowercase letters
            let letterPlus5 = charAtArr + 5;
            if (letterPlus5 > 122) {
                letterPlus5 = letterPlus5 - 26;
            }
            let letterAtArr = String.fromCharCode(letterPlus5);
            wordCiphered.push(letterAtArr);
        }
    }
    let decipheredString = wordCiphered.join("");
    console.log(decipheredString);

    return decipheredString;
}

module.exports = caesarCipher;

//char codes A-Z --> 65-90
//char codes a-z --> 97-122
