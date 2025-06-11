//Control variable
multiplicand = 12, multiplier = 12;

//For loop to creat multiplication tables
for (a = 1; a <= multiplicand; a++) {
    console.log(`Multiplication Table of ${a}:`);
    for (b = 1; b <= multiplier; b++) {
        console.log(`${a} × ${b} = ${a * b}`);
    }
    console.log("");
}