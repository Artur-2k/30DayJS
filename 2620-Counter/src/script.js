var createCounter = function(n) {
    var counter = n;
    return () => counter++;
};