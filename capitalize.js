function capitalize(string) {
    let stringArray = string.split("");

    let originalFirstChar = stringArray.shift();
    let capitalizedLetter = originalFirstChar.toUpperCase();
    let capitalizedStringArray = stringArray.splice(0, 0, capitalizedLetter);

    let capitalizedString = stringArray.join("");

    return capitalizedString;
}

module.exports = capitalize;
