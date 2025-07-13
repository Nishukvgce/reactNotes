// react-project-setup.js

// 🛠️ Setting Up a React Project
// Before writing React code, you need a project environment.
// You can either use an **online editor** (CodeSandbox) or create a **local project** (using Vite or CRA).


// ✅ Option 1: CodeSandbox (Recommended for beginners)
// - Easiest way to start coding React
// - No installation needed
// - Type `react.new` in your browser or open a project link
// - Built-in editor + live preview

const codeSandboxSetup = {
  pros: ["No installation", "Quick start", "Easy preview"],
  cons: ["Less control", "Limited local config"]
};


// ✅ Option 2: Local Project Setup (Vite or CRA)
// - Gives more control and customization
// - Requires initial setup

// 🧱 Prerequisites:
const localSetupRequirements = [
  "Install Node.js (https://nodejs.org)",
  "Install VS Code (optional but recommended)"
];

// 🚀 Vite Setup (Recommended over CRA):
/*
Step-by-step:
1. Open terminal
2. Run: npm create vite@latest
3. Choose: React → JavaScript
4. cd into project folder
5. Run: npm install
6. Start server: npm run dev
*/

const viteSetup = {
  tool: "Vite",
  command: "npm create vite@latest",
  devServer: "npm run dev",
  notes: [
    "Install Node.js first",
    "Run `npm install` once after project creation",
    "Keep `npm run dev` running to auto-refresh browser"
  ]
};


// 🧰 Alternative Tool: Create React App (CRA)
/*
Command: npx create-react-app my-app
Still works, but Vite is faster and more modern.
*/


// 📦 Summary Table:
/*
+-------------------+-------------------+
|     Tool          |      Setup Time   |
+-------------------+-------------------+
| CodeSandbox       | ⚡ Instant         |
| Vite              | ⏱️ ~2–5 min        |
| CRA               | ⏱️ ~5–8 min        |
+-------------------+-------------------+
*/


// 💻 Local vs Online Projects:
/*
+-----------------------+----------------------+
|    CodeSandbox        |     Local Setup      |
+-----------------------+----------------------+
| ✅ No setup needed    | ✅ Full customization |
| ✅ Instant preview    | ✅ Works offline      |
| ⚠️ Less control       | ⚠️ Requires install   |
+-----------------------+----------------------+
*/


// 🎯 Best Practice:
// Use CodeSandbox for quick exercises & learning,
// Use Local Setup for real-world projects or when customization is needed.

