import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const Food = ({
  food: {
    _id,
    name,
    calories,
    fat,
    sodium,
    potassium,
    carbs: { total, fiber, sugar },
    protein,
  },
}) => {
  const navigate = useNavigate();

  const editNav = () => {
    navigate(`/food/edit/${_id}`, {
      state: {
        food: {
          _id,
          name,
          calories,
          fat,
          sodium,
          potassium,
          carbs: { total, fiber, sugar },
          protein,
        },
      },
    });
  };

  return (
    <div className="border border-black border-5">
      <div className="flex-column d-flex align-items-start">
        <div className="fw-bold">{name}</div>
        <div>Calories: {calories}</div>
        <br />
        <div>Fat: {fat}</div>
        <div>Sodium: {sodium}</div>
        <div>Potassium: {potassium}</div>
        <div>
          Carbs: {total}, Fiber: {fiber} Sugar: {sugar}
        </div>
        <div>Protein: {protein}</div>
      </div>
      <Button onClick={editNav}>Edit</Button>
      <Button variant="danger">Delete</Button>
    </div>
  );
};

export default Food;
