import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/User/Profile";
import MyPets from "../pages/CadastroPet/MyPets";
import AddPet from "../pages/CadastroPet/AddPet";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/cadastropet/mypets" element={<MyPets />} />
      <Route path="/cadastropet/add" element={<AddPet />} />
    </Routes>
  );
}
