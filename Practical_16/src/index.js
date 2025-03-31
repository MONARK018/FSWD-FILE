import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import TodoApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct method
root.render(<TodoApp />);
