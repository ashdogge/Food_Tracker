import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { ButtonGroup, Button } from "react-bootstrap";

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
    <div className="d-flex link-underline-opacity-0 fs-6">
      <button className="link-primary me-auto" onClick={() => addEntry(_id)}>
        ✚
      </button>
      <button className="link-light me-1" onClick={editNav}>
        ✎
      </button>
      <button className="link-danger " onClick={deleteNav}>
        ✕
      </button>
    </div>
  );
};
export default FoodButtons;
