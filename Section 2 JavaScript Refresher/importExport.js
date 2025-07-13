// 📘 React Course Notes: JavaScript Import/Export Syntax Refresher

// ✅ Why Use import/export?
/*
- Splitting code across multiple files makes it easier to manage and maintain.
- React (and most modern JS projects) heavily use import/export for modularity.
*/

// 🔹 Named Export Example (util.js)
export let apiKey = "abc123-dummy-key";
export let abc = "Some default string";

// 🔹 Importing Named Exports (app.js)
import { apiKey, abc } from "./util.js";
console.log(apiKey);

// ✅ Syntax Explanation:
/*
- export keyword: Exposes a variable, function, or class from a file.
- import { name } from './file.js': Imports named items from another file.
- JavaScript is case-sensitive. Variable names must match exactly.
- Always add `.js` extension in vanilla JS. In React (with build tools), omit `.js`.
*/

// 🔸 Important:
// You must use <script type="module"> in HTML to enable import/export in vanilla JS.

// 🔹 Default Export (util.js)
export default "DEFAULT_VALUE";

// 🔹 Importing Default Export (app.js)
import whateverName from "./util.js";
console.log(whateverName); // Outputs: DEFAULT_VALUE

// 📝 Notes:
/*
- A file can have only one default export.
- You can import default with any name of your choice.
*/

// ✅ Mixing Default + Named Exports
/*
util.js:
    export default "DEFAULT_VALUE";
    export let apiKey = "abc123";
    export let abc = "hello";

app.js:
    import def, { apiKey, abc } from "./util.js";
    console.log(def, apiKey, abc);
*/

// ✅ Import All As Object
import * as utils from "./util.js";
console.log(utils.apiKey);        // Access named export
console.log(utils.default);       // Access default export

// ✅ Alias with `as`
import { abc as content } from "./util.js";
console.log(content); // Logs value of abc from util.js

// 📌 Why No import/export Keywords in React HTML?
/*
- React projects use a build process (Vite, CRA, etc.)
- Build tools bundle and transform import/export internally.
- No need to mark <script type="module"> manually.
- Also optimizes, minifies, and merges code for performance.
*/

// ✅ Summary:
/*
- Use export to share values/functions across files.
- Use import to bring them in.
- Default export: only one allowed; import with any name.
- Named export: many allowed; must match names.
- Aliases help rename during import.
*/
