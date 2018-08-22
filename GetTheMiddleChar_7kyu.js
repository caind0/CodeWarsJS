/*Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(s)
{
    for(var i=0;i<s.length;i++){
        if(s.length % 2 === 0){
            return s[(s.length/2) -1] + s[s.length/2]
        }
        return s[Math.floor(s.length/2)];
    }
}

console.log(getMiddle('A'));