import React from "react";

export const Food = ({
  //Define the structure for each 'food' object to be constructed from database
  food: {
    id,
    name,
    calories,
    fat,
    sodium,
    potassium,
    carbs: { total, fiber, sugar },
    protein,
  },
}) => (
  // layout to display the food information
  <div className="border border-black border-5">
    <div className="flex-column d-flex align-items-start">
      <div className="fw-bold">{name}</div>
      <div>Calories: {calories}</div> <br />
      <div>Fat: {fat}</div>
      <div>Sodium: {sodium}</div>
      <div>Potassium: {potassium}</div>
      <div>
        Carbs: {total}, Fiber: {fiber} Sugar: {sugar}
      </div>
      <div>Protein: {protein}</div>
    </div>
  </div>
);
export default Food;
