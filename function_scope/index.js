/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // [7,2,5,3,6,4,1]
//  差分を持っておく必要がある？
// →そうか全ての値で最大値を持っておけばいいんだ
var isValid = function(s) {
    const letterSets =  {'(':')', '{':'}', '[':']'};
    const guess = [];
    for (i = 0; i < s.length; i++){
        console.log(letterSets.hasOwnProperty(s[i]));

        if (s.hasOwnProperty(s[i])) {
            
            guess.push(letterSets[s[i]]);
        } else {
            if(guess[guess.length - 1] === s[i]){
                guess.pop();
            }else{
                return false;
            }
        }
    }
    
    if(guess.length > 0){
       return false;
    }
    return true;
};


console.log(isValid("()"));