import { Routes, Route } from "react-router-dom";
import Slidebar from "./components/Slidebar";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <Slidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
