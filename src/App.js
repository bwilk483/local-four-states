import "./app.css";
import Home from "./routes/Home/Home";
import LocalBusinesses from "./routes/Local/Local";
import About from "./routes/About/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LocalBusinesses" element={<LocalBusinesses />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
