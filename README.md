# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript when handling null values and provides a solution.

## The Bug
The `foo` function adds two numbers.  However, it simply returns `null` if either input is `null`. This might cause unexpected behavior in a larger application.

## The Solution
The improved version of `foo` handles null values more robustly. It checks for `null` values and either returns a default value or throws an error, providing more context for debugging.

## Running the Code
Clone this repository and run the JavaScript files using Node.js or a similar environment.
