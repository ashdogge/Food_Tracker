import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const FoodButtons = ({
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
  // << Navigate to the specified endpoints, passing the Food state >>

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

  const deleteNav = () => {
    navigate(`/food/delete/${_id}`, {
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

  async function addEntry(_id) {
    const res = await fetch("/api/entries/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        food: _id,
      }),
    });
    if (!res.ok) throw new Error("Failed to add entry");
    return await res.json();
  }

  return (
    <div className="d-flex link-underline-opacity-0 ms-2 me-2">
      <a
        className="fs-6 link-primary order-1 me-auto"
        onClick={() => addEntry(_id)}
        href="#"
      >
        ✚
      </a>
      <a className="fs-6 link-light order-2 me-1" onClick={editNav} href="#">
        ✎
      </a>
      <a className="fs-6 link-danger order-3" onClick={deleteNav} href="#">
        ✕
      </a>
    </div>
  );
};
export default FoodButtons;
