import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Posts from "./Components/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
    </Routes>
  );
}

export default App;
