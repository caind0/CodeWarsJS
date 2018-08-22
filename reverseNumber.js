function reverseNumber(n) {
    var sign =1;
    if(n < 0){
        sign = -1;
    }
    var num = Math.abs(n)
    var result = num.toString().split('');
    return parseInt(result.reverse().join(''))*sign;
}

console.log(reverseNumber(-1010));
console.log(reverseNumber(5432010));