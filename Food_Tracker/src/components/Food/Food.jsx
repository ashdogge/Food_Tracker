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
    <div className="card m-1 bg-dark border-light textColor">
      <div className="card-header text-center display-6 fs-3 h-25 border-light border-1 fw-semibold">
        {name}
      </div>
      <FoodButtons food={food} />
      <Table striped bordered hover variant="dark">
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
    </div>
  );
};

export default Food;
