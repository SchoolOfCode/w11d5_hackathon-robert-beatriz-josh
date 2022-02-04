import React from 'react'



export default function GameList({name, price, image}) {


  return (<div>
  <h1>{name}</h1>
  <img src= {image} alt = "picture of the game"/>
  <h3>{price}</h3>

  </div>);
}
