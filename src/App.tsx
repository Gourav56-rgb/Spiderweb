import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import EventRequests from "./pages/EventRequests";
import EventPage from "./pages/EventPage";
import Animation from "./components/Animation";

function App() {
  return (
    <div className="relative min-h-screen bg-blac">
      <div className="absolute inset-0 -z-10">
        <Animation />
      </div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<EventRequests />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
