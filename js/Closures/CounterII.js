/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

function createCounter(init) {
    let current = init;
    let initial = current;
    return {
        increment: function () {
            return ++current;
            },
        decrement: function () {
            return --current;
            },
        reset: function () {
            current = initial;
            return current;
        }
        
    }
}
