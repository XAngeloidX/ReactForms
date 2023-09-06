import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setToken(result.token);
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      setError("An error occurred during sign-up");
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

SignUpForm.propTypes = {
  setToken: () => {},
};

// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…g3Mn0.-tIgLGCH8hhBYDCzF_CIxzcldfhEJGrVQUIWE2iY1uc'