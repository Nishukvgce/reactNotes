// JavaScript Refresher: Operators

// ➤ JavaScript supports various operators to work with values, especially numbers and strings.

// ------------------------------
// ➤ Arithmetic Operators
// ------------------------------

// Addition (also works for strings)
console.log(10 + 5);           // Output: 15
console.log("hello" + "world"); // Output: "helloworld"

// Subtraction
console.log(10 - 5); // Output: 5

// Multiplication
console.log(10 * 2); // Output: 20

// Division
console.log(10 / 2); // Output: 5

// ------------------------------
// ➤ Comparison Operators
// ------------------------------

// Strict equality (type + value match)
console.log(10 === 5); // Output: false
console.log(10 === 10); // Output: true

// Greater than
console.log(10 > 5); // Output: true

// Less than
console.log(5 < 10); // Output: true

// Greater than or equal to
console.log(10 >= 10); // Output: true

// Less than or equal to
console.log(5 <= 10); // Output: true

// ------------------------------
// ➤ Conditional Execution (if statement)
// ------------------------------

if (10 === 10) {
  console.log("Condition met. Executing this block.");
}

// In real applications, conditions are typically dynamic, based on user input or data values.

/*
Summary:
- Arithmetic operators: +, -, *, /
- The + operator also concatenates strings.
- Comparison operators: ===, >, <, >=, <=
- These are used with if statements to conditionally execute code blocks.
*/
