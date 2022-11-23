import axios from 'axios';
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import DefaultLayoutAdmin from './DefaultLayoutAdmin';

function ProtectedRoutesAdmin({children}) {
  const nav = useNavigate();
   useEffect(()=>{
      const user = localStorage.getItem(`user`);
      if (!user) {

      nav("/login")
  }
  else {

  }
  },[]);


  return (
    <div>

{
 
  
  <>
  <DefaultLayoutAdmin>
  {children}
</DefaultLayoutAdmin>
  
  
  </>
}

    </div>
  )
}

export default ProtectedRoutesAdmin