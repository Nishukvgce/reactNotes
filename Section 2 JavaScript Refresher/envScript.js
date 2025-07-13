
/* ============================================================================
 📘 JAVASCRIPT REFRESHER: JS EXECUTION + SCRIPT LOADING
============================================================================ */

/**
 * 🔹 JavaScript Execution Environments
 * -------------------------------------
 * - Originally built for the **browser** (1990s).
 * - Now runs in other environments like:
 *   - Node.js
 *   - Deno
 *   - Capacitor (for mobile apps)
 *   - React Native (build native Android/iOS apps with React)
 * 
 * ➕ React Native: A good next step after learning React.
 * 
 * ➤ This course focuses on **browser-based JavaScript** (client-side).
 *    But JS syntax remains the same across environments.
 */

// ============================================================================
// 📂 Adding JavaScript to a Website
// ============================================================================

/**
 * ✅ Two ways to add JavaScript to HTML:
 * 
 * 1️⃣ Inline script (❌ not recommended for real projects)
 * <script>
 *   console.log("Hello from inline script");
 * </script>
 * 
 * 2️⃣ External file (✅ best practice)
 * <script src="assets/scripts/app.js" defer></script>
 * 
 * 🔸 Why External JS is Better:
 * - Keeps HTML clean and maintainable.
 * - Easier to manage larger codebases.
 */

// Folder structure example:
// assets/scripts/app.js  <-- your JS file

// ============================================================================
// 🔧 Script Tag Attributes
// ============================================================================

/**
 * ✅ `defer` Attribute:
 * - Defers execution until the entire HTML document is parsed.
 * - Ensures DOM elements are available when JS runs.
 * - Great when scripts interact with HTML elements.
 *
 * ✅ `type="module"` Attribute:
 * - Treats script as a JS module.
 * - Unlocks `import` / `export` syntax.
 * - Enables modular code structure.
 */

// Example:
// <script type="module" src="assets/scripts/app.js"></script>

// ============================================================================
// 📦 JavaScript Modules (Modern Syntax)
// ============================================================================

/**
 * ✅ Modular JavaScript
 * - Use ES Modules for better structure.
 * - You can split code into multiple files.
 */

// --- util.js ---
export function greet(name) {
  return `Hello, ${name}`;
}

// --- app.js ---
import { greet } from './util.js';
console.log(greet("React")); // Hello, React

// ============================================================================
// ⚛️ React + Script Tags
// ============================================================================

/**
 * 📌 Important Note for React Projects:
 * - You usually **do not manually add script tags** in HTML.
 * - React projects use build tools (like Vite, CRA) that:
 *    - Inject scripts automatically
 *    - Bundle, transpile, and optimize code
 * - This is handled by the build process.
 */

// ✅ Summary:
/**
 * - JS can run in browser, Node.js, mobile, and more.
 * - Use external `.js` files with `<script>` tag.
 * - Use `defer` or `type="module"` depending on your needs.
 * - React apps are built with tools that auto-manage script loading.
 */
