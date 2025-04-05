import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header/Header";
import Food from "../src/components/Food/Food";
import FoodsList from "./components/FoodsList";
import { Routes, Route } from "react-router";
import FoodEditForm from "./components/FoodEditForm/FoodEditForm.jsx";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<FoodsList />} />
        <Route path="/food/edit/:id" element={<FoodEditForm />} />
      </Routes>
    </div>
  );
}

export default App;
