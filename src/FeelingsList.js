import React from "react";

function FeelingsList({ feelings }) {
  return (
    <div>
      <h3>Feelings List</h3>
      <ul>
        {feelings.map((feeling, index) => (
          <li key={index}>{feeling}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeelingsList;
