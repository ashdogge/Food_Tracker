import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header/Header";
import Food from "../src/components/Food/Food";
import FoodsList from "./components/FoodsList";
function App() {
  const bread = {
    name: "Bread",
    calories: 1,
    fat: 2,
    sodium: 3,
    potassium: 0,
    carbs: { total: 5, fiber: 2, sugar: 1 },
    protein: 1,
  };
  return (
    <div className="container">
      <Header />
      <Food food={bread} />
      <FoodsList />
    </div>
  );
}

export default App;
