var arr = [11,16,5,1]
function sumOfDifferences(arr) {
//sort the array descending order (b - a)
    var temp = arr.sort(function(a,b){
        return b - a;
    })
console.log(temp)
//loop through and minus each
    var sum=0;
    for(var i=0;i<temp.length;i++){
        sum+=temp[i]-temp[i+1] || 0;
    }
    return sum
}

console.log(sumOfDifferences(arr));