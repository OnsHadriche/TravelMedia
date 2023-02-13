import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UpdateEvent from "./pages/UpdateEvent";
import UpdateHotel from "./pages/UpdateHotel";
import UpdatePack from "./pages/UpdatePack";
import CreatePageAgency from "./pages/CreatePageAgency";
import DetailsHotel from "./pages/DetailsHotel";
import DetailsPage from "./pages/DetailsPage";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResetPwd from "./pages/ResetPasword";
import { login } from "./redux/actions/userActionCreators";
import CustomRoute from "./routers/CustomRoute";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
// import Test from "./pages/test";
// import test from "./pages/test"

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) {
    dispatch(login(user, token));
  }

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
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/create-page" exact element={<CreatePageAgency/>} />
          <Route path="/page/:id" exact element={<DetailsPage/>} />
          <Route path = "/update-hotel/:id" exact element = {<UpdateHotel/>}/>
          <Route path = "/update-pack/:id" exact element = {<UpdatePack/>}/>
          <Route path = "/update-event/:id" exact element = {<UpdateEvent/>}/>
          {/* <CustomRoute path="/" exact component={<Home />} />
          <CustomRoute path="/hotels" exact component={<Hotels />} />
          <PublicRoute path="/register" exact component={<Register />} />
          <PublicRoute path="/forget_password" exact component={<ResetPwd />} />
          <PrivateRoute path="/hotel-details/:id" exact component={<DetailsHotel/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
