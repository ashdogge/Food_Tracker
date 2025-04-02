import React from "react";
import { Food } from "../Food/Food";

export const FoodsList = () => {
  const allFoods = [
    {
      id: 1,
      name: "Bread",
      calories: 1,
      fat: 2,
      sodium: 3,
      potassium: 0,
      carbs: { total: 5, fiber: 2, sugar: 1 },
      protein: 1,
    },
    {
      id: 2,
      name: "Wine",
      calories: 1,
      fat: 2,
      sodium: 3,
      potassium: 0,
      carbs: { total: 5, fiber: 2, sugar: 1 },
      protein: 1,
    },
  ];

  // Define the layout to display each food item within
  return (
    <div className="table-responsive">
      <section className="flex-table">
        <div className="d-flex flex-row">
            {/* map the 'foods' array into a list */}
          {allFoods.map((foodItem) => (
            <Food key={foodItem.id} food={foodItem} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodsList;
