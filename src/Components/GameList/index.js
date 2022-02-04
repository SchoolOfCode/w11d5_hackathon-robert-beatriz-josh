import React from "react";

export default function GameList({ text }) {
  return (
    <div>
      {text.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.thumb} /> <h3>{item.cheapest}</h3>
          </div>
        );
      })}
    </div>
  );
}
