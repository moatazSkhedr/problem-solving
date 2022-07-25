
// Best Algorithm for GCDs 
// using Eaclidance GCDS 


function GCDs(a , b){
    if(b === 0) return a ;
    remen = a % b 
    return GCDs(b , remen);
}
console.log(GCDs(100 , 70));
