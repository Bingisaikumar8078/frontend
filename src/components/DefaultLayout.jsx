import React from 'react'
import '../resources/Layout.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

// import { set } from 'immer/dist/internal';
// import '../resources/Layout.css';
import '../App.css'

import '../components/DefaultLayout.css';
import AuthService from '../services/auth.service';

function DefaultLayout({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const [collapsed, setcollapsed] = useState(false);
  // const {user} =useSelector(state=>state.users)
  const usermenu = [
    {
      name: 'Home',
      path: '/home',
      icon: 'ri-home-line',
    },
    {
      name: 'Bookings',
      path: `/bookings`,
      icon: "ri-file-list-line",

    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'ri-user-line',
    },
    {
      name: 'Logout',
      path: '/login',
      icon: "ri-logout-box-line",
    },
  ]

 
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if(user){
        setCurrentUser(user);
    }

  
    console.log("ID:",currentUser?.id);
  
    
  }, []);

  const menutoberendered = usermenu;
  const activeRoute = window.location.pathname;
  return (
    <div className='layout-parent height'>
      <div className="sidebar">
<div className="sidebar-header">
<h1 className="logo">BUS</h1>
<h1 className="role">
  {/* {user?.name} */}
<br/>
Role =
USER
</h1>

</div>
        <div className="d-flex flex-column gap-3 justify-content-start menu">
          {menutoberendered.map((item, index) => {
            return <div
              className={`${activeRoute === item.path && 'active-menu-item'} menu-item`}

            >
              <i className={item.icon}></i>
           {!collapsed &&    <span onClick={() => {
                if(item.path==='/logout'){
                  localStorage.removeItem("token");
                  navigate('/login');
                }else{
                    navigate(item.path);
                }
                  
    
              }}>{item.name}

              </span>}
            </div>
          })}
        </div>
      </div>
      <div className="body">
        <div className="header">
          
          {collapsed ? 
          (
          <i className="ri-menu-fill"
          onClick={
            ()=>setcollapsed(!collapsed)}
          ></i>
        
          )
          : 
          (<i className="ri-close-line"
          
          onClick={
            ()=>setcollapsed(!collapsed)}
          ></i>)}
          <div className="d-flex justify-content-center">
       
          <marquee direction="right" >
          Book your Bus Now!
</marquee>

          </div>
        </div>
        
        <div className="content">
          {children}

        </div>
      </div>

    </div>
  )
}

export default DefaultLayout