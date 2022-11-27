var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChar = ["!", "@", "$", "%", "&"];

var numPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getPasswordRule() {
    var length = Number(prompt('Please enter your length of password. Must be between 8 and 128 characters.'));

    if (isNaN(length) || length < 8 || length > 128) {
        alert('Must be between 8 and 128.');
        return;
    }

    var hasSpecialChar = confirm("Do you want special characers?");
    var hasUpperCase = confirm("Do you want uppercased letters?");
    var hasLowerCase = confirm("Do you want lower case letters?");
    var hasNumPass = confirm("Do you want numbers?");

    if (!hasLowerCase && !hasNumPass && !hasUpperCase && !hasSpecialChar) {
        alert("Must include at least one option.");
        return;
    }

    return {
        length: length,
        hasSpecialChar: hasSpecialChar,
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
        hasNumPass: hasNumPass,
    };
}

function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randomIndex];

    return randElement;
}

function generatePassword() {
    var options = getPasswordRule();

    if (!options) {
        return;
    }

    var result = [];
    var possibleChar = [];
    var ensureChar = [];

    if (options.hasSpecialChar) {
        possibleChar = possibleChar.concat(specialChar);
        ensureChar.push(getRandom(specialChar));
    }

    if (options.hasNumPass) {
        possibleChar = possibleChar.concat(numPass);
        ensureChar.push(getRandom(numPass));
    }

    if (options.hasUpperCase) {
        possibleChar = possibleChar.concat(upperCase);
        ensureChar.push(getRandom(upperCase));
    }

    if (options.hasLowerCase) {
        possibleChar = possibleChar.concat(lowerCase);
        ensureChar.push(getRandom(lowerCase));
    }

    for (var i = 0; i < options.length; i++) {
        result.push(getRandom(possibleChar));
    }

    for (var i = 0; i < ensureChar.length; i++) {
        result[i] = ensureChar[i];
    }

    return result.join('');
}

function writePassword() {
    var password = generatePassword();
    var passWordText = document.querySelector('#passwordText')
    passWordText.value = password || '';
}

var generateButton = document.querySelector('#generateB');
generateButton.addEventListener('click', writePassword);