import axios from 'axios';
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';

import DefaultLayoutAdmin from './DefaultLayoutAdmin';

function ProtectedRoutesUser({children}) {
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
 
<DefaultLayout>

  {children}

</DefaultLayout>
  
  
  </>
}

    </div>
  )
}

export default ProtectedRoutesUser