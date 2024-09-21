import { Routes, Route } from "react-router-dom";
import Slidebar from "./components/Slidebar";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import Drawer from "./components/Drawer";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <Slidebar />
      <Drawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
