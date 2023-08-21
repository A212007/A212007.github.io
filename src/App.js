import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Calendar from "./calendar";
import Events from "./components/Events";
import Sleep from "./components/Sleep";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Home from "./home";
import EditProfile from "./edit-profile";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
