import React, { useState, useEffect } from "react";
import { FoodEntry } from "../FoodEntry/FoodEntry";
import FoodButtons from "../FoodButtons/FoodButtons";
import { Table } from "react-bootstrap";
export const FoodEntriesList = () => {
  // << .Initialize foodEntries state to null >>

  const [entries, setEntries] = useState([]);
  // << State for whether or not data is being retrieved from the API >>

  const [loading, setLoading] = useState(true);
  //<< State to catch & store errors >>

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/entries/");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setEntries(json);
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
  if (entries.length === 0) {
    return (
      <section>
        <div className="display-1">No entries in database.</div>
      </section>
    );
  }
  // Define the layout to display each food item within
  return (
    <section className="d-flex flex-wrap mt-5 p-5 bg-dark">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Fat</th>
            <th>Protein</th>
            <th>Sodium</th>
            <th>Potassium</th>
            <th>Carbs</th>
            <th>Fiber</th>
            <th>Sugars</th>
            <th>Eaten on</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {/* map the 'foods' array into a list */}
          {entries.map((foodEntry) => (
            <FoodEntry entry={foodEntry} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default FoodEntriesList;
