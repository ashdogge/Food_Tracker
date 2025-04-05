import React, { useState, useEffect } from "react";
import { Food } from "../Food/Food";
import { Button } from "react-bootstrap";
export const FoodsList = () => {
  //Initialize foods state to null
  const [allFoods, setFoods] = useState(null);
  //State for whether or not data is being retrieved from the API
  const [loading, setLoading] = useState(true);
  //State to catch errors
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/foods");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setFoods(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // Define the layout to display each food item within
  return (
    <div className="table-responsive">
      <section className="flex-table">
        <div className="d-flex flex-row">
          {/* map the 'foods' array into a list */}
          {allFoods.map((foodItem) => (
            <div key={foodItem._id}>
              <Food food={foodItem} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodsList;
