  import React, { useContext } from "react";
  import { ThemeContext } from "./ThemeContext"; // ✅ Correct import

  function App() {
    const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Ensure useContext is used correctly

    const appStyles = {
      backgroundColor: theme === "light" ? "#ffffff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      transition: "all 0.3s ease",
    };

    return (
      <div style={appStyles}>
        <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
        <button 
          onClick={toggleTheme} 
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#000" : "#fff",
            color: theme === "light" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px"
          }}
        >
          Toggle Theme
        </button>
      </div>
    );
  }

  export default App;
