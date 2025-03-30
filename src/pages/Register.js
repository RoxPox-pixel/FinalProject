import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

async function Register(e) {
    e.preventDefault();

    const user = { email, password };

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      alert("Registered!");
      navigate("/login");
    } else {
      alert("Error!");
    }
  }




  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={Register}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
