// 📘 JavaScript Functions - Core Concepts for Future Reference

// ✅ 1. Function Declaration (Named Function)
// A function is defined using the `function` keyword followed by a name and parameters.
function greet() {
  console.log("Hello!");
}

// Call the function (invoke it)
greet(); // Output: Hello!

// Functions can be called multiple times
greet();
greet();

// ✅ 2. Functions with Parameters
// Parameters allow us to accept input when the function is called
function greetUser(userName, message) {
  console.log(userName);
  console.log(message);
}

greetUser("Max", "Hello!");
greetUser("Manuel", "Hello, what's up?");

// ✅ 3. Default Parameters
// You can assign a default value to a parameter
function greetWithDefault(userName, message = "Hello!") {
  console.log(userName);
  console.log(message);
}

greetWithDefault("Max");               // message = "Hello!"
greetWithDefault("Manuel", "Hey!");    // message = "Hey!"

// ✅ 4. Returning Values from Functions
// Functions can also return a value using the `return` keyword
function createGreeting(userName, message = "Hello!") {
  return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
const greeting2 = createGreeting("Manuel", "What's up?");

console.log(greeting1); // Output: Hi, I am Max. Hello!
console.log(greeting2); // Output: Hi, I am Manuel. What's up?

// ✅ 5. Naming Conventions
// - Use camelCase for function and variable names
// - Should be descriptive about what the function does

// ✅ 6. Function Expressions & Anonymous Functions
// Functions can be stored in variables (anonymous function)
const anonymousGreet = function () {
  console.log("Hello from anonymous function");
};

anonymousGreet(); // Output: Hello from anonymous function

// ✅ 7. Arrow Functions (ES6+)
// More concise syntax, commonly used for anonymous functions
const arrowGreet = () => {
  console.log("Hello from arrow function");
};

arrowGreet();

// With parameters
const arrowGreetUser = (userName, message) => {
  console.log(userName);
  console.log(message);
};

arrowGreetUser("Max", "Hi!");

// With return value
const createArrowGreeting = (userName, message = "Hello!") => {
  return "Hi, I am " + userName + ". " + message;
};

const arrowGreeting = createArrowGreeting("Anna");
console.log(arrowGreeting); // Output: Hi, I am Anna. Hello!

// ✅ 8. Real Usage Example in React
// Arrow functions are often used as anonymous functions in JSX event handlers
// Example (React JSX):
// <button onClick={() => console.log("Clicked!")}>Click Me</button>

// ✅ 9. Summary
// - Use `function` keyword for named functions
// - Use arrow functions for cleaner, shorter syntax (esp. anonymous functions)
// - Functions can accept parameters, default values, and return outputs
// - Naming functions clearly improves readability
// - Reuse functions to keep code clean and modular