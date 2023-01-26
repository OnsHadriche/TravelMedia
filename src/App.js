import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ResetPwd from "./pages/ResetPasword";

function App() {
  return (
    <>

      <Router>
            <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/forget_password" exact element={<ResetPwd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
