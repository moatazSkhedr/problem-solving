
// // time complexty = O(n^2)

const maximum = (arr)=>{
    let result = arr[0];
    for(let i =0 ; i<arr.length ; i++){
        let mult = arr[i];
        for(let j = i + 1 ; j<arr.length ; j++){
            result = Math.max(result , mult);
            mult = mult * arr[j];
        }
         result = Math.max(result , mult);
    }
    return result;

}

console.log(maximum([ 1, -2, -3, 0, 7, -8, -2 ]))  // output = 112 


// best algorithm for max product 
//time complexty : O(n);
const maxProduct = (arr)=>{
    maxV = arr[0];
    minV = arr[0];
    maxP = arr[0];
    for(let i = 1 ; i<arr.length ; i++){
        if(arr[i] < 0){
            let temp = maxV;
            maxV = minV;
            minV = temp;
        }
        maxV = Math.max(arr[i] , maxV * arr[i]);
        minV = Math.min(arr[i] , minV * arr[i]);
        maxP = Math.max(maxP , maxV);
    }
    return maxP;
}

console.log(maxProduct([1, -2, -3, 0, 7, -8, -2 ]))

/// good algorithm 

const maxProduct2 = (arr)=>{
    let result = arr[0];
    for(let i = 2 ; i < arr.length-1 ; i++){
        let prev =  i - 1 ;
        let next = i + 1 
        
    }
        
}
console.log(maxProduct2([-2, -40, 0, -2, -3 ]));

