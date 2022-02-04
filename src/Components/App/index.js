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
    let data = await fetch(
      `https://boiling-bayou-41448.herokuapp.com/https://www.cheapshark.com/api/1.0/games?title=${game}`
    );
    let fetchInfo = await data.json();
    setText(fetchInfo);
    console.log(text);
  }

  return (
    <div className="App">
      <Navbar />
      {isAuthenticated ? (
        <main>
          <Login />
          <h1>Welcome to the page</h1>
          <Input onSubmit={fetchGame} />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
