import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainList from "./pages/MainList";
import MyProfile from "./pages/MyProfile";
import NavBar from "./components/NavBar";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";


function App() {
    return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Books" element={<MainList />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Add-Book" element={<AddBook />} />
        <Route path="/Edit-Book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
}




export default App;
