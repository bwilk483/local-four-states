import "./app.css";
import Home from "./routes/Home/Home";
import LocalBusinesses from "./routes/Local/Local";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Blog from "./routes/Blog/Blog";
import Retail from "./routes/Retail/RHome/rhome";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LocalBusinesses" element={<LocalBusinesses />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* Retail Website Links */}
        <Route path="/retail/home" element={<Retail />}></Route>
      </Routes>
    </>
  );
}

export default App;
