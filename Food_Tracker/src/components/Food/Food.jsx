import React from "react";
import { Table } from "react-bootstrap";
import FoodButtons from "../FoodButtons/FoodButtons";

export const Food = ({ food }) => {
  const {
    _id,
    name,
    calories,
    fat,
    sodium,
    potassium,
    carbs: { total, sugar, fiber },
    protein,
  } = food;

  return (
    <Table striped bordered hover>
      <tbody className="text-start">
        <tr>
          <td className="fw-semibold">Calories:</td>
          <td>{calories}</td>
          <td className="fw-bold">kcal</td>
        </tr>
        <tr>
          <td>Fat:</td>
          <td>{fat}</td>
          <td className="fw-bold">g</td>
        </tr>
        <tr>
          <td>Sodium:</td>
          <td>{sodium}</td>
          <td className="fw-bold">mg</td>
        </tr>
        <tr>
          <td>Potassium:</td>
          <td>{potassium}</td>
          <td className="fw-bold">mg</td>
        </tr>
        <tr>
          <td>Carbs:</td>
          <td>{total}</td>
          <td className="fw-bold">g</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp; Sugars</td>
          <td>{sugar}</td>
          <td className="fw-bold">g</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp; Fiber</td>
          <td>{fiber}</td>
          <td className="fw-bold">g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>{protein}</td>
          <td className="fw-bold">g</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Food;
