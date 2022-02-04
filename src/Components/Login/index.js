import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "antd/dist/antd.css";
import { Button } from "antd";

export const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <Button
          type="primary"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log out
        </Button>
      ) : (
        <div>
          {" "}
          {/* <h1>Please log in to view our awesome games page</h1> */}
          <Button type="primary" onClick={() => loginWithRedirect()}>
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};
