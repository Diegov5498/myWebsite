import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/general.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import C from "./projects/C";
import ReactProjects from "./projects/ReactProjects";
import Python from "./projects/Python";
import Footer from "./Footer";
import Update from "./Update";
import NotFound from "./NotFound";
import Javascript from "./projects/Javascript";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/c" element={<C />} />
          <Route path="/portfolio/ReactProjects" element={<ReactProjects />} />
          <Route path="/portfolio/Javascript" element={<Javascript />} />
          <Route path="/ComingSoon" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
