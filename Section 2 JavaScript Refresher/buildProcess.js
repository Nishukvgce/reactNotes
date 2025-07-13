// 📘 React Course Notes: Build Process & Script Tags in React Projects

// ✅ Why No <script> Tag in React's index.html?
/*
- React projects don’t have <script> tags manually added in index.html.
- Still, the app works — JavaScript executes — because:
    - A build process injects scripts into the HTML automatically.
    - This process is handled by tools like Vite or Create React App.
*/

// 🧠 What's a Build Process?
/*
- It transforms your source React code into browser-compatible JavaScript.
- JSX (HTML in JS) is not valid JS — it must be compiled to vanilla JS.
- The transformed, production-optimized code is then injected into the HTML.
*/

// 🔧 How is the Build Process Setup?
/*
- In CodeSandbox or local setups (via Vite/Create React App), a tool (e.g., 'react-scripts') runs in the background.
- In package.json, you’ll see dependencies like:
    - "react"
    - "react-dom"
    - "react-scripts" (used to manage the build tools)
- A development server watches your code and updates a preview browser view.
*/

// 🔍 Want to See the Injected Scripts?
/*
- Right-click the app in browser → Inspect → check <head>/<body>.
- You’ll see <script> tags automatically added by the build tool.
*/

// ⚠️ Why Transform React Code?
/*
1. JSX (e.g., <div>Hello</div>) is not valid JavaScript by default.
   - The browser cannot parse JSX.
   - The build tool compiles JSX into valid JS (e.g., React.createElement).

2. Optimization: Minify & shrink code.
   - Variable/function names shortened.
   - Whitespace/comments removed.
   - Code is compressed to load faster in production.
*/

// 💡 Example of Transformed Code:
/*
Raw code:
    const element = <div>Hello</div>;
Transformed code:
    const element = React.createElement('div', null, 'Hello');

Minified example: (for production)
    var e=React.createElement("div",null,"Hello");
*/

// 🚀 Build Toolchain Summary:
/*
- CodeSandbox: Auto-build process running in background.
- Local Setup:
    - npm install
    - npm run dev (starts dev server)
    - Tools like Vite, Webpack, Babel work together under the hood.
*/

// 🛠️ Node.js Requirement:
/*
- Tools like Vite/Create React App depend on Node.js to run scripts, watch files, and build code.
- NodeJS runs the CLI tools and dev server locally.
*/

// 🧹 Clean-up:
/*
- In plain JavaScript projects (no build step), JSX won't work.
- You must remove or avoid JSX in such vanilla JS environments.
*/

// 🔁 Reminder:
/*
- JSX only works after build process transforms it.
- React development always depends on this transformation pipeline.
*/
