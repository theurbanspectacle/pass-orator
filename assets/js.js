var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialChar = ["!", "@", "$", "%", "&"]

var numPass = ["1", "2", "3", "4", "5", "6", "7"]

function getPassword(){
    var length = parseInt(
        prompt('Please enter your length of password. Must be between 8 and 128 characters.'),
        12
    );
    
    var hasSpecialChar = confirm(
        "Do you want special characers?"
    );

    var hasUpperCase = confirm(
        "Do you want uppercased letters?"
    );
    
    var hasLowerCase = confirm(
        "Do you want lower case letters?"
    );

    var hasNumPass = confirm(
        "Do you want numbers?"
    );

    var passwordOptions = {
        length: length,
         hasSpecialChar: hasSpecialChar,
         hasUpperCase: hasUpperCase,
         hasLowerCase: hasLowerCase,
         hasNumPass: hasNumPass,
    };
    return passwordOptions;
    }

function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randomIndex];

    return randElement;
}

function generatePassword(){
    var options = getPassword();
    var result = [];
    var possibleChar = [];

    var ensureChar = [];

    if (options.hasSpecialChar) {
        possibleChar = possibleChar.concat(specialChar);
        ensureChar.push(getRandom(numPass));
    }

    if (options.hasNumPass){
        possibleChar = possibleChar.concat(lowerCase);
        ensureChar.push(getRandom(numPass));
    }
    if (options.hasUpperCase) {
        ensureChar = ensureChar.concat(upperCase);
        ensureChar.push(getRandom(upperCase));
    }
    
    for (var i = 0; i < options.length; i++) {
        var possibleChar = getRandom(possibleChar);

        result.push(possibleChar);
    }

    for (var i = 0; i < ensureChar.length; i++) {
        result[i] = ensureChar[i];
    }

    return result.join('')
}

var generateButton = document.querySelector('#generateB');

function writePassword(){
    var password = generatePassword();
    var passWordText = document.querySelector('#passwordText')
    passWordText.value = password;
}
generateButton.addEventListener('click', writePassword);