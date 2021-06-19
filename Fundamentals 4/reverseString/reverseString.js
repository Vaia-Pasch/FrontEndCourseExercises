const reverseString = function(string) {
   let newString = string.split("").reverse().join("");
   return newString;

}

module.exports = reverseString
