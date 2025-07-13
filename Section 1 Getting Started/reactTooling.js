// react-jsx-and-tooling.js

// 📌 Why We Can't Just Use HTML + JS to Write React Code

// It might seem like we could just create an index.html and index.js,
// link them together, and write React code inside the JS file.
// ❌ BUT THAT WON'T WORK for React.

// 💡 Why? Because React uses a special syntax called JSX.


// ✅ 1. What is JSX?
// JSX stands for JavaScript XML — it allows you to write HTML-like code inside JavaScript.
// JSX makes React code cleaner and easier to write.

const jsxExample = `
  const element = <h1>Hello, React!</h1>;
`;

// But here's the problem:
// ❌ Browsers do NOT understand JSX!
// JSX must be converted to standard JavaScript first.

/*
  Transformed JSX (using React.createElement):
  const element = React.createElement('h1', null, 'Hello, React!');
*/


// ✅ 2. Why Can't Browsers Run JSX?
// Because browsers only understand standard JavaScript.
// JSX and modern syntax (like imports, async/await, ES Modules) need to be transformed before running in a browser.

const browserLimitation = {
  jsxNotSupported: true,
  needsTransformation: true,
};


// ✅ 3. What Else Do Build Tools Do?
// Besides transforming JSX, tools like Vite and CodeSandbox also:

const whatBuildToolsDo = {
  transformJSX: "Convert JSX to React.createElement",
  bundleModules: "Combine all JS files into one bundle",
  optimizeCode: "Minify code, remove whitespace, shorten names",
  runDevServer: "Auto-reloads browser on save",
};


// ✅ 4. Why Do We Use Tools like Vite or CodeSandbox?

// ✨ Because they automatically handle all the above!
// You write modern React code → they transform it → browser runs it

const reactSetupTools = ["Vite", "Create React App", "Webpack", "CodeSandbox"];


// 🟢 CodeSandbox:
// - Web-based
// - No local setup
// - React-ready out of the box
// - Perfect for beginners and restricted environments

// 🔵 Vite (for local projects):
/*
  1. Install Node.js
  2. Run: npm create vite@latest
  3. Choose: React → JavaScript
  4. Run: npm install
  5. Run: npm run dev to start the dev server
*/


// ⚠️ Why HTML + Script Tags Are Not Enough
/*
  You CAN’T use:
    <script src="index.js"></script>
  and write:
    const element = <h1>Hello</h1>;

  → ❌ This will throw a browser error.
*/


// ✅ Summary:
/*
+--------------------------------------------------+
|                Why Tooling is Needed             |
+---------------------------+----------------------+
| JSX support               | ✅ Needs transformation
| Optimization              | ✅ Reduces file size
| Dev server + HMR          | ✅ Instant feedback
| Browser compatibility     | ✅ Uses plain JS output
+---------------------------+----------------------+
*/


// 🧪 Developer Tip:
// You’ll use JSX all the time in React projects,
// so using tools that can process it is **not optional** — it's essential.

