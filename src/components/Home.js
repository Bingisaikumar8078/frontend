import { Col, Row } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Bus from "../pages/users/Bus";
import AuthService from "../services/auth.service";

import UserService from "../services/user.service";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [content, setContent] = useState("");
  // useEffect(() => {
  // },[]
  // )
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();
  
    if (user) {
      setCurrentUser(user);
      console.log("user from ",currentUser)
     
    }
    else{
      <Navigate to='/login'/>
    }
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const [buses, setbuses] = useState([]);

  const loadbuses = async () => {
    const result = await axios.get("http://localhost:4000/api/bus/allbuses")
    setbuses(result.data);
  }

  useEffect(() => {
    loadbuses();
  }, []);

  return (
    <>
    {
      currentUser && <div>
     
      <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
          }}
    
            className="flex">
    
            {buses.map(bus => (
    
              <>
                <Bus bus={bus} />
    
              </>
    
    
            ))}
    
    
          </div>
        </div>
    }
   
    </>
  );
};

export default Home;
