var createCounter = function(init){
    var curValue = init;
    return {
        increment: function() {
            return ++curValue;
        },
        decrement: function() {
            return --curValue;
        },
        reset: function() {
            
            return curValue = init;
        }
    };
};

console.log("Test i-d-d-r at 42")
const counter1 = createCounter(42);
console.log("Increment: ", counter1.increment());
console.log("Decrement: ", counter1.decrement());
console.log("Decrement: ", counter1.decrement());
console.log("Reset: ", counter1.reset());

console.log("Test i-r-d at 5")
const counter2 = createCounter(5);
console.log("Increment: ", counter2.increment());
console.log("Reset: ", counter2.reset());
console.log("Decrement: ", counter2.decrement());