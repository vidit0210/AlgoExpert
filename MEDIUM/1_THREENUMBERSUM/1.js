
function threeNumberSum(array, targetSum) {
    // Write your code here.
    let arr=[]
    for(let i=0;i<array.length;i++){
        let firstNum = array[i];
        for(let j=i+1;j<array.length;j++){
            let secondNum=array[j];
            for(let k=j+1;k<array.length;k++){
                let thirdNum = array[k];
                let sum = firstNum+secondNum+thirdNum;
                if(sum===targetSum){
                    arr.push([firstNum,secondNum,thirdNum].sort((a,b)=>a-b))
                }
            }
        }
    }
   return arr;
    
  }