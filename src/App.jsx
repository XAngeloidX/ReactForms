import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/signupform";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
