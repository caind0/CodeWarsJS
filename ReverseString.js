var string = "reverse this string";
function reverseString(str){
    //split string into char -> array
    //reverse method and join to return as string
    var temp = str.split('');
    return temp.reverse().join('');
}

console.log(reverseString(string));