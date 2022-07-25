/*
    -  USING grady algorithm 

    Problem: You have to make a change of an amount using the smallest possible number of coins.
Amount: $18

Available coins are
  $5 coin
  $2 coin
  $1 coin
There is no limit to the number of each coin you can use.

*/
    const coinChange =(amount , coins)=>{

        for(let i = 0 ; i < coins.length ; i++){
            let solutionSet = [];

            if(coins[i] <= amount){
             solutionSet.push(coins[i]);
             coins[i] + coinChange(amount - coins[i] , coins);

            }


        }
        return solutionSet;



    }
    console.log(coinChange(18,[5 , 2 , 1]));