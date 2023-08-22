import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calendar from "./calendar";
import Profile from "./profile";
import Home from "./home";
import EditProfile from "./edit-profile";
import Journal from "./journal";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="journal" element={<Journal />} />
      </Routes>
    </div>
  );
}

export default App;
