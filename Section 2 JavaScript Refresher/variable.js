// 📘 JavaScript Refresher: Variables, Values, and Operators

// ===============================
// 🧠 Concept Summary
// ===============================

/*
In modern JavaScript (and React), handling data is fundamental. Everything is about working with values and storing/managing those values using variables and constants.

✅ JavaScript values:
- Strings => "Hello", 'React'
- Numbers => 1, 3.14
- Booleans => true, false
- Special: null, undefined
- Objects (more on that later)

✅ Values can be created inline or stored in variables/constants
*/

// ===============================
// 💡 Inline Values
// ===============================

console.log("Hello World"); // Directly printing a string value

// ===============================
// 📦 Variables (let)
// ===============================

let userMessage = "Hello World"; // 'let' creates a variable (data container)

console.log(userMessage);
console.log(userMessage); // Can reuse it anywhere

// Why use variables?
// - Reusability
// - Maintainability
// - Improved code readability

// Naming rules:
// ✅ Use camelCase (e.g., userMessage)
// ❌ No spaces or hyphens (e.g., user-message ❌)
// ✅ Can include numbers (but not at the beginning)
// ✅ Only special characters allowed: $ and _

// ===============================
// 🔐 Constants (const)
// ===============================

const greeting = "Hello World";
console.log(greeting);

// greeting = "New Value"; ❌ Error: Cannot reassign a constant

// Difference:
// - const: Cannot be reassigned
// - let: Can be reassigned

let dynamicMessage = "Initial";
dynamicMessage = "Updated"; // ✅ Works with let

// ===============================
// 🧪 Best Practices
// ===============================

/*
🔸 Use 'const' by default unless you know the value will change.
🔸 Helps make your code intention clear.
🔸 Only use 'let' when reassignment is required.
*/

// ===============================
// 🔁 Summary
// ===============================

/*
- Use variables/const to store data.
- const prevents accidental reassignment.
- let allows flexibility when you know values will change.
- Data is the core of all JavaScript (and React) apps.
*/