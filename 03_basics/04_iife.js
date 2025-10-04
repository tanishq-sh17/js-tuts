// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
     // semi colon is used to seperate the two function beacuse at the time of execution, it doesn't 
     // know when the function is ending 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')