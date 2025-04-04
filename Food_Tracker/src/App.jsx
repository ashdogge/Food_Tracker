import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header/Header";
import Food from "../src/components/Food/Food";
import FoodsList from "./components/FoodsList";
function App() {
  return (
    <div className="container">
      <Header />
      <FoodsList />
    </div>
  );
}

export default App;
