function largestSubarraySum(array){
    let currSum = 0
    let result = 0

    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0 || currSum + array[i] > -1){
            currSum += array[i]
            currSum > result ? result = currSum : null
        }else {
            currSum = 0
        }
    }

    return result
}
