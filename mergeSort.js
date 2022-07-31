
const merge = (left , right)=>{
    const result = [];
    let leftIndex = 0 ;
    let rihgtIndex = 0 ;
    while(leftIndex < left.length && rihgtIndex < right.length){
        const leftEL = left[leftIndex];
        const rightEl = right[rihgtIndex];
        if(leftEL <rightEl) {
            result.push(leftEL)
             leftIndex++
            }
        else {
            result.push(rightEl) ; 
            rihgtIndex++
        }
    }
    return [...result , ...left.slice(leftIndex), ...right.slice(rihgtIndex)]
}

//recursive function 
const mergeSort = (arr)=>{
    if(arr.length <= 1) return arr;
    const middleIndex = Math.floor(arr.length /2);
    const leftArr = arr.slice(0 , middleIndex);
    const rightArr = arr.slice(middleIndex );
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr),
    )

}

console.log(mergeSort([7 , 2 , 5 , 3 , 7 , 13 , 1 , 6]));