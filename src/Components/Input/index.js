import React, { useState } from "react";

function Input() {
  const [game, setGame] = useState("");
  function getValue(e) {
    setGame(e.target.value);
    console.log(game);
  }
  return (
    <form>
      <input placeholder="Search for a game" onChange={getValue}></input>
      <button></button>
    </form>
  );
}

export default Input;
