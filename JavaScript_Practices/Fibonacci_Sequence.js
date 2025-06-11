//Declaring variables
let a = 0, b = 1;

//Creating the for loop for Fibonacci sequence
for (let i = 0; i < 10; i++) {
    console.log(a);
    console.log(a + b);
    b = a + b;
    a = a + b;
}