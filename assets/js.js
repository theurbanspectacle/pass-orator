var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",] 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialChar = ["!", "@", "$", "%", "&"]

var numPass = ["1", "2", "3", "4", "5", "6", "7"]

function getPassword(){
    var length = parseInt(
        prompt('Please enter your length of password. Must be between 8 and 128 characters.'),
    );
    
    var hasSpecialChar = confirm(
        "Do you want special characers?"
    );

    var hasUpperCase = confirm(
        "Do you want uppercased letters?"
    );
    
    var hasLowerCase = confirm(
        "Do you want lower case letters?"
    )

    var hasNumPass = confirm(
        "Do you want numbers?"
    );

    var getPasswordOptions = {
        length: length,
         hasSpecialChar: hasSpecialChar,
         hasUpperCase: hasUpperCase,
         hasLowerCase: hasLowerCase,
         hasNumPass: hasNumPass,
    };
    return getPasswordOptions;
    }








function getRandom(arr) {
    var randomIndex = math.floor(math.random() * arr.length);
    var randElement = arr[randomIndex];
    return randElement;
}