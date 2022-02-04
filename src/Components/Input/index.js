import React, { useState } from "react";

function Input({ onSubmit }) {
  const [game, setGame] = useState("");
  function getValue(e) {
    setGame(e.target.value);
    console.log(game);
  }

  function searchResults(e) {
    e.preventDefault();
    onSubmit(game);
  }
  return (
    <form>
      <input placeholder="Search for a game" onChange={getValue}></input>
      <button onClick={searchResults}>Search</button>
    </form>
  );
}

export default Input;
