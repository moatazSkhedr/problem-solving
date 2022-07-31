// selection sort algorithm 

function selectionSort(arr) { 
        
    for(let i = 0; i < arr.length; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}
console.log(selectionSort([2 , 5 , 8 , 3 ,1]))  // [1 , 2, 3 , 5 , 8];