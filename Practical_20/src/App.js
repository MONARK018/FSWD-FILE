import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <ProductCard
        name="Wireless Headphones"
        price="99.99"
        description="High-quality wireless headphones with noise cancellation."
      />
    </div>
  );
}

export default App;
