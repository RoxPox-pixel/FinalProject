import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainList from "./pages/MainList";
import MyProfile from "./pages/MyProfile";
import NavBar from "./components/NavBar";
import AddBook from "./pages/AddBook";;


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<MainList />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}




export default App;
