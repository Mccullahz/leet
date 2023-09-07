/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
*/

function memoize(fn) {
    // Initialize a cache object to store previous function calls
    let cache = {};

    // Return a new function that wraps the original function
    return function(...args) {
        // Convert the arguments to a string to use as a cache key
        let key = JSON.stringify(args);

        // If the function has been called with these arguments before, return the cached result
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        } 

        // Otherwise, call the function and store the result in the cache
        else {
            let result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}
