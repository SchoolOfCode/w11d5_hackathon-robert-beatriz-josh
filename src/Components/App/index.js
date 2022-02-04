import "./App.css";
import Input from "../Input";
import { Login } from "../Login";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../navbar/header.js";
import { useState } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [text, setText] = useState();

  async function fetchGame(game) {
    let response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${game}`
      // `https://swapi.dev/api/people?search=${game}`
    );
    let data = await response.json();
    setText(data[0]);
    console.log(data[0], "is this");
  }

  return (
    <div className="App">
      <Navbar />
      {isAuthenticated ? (
        <main>
          <Login />
          <h1>Welcome to the page</h1>
          <Input onSubmit={fetchGame} />
          <div>
            {/* {/* <h2>{text.external}</h2> */}
            <h2>{text.external}</h2>
            <h3>The cheapest price for this is £{text.cheapest}</h3>
            <img src={text.thumb} />
            {/* <GameList text={text} /> */}
            {/* {text.map((gameItems, index) => {
            return (
              <GameList
                name={gameItems.external}
                image={gameItems.thumb}
                price={gameItems.cheapest}
                key={index}
              />
            );
          })} */}
          </div>
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
