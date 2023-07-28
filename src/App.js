import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/Login";
import Register from "./components/Register";
import Faq from "./components/Faq";
import NavBar from "./components/NavBar";
import createFooter from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {NavBar()}
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/Login" Component={LoginPage} />
        <Route path="/Register" Component={Register} />
        <Route path="/Faq" Component={Faq} />
        <Route path="/ContactUs" Component={ContactUs} />
      </Routes>
      {createFooter()}
    </div>
  );
}

export default App;
