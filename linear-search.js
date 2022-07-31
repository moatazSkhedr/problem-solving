// liner search using recursive solution 


const linearSearch = (arr , low , high , key)=>{
    if(low > high) return `Not Found`;
    if(arr[low] === key) return arr[low];
     return linearSearch(arr , low + 1 , high , key);
}
console.log(linearSearch([8 , 2 , 1 , 5 , 7 ], 0 , 4,  5 )); 