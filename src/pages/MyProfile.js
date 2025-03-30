import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MyProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

      useEffect(() => {
         const loggedUser = localStorage.getItem("user");

      if (!loggedUser) {
      alert("You must be logged in to see this page!");
      navigate("/login");
         } else {
            setUser(JSON.parse(loggedUser));
     }
      }, []);




  if (!user) {
    return <p>Loading...</p>;
  }

       function Logout() {
    localStorage.removeItem("user");
    navigate("/login");
                         }

  return (
    <div>
      <h2>My Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default MyProfile;
