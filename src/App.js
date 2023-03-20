import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Agency from "./pages/Agency";
import CreatePageAgency from "./pages/CreatePageAgency";
import DetailsEvent from "./pages/DetailsEvent";
import DetailsHotel from "./pages/DetailsHotel";
import DetailsPage from "./pages/DetailsPage";
import Event from "./pages/Event";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Package from "./pages/Package";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResetPwd from "./pages/ResetPasword";

import UpdateEvent from "./pages/UpdateEvent";
import UpdateHotel from "./pages/UpdateHotel";
import UpdatePack from "./pages/UpdatePack";
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
            {/* <Navbar /> */}
        <Switch>
          <CustomRoute path="/" exact component={Home} />
          <CustomRoute path="/hotels" exact component={Hotels } />
          <CustomRoute path="/agency" exact component={Agency } />
          <CustomRoute path="/events" exact component={Event } />
          <CustomRoute path="/package" exact component={Package } />
          <PublicRoute path="/register" exact component={Register } />
          <PublicRoute path="/forget_password" exact component={ResetPwd } />
          <PrivateRoute path="/hotel-details/:id" exact component={DetailsHotel} />
          
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/create-page" exact component={CreatePageAgency} />
          <PrivateRoute path="/page/:id" exact component={DetailsPage} />
          <PrivateRoute path="/event/:id" exact component={DetailsEvent} />
          <PrivateRoute path = "/update-hotel/:id" exact component = {UpdateHotel}/>
          <PrivateRoute path = "/update-pack/:id" exact component = {UpdatePack}/>
          <PrivateRoute path = "/update-event/:id" exact component = {UpdateEvent}/>
          {/* <CustomRoute path="/" exact component={<Home />} />
          <CustomRoute path="/hotels" exact component={<Hotels />} />
          <PublicRoute path="/register" exact component={<Register />} />
          <PublicRoute path="/forget_password" exact component={<ResetPwd />} />
          <PrivateRoute path="/hotel-details/:id" exact component={<DetailsHotel/>} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
