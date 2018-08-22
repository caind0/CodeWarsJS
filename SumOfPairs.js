/*

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.



sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

 */

var arr =[ 1,2,3,4,5];


// while(counter !== arr.length){
//     console.log('counter is '+counter)
//     for(var i=0;i<arr.length;i++){
//         console.log(arr[counter]+' '+arr[i+1] || 0);
//     }
//     counter++;
// }

//comparing one element to every other element one at a time
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        console.log(arr[i]+' + '+arr[j]);
    }
}

var l1= [1, 4, 8, 7, 3, 15];

var sum_pairs=function(ints, s) {
    var result = [];
    //loop through array using nested loop to compare one element with every other element one at a time
    for (let i = 0; i < ints.length; i++) {
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                var obj = {};
                obj[j] = [ints[i], ints[j]];
                result.push(obj)
            }
        }
    }
    //console.log(result);
    //console.log(j);
    var smallest = Number(Object.keys(result[0]));
    //console.log('smallest is '+smallest)

    if (result.length === 0) {
        return undefined
    } else if (result.length === 1) {
        return result[0][smallest];
    } else {

        for (let i = 0; i < result.length; i++) {
            var compare = Number(Object.keys(result[i]));
            if (compare < smallest) {
                return result[i][compare];
            } else {
                return result[i][smallest];
            }
        }
    }
}

console.log(sum_pairs([4, 3, 2, 3, 4],         6));