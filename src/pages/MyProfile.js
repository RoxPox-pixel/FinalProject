import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function MyProfile() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(""); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  


  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("user"));
    
    if (!existingUser) {
      navigate("/login"); 
      return;
    }

    setUserId(existingUser.id); 
    setFirstName(existingUser.firstName);
    setLastName(existingUser.lastName);
    setEmail(existingUser.email);
  }, [navigate]);

  
  async function profileUpdate(e) {
    e.preventDefault(); 

    const updatedUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    
    if (response.ok) {
      alert("Profile updated!"); 
      localStorage.setItem("user", JSON.stringify({ id: userId, ...updatedUser }));
    } else {
      alert("Error updating profile!");
    }
  }

  return (
    <div>
      <h2>My Profile</h2>
      <form onSubmit={profileUpdate}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default MyProfile;
