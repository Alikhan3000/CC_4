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


//Task 3: While Loop

let stock = 10; //declared a variable with a value of 10

while (stock > 0) {   //used while loop for stock (until stock reaches 0) 
console.log(`# of stock: $${stock}`) //logged each decrement to the console 
    stock -= 1; //each iteration decreases stock by 1 with 
};


//Task 4: Do...While Loop

let responses = 0; //delared a variable with an initial value of 0

do {
    console.log(`Response collected: ${responses + 1}`) //used do.. while loop. Each response adds 1 to responses
    responses++;
    
} while (responses < 3); //loop continues until it reaches 3 

//Task 5: For...In Loop

let employee = {    //declared an object with 3 properties
    name: "Alice",
    position: "Manager",
    salary: 75000

};
//used for...in loop to iterate through the object properties
for (let property in employee) {            //declared property, which contain the object's properties in the object itself 
    console.log(`${property}: ${employee[property]}`);
        
    }
