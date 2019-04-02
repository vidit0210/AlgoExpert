//This Solution Proposes O(n^2) solution for the naive code
function twoNumberSum(array,targetSum){
    for(let i=0;i<array.length;i++){
        let firstNum = array[i];
        for(let j=i+1;j<array.length;j++){
            let secondNum =array[j]
            if(firstNum+secondNum === targetSum){
                return [firstNum,secondNum].sort((a,b)=>a-b);
            }
        }
    }
return [];
}