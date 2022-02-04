import "./App.css";
import Input from "../Input";
import { Login } from "../Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <main>
          <Login />
          <h1>Welcome to the page</h1>
          <Input />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
