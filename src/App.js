import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>

      <Router>
            <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
