import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";

const FoodForm = () => {
  // << If an ID is present in params, edit. Else form will be
  // used to create a new food >>

  const { id } = useParams();
  const location = useLocation();

  // << Initialize foodData from state if available, otherwise null to
  // be filled from API request >>

  const [foodData, setFoodData] = useState(location.state?.food || null);
  const [error, setError] = useState(null);

  // << Local form state for each field >>

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

  useEffect(() => {
    // << If the ID is present, check for foodData in state
    // If foodData is missing, fetch it from the API >>

    // << Wrap in 'if' to avoid trying to fetch id if no id
    // is passed: IE, creating new food document >>

    if (id) {
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
    }
  }, [id, foodData]);

  // << Handler for form submission >>
  const navigate = useNavigate();
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
    // << payload to be sent in body of API request >>

    const payload = {
      name,
      calories,
      fat,
      sodium,
      potassium,
      carbs: {
        total: carbsTotal,
        sugar,
        fiber,
      },
      protein,
    };

    // << if the id exists, pass from params to the payload >>

    if (id) {
      payload.id = id;
    }

    try {
      // << Build the request to send to the API >>

      // << if an id is present, use /foods/edit and PUT
      // else use the add endpoint and post >>

      setLoading(true);

      let apiEndpoint = "/api/foods/edit";
      let method = "PUT";
      if (!id) {
        apiEndpoint = "/api/foods/add";
        method = "POST";
      }

      const response = await fetch(apiEndpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // << If the response is not 200, display the error >>

      if (!response.ok) {
        setLoading(false);
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      // << Display success message >>
      setMessage("Food saved successfully!");

      // << Page redirects, leave Loading disabled >>
      // setLoading(false);
    } catch (err) {
      console.error("Error saving food:", err);
      setError(err);
    }
  };

  return (
    // << Display for the update form >>

    <Form onSubmit={handleSubmit} className=" form-control text-light">
      <h2 className="mb-5 display-4">{id ? "Edit" : "Create"}</h2>

      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error.message}</Alert>}
      <InputGroup>
        <InputGroup.Text className="w-25">Name</InputGroup.Text>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Calories</InputGroup.Text>
        <Form.Control
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <InputGroup.Text>kcal</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Fat</InputGroup.Text>
        <Form.Control
          type="number"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
        <InputGroup.Text>g</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Sodium</InputGroup.Text>
        <Form.Control
          type="number"
          value={sodium}
          onChange={(e) => setSodium(e.target.value)}
        />
        <InputGroup.Text>mg</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Potassium</InputGroup.Text>
        <Form.Control
          type="number"
          value={potassium}
          onChange={(e) => setPotassium(e.target.value)}
        />
        <InputGroup.Text>mg</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Carbs</InputGroup.Text>
        <Form.Control
          type="number"
          value={carbsTotal}
          onChange={(e) => setCarbsTotal(e.target.value)}
        />
        <InputGroup.Text>g</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="ms-4 w-25">Sugar</InputGroup.Text>
        <Form.Control
          type="number"
          value={sugar}
          onChange={(e) => setSugar(e.target.value)}
        />
        <InputGroup.Text>g</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="ms-4 w-25">Fiber</InputGroup.Text>
        <Form.Control
          type="number"
          value={fiber}
          onChange={(e) => setFiber(e.target.value)}
        />
        <InputGroup.Text>g</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="w-25">Protein</InputGroup.Text>
        <Form.Control
          type="number"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <InputGroup.Text>g</InputGroup.Text>
      </InputGroup>

      <Button type="submit" className="mt-3" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
};

export default FoodForm;
