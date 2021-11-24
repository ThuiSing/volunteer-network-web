import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./utilities/pages/Home/Home";
import Header from "./utilities/pages/shared/Header/Header";
import Footer from "./utilities/pages/shared/Footer/Footer";
import "./App.css";
import Login from "./utilities/pages/Login/Login";
import RegisterVolunteer from "./utilities/pages/RegisterVolunteer/RegisterVolunteer";
import RegisteredList from "./utilities/pages/RegisterList/RegisteredList";
import AuthProvider from "./utilities/context/AuthProvider";
import Events from "./utilities/pages/Events/Events";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/log-in">
              <Login />
            </Route>
            <Route path="/register-volunteer/:id">
              <RegisterVolunteer />
            </Route>
            <Route exact path="/registered-list">
              <RegisteredList />
            </Route>
            <Route exact path="/my-events">
              <Events />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
