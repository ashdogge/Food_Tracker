import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { Button, Alert } from "react-bootstrap";
import Food from "../Food/Food";
const FoodDeleteConfirm = () => {
  // << If an ID is present in params, edit. Else form will be
  // used to create a new food >>

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // << Initialize foodData from state if available, otherwise null to
  // be filled from API request >>
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [sodium, setSodium] = useState("");
  const [potassium, setPotassium] = useState("");
  const [carbsTotal, setCarbsTotal] = useState("");
  const [sugar, setSugar] = useState("");
  const [fiber, setFiber] = useState("");
  const [protein, setProtein] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [foodData, setFoodData] = useState(location.state?.food || null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // << If the ID is present, check for foodData in state
    // If foodData is missing, fetch it from the API >>

    if (id && !foodData) {
      const fetchData = async () => {
        setLoading(true);
        // console.log("No food data found, fetching...");
        try {
          const response = await fetch(`/api/foods/food/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();
          setFoodData(json);
        } catch (err) {
          setError(err);
        }
      };
      fetchData();
      setLoading(false);
    } else {
      // << If foodData exists, initialize the form state with it >>

      setName(foodData.name);
      setCalories(foodData.calories);
      setFat(foodData.fat);
      setSodium(foodData.sodium);
      setPotassium(foodData.potassium);
      setCarbsTotal(foodData.carbs.total);
      setSugar(foodData.carbs.sugar);
      setFiber(foodData.carbs.fiber);
      setProtein(foodData.protein);
    }
  }, [id, foodData]);

  // << Handler for delete confirmation.
  //  Redirect back to home 2 seconds after success >>

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      let apiEndpoint = `/api/foods/delete/${id}`;
      let method = "DELETE";
      const response = await fetch(apiEndpoint, {
        method,
        headers: { "Content-Type": "application/json" },
      });

      // << If the response is not 200, display the error >>

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      // << Display success message >>
      setMessage("Food deleted successfully!");
    } catch (err) {
      console.error("Error deleting food:", err);
      setError(err);
    }
  };

  return (
    // << Display for the update form >>
    <>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error.message}</Alert>}
      <h1>Delete {foodData.name}?</h1>
      <div>
        <Food food={foodData} />
      </div>

      <div>
        <Button variant="danger" onClick={handleSubmit}>
          Delete
        </Button>
        <Button variant="info" href="/">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default FoodDeleteConfirm;
