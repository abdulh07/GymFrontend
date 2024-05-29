import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Session from "./pages/Session/Session";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile/Profile";
import SessionSingle from "./pages/Session/SessionSingle";
import Coach from "./pages/Coach/Coach";
import Chat from "./pages/chat/chat";
import Exercises from "./pages/Exercises/Exercises";
import FoodGallery from "./pages/Food/FoodGallery";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/session" element={<Session />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/session/:id" element={<SessionSingle />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/exercises/:id" element={<Exercises />} />
        <Route path="/food" element={<FoodGallery />} />


      </Routes>
      <Footer />
    </div>
  );
};

export default App;
