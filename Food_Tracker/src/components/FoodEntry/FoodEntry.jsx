import React from "react";
import { Table } from "react-bootstrap";
// import Food from "../Food/Food";
// import FoodButtons from "../FoodButtons/FoodButtons";

export const FoodEntry = ({ food: { _id, food, eatenAt } }) => (
  <div className="textColor">
    <div className="">
      {_id}
    </div>
    <Table striped bordered hover variant="dark">
      <tbody className="text-start">
        <tr>
          <td className="fw-semibold">Food:</td>
          <td>{food}</td>
        </tr>
        <tr>
          <td>Eaten at:</td>
          <td>{eatenAt}</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default FoodEntry;
