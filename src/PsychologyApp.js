import React, { useState } from "react";
import FeelingsList from "./FeelingsList"; // Import the new component

function PsychologyApp() {
  const [feeling, setFeeling] = useState("");
  const [feelings, setFeelings] = useState([]);
  const [message, setMessage] = useState("");

  const inspirationalMessages = {
    happy: "Keep smiling and enjoy the moment!",
    sad: "It's okay to feel sad. Better days are coming.",
    anxious: "Take a deep breath. You are stronger than you think.",
    excited: "Embrace the excitement and make the most of it!",
    // Add more feelings and messages as needed
  };

  const handleInputChange = (event) => {
    setFeeling(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (feeling.trim()) {
      setFeelings([...feelings, feeling]);
      setMessage(
        inspirationalMessages[feeling.toLowerCase()] ||
          "Stay positive and keep going!"
      );
      setFeeling("");
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={feeling}
            onChange={handleInputChange}
            placeholder="Enter your feeling"
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>} {/* Display the inspirational message */}
      </div>
    </div>
  );
}

export default PsychologyApp;
