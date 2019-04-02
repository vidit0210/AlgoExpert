//Time O(n) 
// Space O(n)

function twoNumberSum(array,targetSum){
    const nums ={};
    for (num of array){
        let potentialMatch = targetSum-num;
        if(potentialMatch in nums){
            return [potentialMatch,num].sort((a,b)=>a-b)
        }else{
            nums[num]=true;
        }
    }
    return []

}