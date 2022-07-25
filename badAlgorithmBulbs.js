
const bulbs = (arr)=>{
    let count = 0 ;
    //[ 0 1 0 1 ]   count = 0 
    for(let i = 0 ; i<arr.length ; i ++){
        if(arr[i] === 0){
            arr[i] = 1 ;
            count++;
        }
        for(let j = i+ 1 ; j < arr.length ; j++){
            if(arr[j] === 1) {
                arr[j] = 0;
            }
        }
    }
    return count ;

}
console.log(bulbs([0 , 1 , 0 ,1 , 1 ,0 , 1 ,1 ]));  // output = 8 

// Time Complexty : O(n^2) ;
// Space Complexty : O(1) ;


