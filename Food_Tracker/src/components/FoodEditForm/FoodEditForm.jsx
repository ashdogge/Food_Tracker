import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

const FoodEditForm = () => {
  //Get the ID from params
  const { id } = useParams();
  const location = useLocation();

  const foodData = location.state?.food;

  useEffect(() => {
    fetch("loc");
  }, [id]);

  if (!foodData) {
    return (
      <div>Error: No food data available. Please go back and try again.</div>
    );
  }
  return (
    <form>
      <h2>Edit {foodData.name}</h2>
      <div>
        <label>Name:</label>
        <input type="text" defaultValue={foodData.name}></input>
      </div>
      <div>
        <label>Calories:</label>
        <input type="text" defaultValue={foodData.calories}></input>
      </div>
      <div>
        <label>Fat:</label>
        <input type="text" defaultValue={foodData.fat}></input>
      </div>
      <div>
        <label>Sodium:</label>
        <input type="text" defaultValue={foodData.sodium}></input>
      </div>
      <div>
        <label>Potassium:</label>
        <input type="text" defaultValue={foodData.potassium}></input>
      </div>
      <div>
        <label>Carbs:</label>
        <input type="text" defaultValue={foodData.carbs.total}></input>
        <label>Carbs from Sugar:</label>
        <input type="text" defaultValue={foodData.carbs.sugar}></input>
        <label>Carbs from fiber:</label>
        <input type="text" defaultValue={foodData.carbs.fiber}></input>
      </div>
      <div>
        <label>Protein:</label>
        <input type="text" defaultValue={foodData.protein}></input>
      </div>
    </form>
  );
};

export default FoodEditForm;
