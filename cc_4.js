//Task 1: If Statements

let purchaseAmount = 300; //declared a variable with a value
let final_amount = purchaseAmount * 0.9; //10% discount is applied if purchase amount is > $100

if (purchaseAmount > 100) {
    console.log(`Final amount after discount: $${final_amount}`); //the code loggs the final amount with discount applied if purchase amount > $100

}else{
    console.log(`Final amount after discount: $${purchaseAmount}`); //the code loggs the initial amount without a discount if purchase amount < $100
    };


//Task 2: For Loop

let sales = [120, 85, 200, 150, 90]; //declared an array with 5 sales figures
let total = 0; //declared an array for total sales value

for (let i = 0; i < sales.length; i++) {  //used for loop to calculate total sales 
    total = total + sales[i];
    
}

console.log(`Total sales: $${total}`); 



