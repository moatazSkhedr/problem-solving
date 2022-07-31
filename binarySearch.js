
 // time complexty : O(log n )
// Binary Search using recursive 



const binarySearch = (arr , low , high , key)=>{
    if(high < low) return low-1 ;
    let mid =  Math.floor(low + (high-low)/2);   
    if(arr[mid] === key) return mid;
    else if(key < arr[mid]) return binarySearch (arr , low , mid-1 , key);
    else return  binarySearch(arr , mid + 1 , high , key);
}
console.log(binarySearch([3 , 5 , 8 , 10 , 12 , 15 , 18 , 20 , 20 , 50 , 60] , 1, 11 ,3)) 

// binary Search using iteration version

