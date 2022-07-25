
// Bad algorithm for fibnacci number 

const fib = (n)=>{
    if(n <=1) {
        return n;
    }else{
        return fib(n-1) + fib(n -2)
    }
}

console.log(fib(6))
/*
input => 6 
fib(6-1= 5) + fib(6 - 2 = 4) => 9

*/