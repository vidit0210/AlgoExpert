function threeNumberSum(array, targetSum) {
    array.sort((a,b)=>a-b);
    let result=[];
    for(let i =0;i<array.length;i++){
        let left = i+1;
        let right = array.length-1;
        while(left<right){
            let cuurentSum = array[i] + array[left] + array[right];
            if(cuurentSum===targetSum){
                result.push([array[i],array[left],array[right]]);
                left++;
                right--
            }else if (cuurentSum<targetSum){
                left++;
            }else{
                right--;
            }
        }
    }
   return result;
}