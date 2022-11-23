import React from 'react'
import '../resources/Layout.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
  
// import { set } from 'immer/dist/internal';
import '../App.css'
// import '../resources/Layout.css'
function DefaultLayoutAdmin({ children }) {

  const navigate = useNavigate();
  const [collapsed, setcollapsed] = useState(false);
  // const {user} =useSelector(state=>state.users)
 

  const adminmenu = [
    {
      name: 'Home',
      path: '/admin',
      icon: 'ri-home-line',
    },

    {
      name: 'Buses',
      path: '/admin/buses',
      icon: "ri-bus-line",
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: "ri-user-line",
    },
    {
      name: 'Bookings',
      path: '/admin/bookings',
      icon: "ri-file-list-line",
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: "ri-logout-box-line",
    },

  ]

  const menutoberendered = adminmenu;
  const activeRoute = window.location.pathname;
  return (
    <div className='layout-parent height '>
      <div className="sidebar sticky  ">
        <div className="sidebar-header">
          <h1 className="logo">BUS</h1>
          <h1 className="role">
            {/* {user?.name} */}
            <br />
            Role =
            Admin
          </h1>

        </div>
        <div className="d-flex flex-column gap-3 justify-content-start menu height">
          {menutoberendered.map((item, index) => {
            return <div
              className={`${activeRoute === item.path && 'active-menu-item'} menu-item`}

            >
              <i className={item.icon}></i>
              {!collapsed && <span onClick={() => {
                if (item.path === '/logout') {
                  localStorage.removeItem("token");
                  navigate('/login');
                } else {
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
                  () => setcollapsed(!collapsed)}
              ></i>

            )
            :
            (<i className="ri-close-line"

              onClick={
                () => setcollapsed(!collapsed)}
            ></i>)}
        </div>
        <div className="content">
          {children}

        </div>
      </div>

    </div>
  )
}

export default DefaultLayoutAdmin