// 📘 React Course Documentation - Getting Started

/* ==============================
   1. What is React?
   ============================== */
// ✅ Concept: React Definition
// React is a JavaScript library for building fast and interactive user interfaces (UIs), both for web and mobile.
const whatIsReact = `
React is a library for building user interfaces using JavaScript.
It allows updating the UI without reloading the page, offering smooth transitions like mobile apps.
`;

// ✅ Example (React-powered navigation experience):
// Clicking on a tab fetches data in the background and updates the UI instantly.
const exampleReactUsage = `
<button onClick={fetchMovies}>Movies</button>
// JavaScript fetches data and updates the UI without full-page reload.
`;


// 📘 Comparison: Vanilla JS vs React
/*
In Vanilla JS, you must manually handle DOM manipulation, event listeners, and UI state.
React makes UI development easier by letting you define UI based on state, and it handles the DOM updates.
*/

// ✅ Code Comparison
const vanillaJSApproach = `
// Vanilla JS (imperative):
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', handleClick));
function handleClick() {
  // change class, fetch content, update UI
}
`;

const reactApproach = `
// React (declarative):
function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>Tab 1</button>
  );
}
`;

// ✅ Diagram: Imperative vs Declarative
const declarativeVsImperative = `
[Vanilla JS]
You -> DOM Instructions -> Browser

[React]
You -> UI State -> React -> Browser DOM (automated)
`;


// 📘 JSX - JavaScript XML
/*
JSX is a special syntax that lets you write HTML-like code in JavaScript.
Browsers can’t run JSX directly, so tools like Vite transform JSX into regular JS.
*/

// ✅ Example
const jsxExample = `
function App() {
  return <h1>Hello React</h1>; // This is JSX
}
`;

const transpiledJS = `
React.createElement('h1', null, 'Hello React');
`;


/* ==============================
   2. Setting up React Projects
   ============================== */
// ✅ Online (CodeSandbox)
const sandboxInfo = `
You can type react.new in the browser to open a React-ready CodeSandbox environment.
No installation needed.
`;

// ✅ Local Setup (Vite)
const localSetup = `
1. Install Node.js from nodejs.org
2. Run: npm create vite@latest
3. Choose React template
4. cd project && npm install && npm run dev
`;


// 📘 Why Build Tools are Needed
/*
React uses JSX and modern JavaScript which browsers don't understand directly.
Tools like Vite convert the code into standard JS browsers can run.
They also optimize the bundle for performance.
*/


/* ==============================
   3. JavaScript Refresher (Optional)
   ============================== */
// ✅ JavaScript Environments
const jsEnvironments = `
JavaScript can run in:
- Browsers (client-side)
- Node.js or Deno (server-side)
- Mobile apps using React Native or Capacitor
`;


// ✅ Adding JS to HTML
const scriptOptions = `
// Option 1: Inline script
<script>
  console.log('Hello');
</script>

// Option 2: External JS file
<script src="./assets/scripts/app.js" defer></script>
`;

const moduleUsage = `
// app.js
import { greet } from './util.js';
greet();
`;

const moduleNotes = `
If using "type='module'", you can import/export between files.
React projects use build tools that auto-inject script tags.
You normally won't write <script> tags manually in React.
`;

