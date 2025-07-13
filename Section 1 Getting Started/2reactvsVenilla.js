// react-vs-js.js

// 🔍 React vs Vanilla JavaScript
// React simplifies building user interfaces by allowing you to define *what* the UI should look like.
// In contrast, plain JavaScript requires you to write step-by-step instructions for *how* to update the UI.

// ✅ React = Declarative → Define "what the UI should be"
// ❌ JavaScript = Imperative → Define "how to achieve the UI step-by-step"


// 📦 Tools Mentioned
// CodeSandbox: Online editor to build and run React apps without local setup.


// 🛠️ Vanilla JavaScript: Manual DOM manipulation
// index.html contains all elements
// index.js handles event listeners and DOM updates

// Sample: Click tab to load content manually
const buttons = document.querySelectorAll("button");
const tabContent = document.getElementById("tab-content");
const content = [["Item 1", "Item 2"], ["Item A", "Item B"]];

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tabContent.innerHTML = "";
    const ul = document.createElement("ul");
    ul.innerHTML = content[i].map(item => `<li>${item}</li>`).join("");
    tabContent.appendChild(ul);
  });
});

// 😩 Imperative: You control every step (DOM selection, event binding, updates)


// ⚛️ React: Component-driven & declarative
// index.html: contains only <div id="root">
// React renders the entire UI via JavaScript using JSX and components

// Sample React version (App.js)
function App() {
  const [activeTab, setActiveTab] = useState(0);
  const content = [["Item 1", "Item 2"], ["Item A", "Item B"]];

  return (
    <div>
      <header>
        <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>Tab 1</button>
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>Tab 2</button>
      </header>
      <ul>
        {content[activeTab].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 😄 Declarative: You describe "what" you want → React updates the DOM automatically


// 💡 Key Concept: JSX
// JSX lets you write HTML-like code inside JavaScript
// This works because React is set up to compile JSX into valid JS

// 🔄 useState Hook
// React hook to store and manage dynamic values like current tab index

// 📘 Imperative vs Declarative - Diagram
/*
+-----------------------------+            +----------------------------+
|   Vanilla JavaScript (DOM) |            |         React (JSX)       |
+-----------------------------+            +----------------------------+
| 1. Find button elements     |            | 1. Define state            |
| 2. Add event listeners      |            | 2. Describe UI using JSX   |
| 3. Clear old content        |            | 3. React handles rendering |
| 4. Insert new content       |            |    and updating UI         |
+-----------------------------+            +----------------------------+
| You manage steps manually   |            | React handles the steps    |
+-----------------------------+            +----------------------------+
*/

// 🧠 Summary:
// - React makes building and updating UIs easier and less error-prone
// - You write less code and let React handle the DOM updates
// - With plain JavaScript, UI logic becomes complex and hard to scale

