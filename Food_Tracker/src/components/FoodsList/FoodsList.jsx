import React, { useState, useEffect } from "react";
import { Food } from "../Food/Food";
import FoodButtons from "../FoodButtons/FoodButtons";
import { Button } from "react-bootstrap";
export const FoodsList = () => {
  // << .Initialize foods state to null >>

  const [allFoods, setFoods] = useState(null);
  // << State for whether or not data is being retrieved from the API >>

  const [loading, setLoading] = useState(true);
  //<< State to catch errors >>

  const [error, setError] = useState(null);
  // << useEffect hook to fetch list of foods >>

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
  if (allFoods.length === 0) {
    return (
      <section>
        <div className="display-1">No foods in database.</div>
      </section>
    );
  }
  // << Define the layout to display each food item within >>
  // << TODO: Add a 'message' component to display 'success' or
  // 'error' messages like in Food Form>>
  return (
    <section className="d-flex flex-wrap mt-5 p-5 bg-dark">
      {/* << map the 'foods' array into a list of >> */}
      {allFoods.map((foodData) => (
        <div className="col-lg-3 col-sm-6" key={foodData._id}>
          {/* << Use the 'Food' react component, passing the 'foodData'
          retrieved from API into the 'food' prop >> */}

          <Food food={foodData} />
        </div>
      ))}
    </section>
  );
};

export default FoodsList;
