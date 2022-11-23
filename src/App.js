import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './resources/global.css';
import './resources/Layout.css';
import 'antd/dist/antd.min.css';
import DefaultLayout from "./components/DefaultLayout";
import AuthService from "./services/auth.service";
import logo  from '../src/sbuslogo.png'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";

import EventBus from "./common/EventBus";
import AdminHome from "./pages/Admin/AdminHome";
import AdminUsers from './pages/Admin/AdminUsers';
import AdminBuses from './pages/Admin/AdminBuses'

import DefaultLayoutAdmin from './components/DefaultLayoutAdmin';

import BookingTick from "./pages/users/BookingTick";
import Bookings from "./pages/users/Bookings";
import AdminBookings from "./pages/Admin/AdminBookings";
import BusForm from "./pages/Admin/BusForm";
import ProtectedRoutesAdmin from "./components/ProtectedRoutesAdmin";
import ProtectedRoutesUser from "./components/ProtectedRoutesUser";




const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  // const nav = useNavigate();
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    
    <>
      
      <nav className="navbar navbar-expand navbar-dark bg-dark position-sticky sticky-top">
        <Link to={"/"} className="navbar-brand">
         <img  src={logo} alt="SBUS" width="30" height="24"/>
          S B U S
        </Link>
        
        <div className="navbar-nav mr-auto">
        {currentUser &&
          <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>}

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin/buses"} className="nav-link">
              {/* <button className="primary-btn" onClick={()=>{
                nav('/admin/buses')
              }}></button> */}
              Admin
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
          
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
          <Route path="/home" element={<ProtectedRoutesUser><Home/></ProtectedRoutesUser>} />
          <Route path="/user" element={<ProtectedRoutesUser><Home/></ProtectedRoutesUser>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="/user" element={<BoardUser/>} /> */}
          <Route path="/mod" element={<BoardModerator/>} />
       
          {/* <Route path="/" element={<Home /> }/> */}
          {/* <Route path="/admin" element={<DefaultLayoutAdmin><AdminHome/></DefaultLayoutAdmin>} /> */}
          <Route path="/admin" element={<ProtectedRoutesAdmin><AdminHome/></ProtectedRoutesAdmin>}/>
          <Route path="/admin/home" element={<ProtectedRoutesAdmin><AdminHome/></ProtectedRoutesAdmin>} />
          <Route path="/admin/buses" element={<ProtectedRoutesAdmin><AdminBuses/></ProtectedRoutesAdmin>}/>
          <Route path="/admin/users" element={<ProtectedRoutesAdmin><AdminUsers/></ProtectedRoutesAdmin>} />
          <Route path="/admin/bookings" element={<ProtectedRoutesAdmin><AdminBookings/></ProtectedRoutesAdmin>} />
          <Route path="/admin/addbus" element={<ProtectedRoutesAdmin><BusForm/></ProtectedRoutesAdmin>} />
          {/* book bus */}
          <Route path="/book-now/:id" element={<ProtectedRoutesUser><BookingTick/></ProtectedRoutesUser>} />

          <Route path="/bookings/" element={<ProtectedRoutesUser><Bookings/></ProtectedRoutesUser>}/>
        </Routes>
      </div>

    </>
  );
};

export default App;
