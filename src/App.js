import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import FullProfile from './components/profile/FullProfile';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path='/' Component={HomePage}/>
          <Route path='/Login' Component={LoginPage}/>
          {/* add the registration page */}
          <Route path='/Register' Component={Register}/>
          <Route path='/Profile' Component={Profile}/>
          <Route path='/FullProfile/:userID' Component={FullProfile}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
