import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
    const users = await response.json();

    if (users.length > 0) {
      localStorage.setItem("user", JSON.stringify(users[0])); // trying to store this //
      alert("Logged in!");
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } else {
      alert("Wrong email or password!");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={Login}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
