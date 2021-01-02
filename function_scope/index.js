var moveZeroes = function(nums) {
    let zeroNum = 0;
    for (i=0; i<nums.length; i++) {
        index = i - zeroNum;
        num = nums[index];
        if (num === 0) {
        console.log('test');

            zeroNum++;
            nums.splice(index, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,4,0,4]));