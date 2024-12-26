function foo(a, b) {
  if (a === null || b === null) {
    // throw new Error('Null values are not allowed.'); //Option 1: throw error for null values
    return 0; // Option 2: return 0 as a default value
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0 //or throws error
console.log(foo(1, null)); // Output: 0 //or throws error
console.log(foo(null, null)); // Output: 0 //or throws error