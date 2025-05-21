import { useState, useEffect } from "react";
import App from "../App.jsx";
import Signup from "../Signup.jsx";
import Login from "../Login.jsx";

function ZeroRouter() {
  const [url, setUrl] = useState(window.location.pathname);
  console.log("render");

  useEffect(() => {
    console.log("useEffect");
    const onPopState = () => {
      setUrl(window.location.pathname);
    };
    document.querySelector("a").addEventListener("click", onPopState);
    window.addEventListener("popstate", onPopState);

    return () => {
      console.log("useEffect cleanup");
      window.removeEventListener("popstate", () => {});
    };
  }, [url]);

  console.log("after render");

  if (url === "/signup") {
    return <Signup />;
  } else if (url === "/login") {
    return <Login />;
  } else if (url === "/") {
    return <App />;
  }
}

export default ZeroRouter;
