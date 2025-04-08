import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header/Header";
import FoodsList from "./components/FoodsList";
import { Routes, Route } from "react-router";
import FoodForm from "./components/FoodForm/FoodForm.jsx";
import FoodDeleteConfirm from "./components/FoodDeleteConfirm/FoodDeleteConfirm.jsx";
import FoodEntriesList from "./components/FoodEntriesList/FoodEntriesList.jsx";
import "./styles.css";
function App() {
  return (
    <div className="container textColor">
      <Header />
      <Routes>
        <Route path="/" element={<FoodsList />} />
        <Route path="/food/add" element={<FoodForm />} />
        <Route path="/food/edit/:id" element={<FoodForm />} />
        <Route path="/food/delete/:id" element={<FoodDeleteConfirm />} />
        <Route path="/food/entries" element={<FoodEntriesList />} />
      </Routes>
    </div>
  );
}

export default App;
