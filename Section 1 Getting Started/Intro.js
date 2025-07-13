// react-intro.js

// 🌟 What is React?
// React is a JavaScript library used to build user interfaces (UIs) for both web and native apps.
// It allows developers to build fast, interactive, and modern user interfaces using component-based architecture.

// 📦 React = UI Library + JavaScript + Smooth User Experience

// 🔍 Why Use React?
// - It enables fast, smooth transitions between views—like those on Netflix.
// - React uses JavaScript to dynamically update the UI without reloading the page.
// - It helps build app-like web experiences.
// - It's better than using plain JavaScript for large or complex UIs.


// ✅ Example: Without React (Vanilla JavaScript)
document.getElementById("tab").addEventListener("click", function () {
  fetch("/movies")
    .then(res => res.json())
    .then(data => {
      document.getElementById("content").innerHTML = renderMovies(data);
    });
});

// ✅ With React (Conceptual JSX Example)
function MoviesTab() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(setMovies);
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// 📌 React helps update only the necessary parts of the UI—efficiently and smoothly.


// 🧠 React vs Vanilla JS - Diagram
/*
  +----------------------------+
  |        User Clicks        |
  +----------------------------+
                |
        +-------▼--------+
        | JavaScript Fetch |
        +------------------+
                |
        +-------▼--------+      React manages this part
        |  DOM Update     | <------------------------+
        +------------------+                         |
                |                                     |
        +-------▼--------+                           |
        |  Screen Update  |--------------------------+
        +------------------+

  Without React: You write all update logic manually
  With React: React does the heavy lifting automatically
*/

