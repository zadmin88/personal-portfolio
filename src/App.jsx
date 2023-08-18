import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";

import "./App.css";
import MenuModal from "./components/MenuModal";

function App() {
  const isDark = useDarkMode((state) => state.isDark);
  return (
    <div className={isDark ? "dark" : ""}>
      <Router>
        <Navbar />
        <MenuModal />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
