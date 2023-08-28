import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";

import "./App.css";
import MenuModal from "./components/MenuModal";
import Work from "./pages/Work";
import ScrollToTop from "./utils/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  const isDark = useDarkMode((state) => state.isDark);
  return (
    <div className={isDark ? "dark" : ""}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <MenuModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="work/:id" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
