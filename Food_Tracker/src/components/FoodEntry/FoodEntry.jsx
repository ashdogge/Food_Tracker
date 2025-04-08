import React from "react";
import { Table } from "react-bootstrap";
// import Food from "../Food/Food";
// import FoodButtons from "../FoodButtons/FoodButtons";

// << Helper to format the name of each food - move this later >>

function nameFormat(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// << Define the format for the eatenAt field to display as>>

const dateFormat = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});
function formatDate(date) {
  return dateFormat.format(new Date(date));
}
export const FoodEntry = ({ entry }) => {
  const {
    _id: entryId,
    eatenAt,
    food: {
      _id: foodId,
      name,
      calories,
      fat,
      sodium,
      potassium,
      carbs: { total, fiber, sugar },
      protein,
    },
  } = entry;
  // << Entry display >>
  return (
    <>
      <tr>
        <td>{nameFormat(name)}</td>
        <td>{calories}</td>
        <td>{fat} g</td>
        <td>{protein}g</td>
        <td>{sodium}mg</td>
        <td>{potassium}mg</td>
        <td>{total}g</td>
        <td>{fiber}g</td>
        <td>{sugar}g</td>
        <td>{formatDate(eatenAt)}</td>
      </tr>
    </>
  );
};
export default FoodEntry;
