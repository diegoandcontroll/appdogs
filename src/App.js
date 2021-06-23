import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './NotFound';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login/*" element={<Login />}/>
            <ProtectedRoute path="account/*" element={<User />}/>
            <Route path="photo/:id" element={<Photo />}/>
            <Route path="profile/:user" element={<UserProfile />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
export default App;
