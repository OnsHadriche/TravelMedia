import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailsHotel from "./pages/DetailsHotel";
// import DetailsHotel from "./pagenpm s/DetailsHotel";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Register from "./pages/Register";
import ResetPwd from "./pages/ResetPasword";
// import Test from "./pages/test";
// import test from "./pages/test"

function App() {
  return (
    <>

      <Router>
            <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels" exact element={<Hotels />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/forget_password" exact element={<ResetPwd />} />
          <Route path="/hotel-details/:id" exact element={<DetailsHotel/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
