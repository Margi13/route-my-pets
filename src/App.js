import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, email: ''});
  useEffect(()=>{
    let userInfo = authService.getUser();
    setUserInfo({
      isAuthenticated: Boolean(userInfo),
      user: userInfo,
    });

  },[])


  const onLogin = (email)=>{
    setUserInfo({
      isAuthenticated: true,
      user: email,
    });
  };

  return (
    <div id="container">
      <Header {...userInfo}/>

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
