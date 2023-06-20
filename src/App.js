import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import Register from './components/Register';
import Faq from './components/Faq';
import NavBar from "./components/NavBar"
import createFooter from './components/Footer';
import { Navbar } from 'react-bootstrap';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
    {/* {Navbar()} */}
    {NavBar()}
      <div>
        <Routes>
          <Route exact path='/' Component={HomePage}/>
          <Route path='/Login' Component={LoginPage}/>
          {/* add the registration page */}
          <Route path='/Register' Component={Register}/>
          <Route path='/Faq' Component={Faq}/>
          <Route path='/ContactUs' Component={ContactUs}/>
        </Routes>
        <footer></footer>
      </div>
      {createFooter()}
    </>
  );
}

export default App;
