

const bulbs = (arr)=>{
    // [ 0  1  0   1]  count = 0 
    let count = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === 1 && count % 2 === 0) continue;
        else if(arr[i] === 0 && count % 2 === 0) count ++; 
        else if (arr[i] === 1 && count % 2!=0) count++;
        else if(arr[i] ===0 && count % 2 ===0)  continue
    }
    return count ;
}
console.log(bulbs([0  , 1 , 0 , 1]));  // return 4 

// Time complexty = O(n);  // best algorithm  