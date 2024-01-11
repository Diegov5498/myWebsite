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
          <Route path="/myWebsite" element={<Home />} />
          <Route path="/myWebsite/portfolio" element={<Portfolio />} />
          <Route path="/myWebsite/portfolio/c" element={<C />} />
          <Route
            path="/myWebsite/portfolio/ReactProjects"
            element={<ReactProjects />}
          />
          <Route
            path="/myWebsite/portfolio/Javascript"
            element={<Javascript />}
          />
          <Route path="/myWebsite/ComingSoon" element={<Update />} />
          <Route path="/myWebsite*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
