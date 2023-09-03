/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/

function createHelloWorld() {
    const greeting = "Hello World";

    return function() {
        return greeting;
    };
}