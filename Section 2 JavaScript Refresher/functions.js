// JavaScript Functions — Full Refresher Notes

// --------------------------------------------
// 📌 FUNCTION DECLARATION USING `function`
// --------------------------------------------

/*
- Functions in JavaScript are blocks of code that are defined but not executed immediately.
- You call (invoke) them later to execute their logic.
- Functions are reusable and can be called multiple times.
*/

// 🔹 Basic Function Declaration
function greet() {
  console.log("Hello!");
}

// 🔹 Function Invocation (Calling the Function)
greet(); // "Hello!"
greet(); // "Hello!"
greet(); // Can be called multiple times

// --------------------------------------------
// 📌 FUNCTION PARAMETERS
// --------------------------------------------

/*
- Functions can accept input values via parameters.
- These parameters are declared inside parentheses.
- You can pass different arguments to customize function behavior.
*/

function greetUser(userName, message) {
  console.log(userName);
  console.log(message);
}

// 🔹 Function Call with Parameters
greetUser("Max", "Hello!");
greetUser("Manuel", "Hello, what's up?");

// --------------------------------------------
// 📌 DEFAULT PARAMETER VALUES
// --------------------------------------------

/*
- You can assign default values to parameters.
- If no argument is passed for such parameters, the default is used.
*/

function greetUserWithDefault(userName, message = "Hello!") {
  console.log(userName);
  console.log(message);
}

greetUserWithDefault("Max");                  // Uses default message
greetUserWithDefault("Manuel", "Howdy!");     // Overrides default message

// --------------------------------------------
// 📌 RETURNING VALUES FROM FUNCTIONS
// --------------------------------------------

/*
- Functions can also return a value using the `return` keyword.
- Returned values can be stored in variables or used directly.
*/

function createGreeting(userName, message = "Hello!") {
  return "Hi I am " + userName + ". " + message;
}

// 🔹 Storing the Return Value
const greeting1 = createGreeting("Max");
const greeting2 = createGreeting("Manuel", "What's up?");

console.log(greeting1); // "Hi I am Max. Hello!"
console.log(greeting2); // "Hi I am Manuel. What's up?"

// --------------------------------------------
// 📌 NAMING CONVENTIONS FOR FUNCTIONS
// --------------------------------------------

/*
- Use camelCase (e.g., createGreeting, greetUser)
- Names should be descriptive:
  - For variables/constants: describe the value
  - For functions: describe what it does
- Follow standard identifier rules:
  - Start with a letter, underscore `_`, or dollar sign `$`
  - No special characters or spaces
*/

// ✅ Good: createGreeting
// ❌ Bad: create-greeting or 1greet

// --------------------------------------------
// ✅ SUMMARY
// --------------------------------------------

/*
- Use `function` to define reusable blocks of code.
- Call functions using their name followed by parentheses: greet()
- Accept inputs using parameters, separated by commas.
- Assign default values to parameters when needed.
- Return values with `return`, and store or use them.
- Use descriptive names to keep code readable and maintainable.
- You'll use functions a lot in JavaScript and React (e.g., functional components).
*/
