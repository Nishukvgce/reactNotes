// react-hands-on-1.js

// ✨ First Hands-On Task in React
// Even without knowing React deeply, we can try simple changes to understand how things work.
// Task: Add a new button to an existing React app that shows content from a newly added 4th array.

// 🎯 Objective:
// - Add a 4th button labeled anything (e.g., "React vs JS")
// - On click, it should display the 4th set of data from the `content` array


// 🧠 Key Concept Reminder:
// In JavaScript, arrays are 0-indexed: content[0] is the first item, content[3] is the fourth.


// 🛠️ JSX Snippet: Adding a New Button
// (Assuming useState is already used to manage `activeTab`)
return (
  <div>
    <header>
      <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>Tab 1</button>
      <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>Tab 2</button>
      <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ""}>Tab 3</button>

      {/* ✅ New Button for 4th Content */}
      <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? "active" : ""}>React vs JS</button>
    </header>

    <ul>
      {content[activeTab].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);


// 💡 Learning Outcome:
// - React uses state (`useState`) to track the active tab
// - JSX lets us dynamically apply styles and behavior (like `.active` class)
// - Adding interactivity is about updating the right state value and reflecting it in the UI


// 🔄 Quick Flow Diagram
/*
  +---------------------------+
  |   User clicks new button |
  +---------------------------+
               |
       +-------▼--------+
       | setActiveTab(3)|
       +----------------+
               |
       +-------▼--------+
       | React re-renders |
       | using new state  |
       +------------------+
               |
       +-------▼--------+
       |  content[3] shows |
       +------------------+
*/


// 📘 Summary:
// - We created our first small React feature!
// - You don’t need to know everything to make simple changes.
// - React's declarative nature helps you focus on "what should happen" instead of "how it happens".

