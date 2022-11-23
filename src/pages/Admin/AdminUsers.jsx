import axios from 'axios';
import React,{useEffect,useState} from 'react'


function AdminUsers() {

   
    const [users, setusers] = useState([])
  
  useEffect(()=>{
    loadusers();
  },[])


  const loadusers = async () => {  

      const result = await axios.get(`http://localhost:8080/api/auth/allusers`)
      if(result){
        setusers(result.data);
        console.log(users);
       
      }
  }
 

  // console.log(bookings[0].arrivalTime);
  return (
   
    <div>
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col"> S.NO</th>
            <th scope="col"> id</th>
            <th scope="col">  Name of the User</th>
            <th scope="col"> Email-Id</th>
         
            


          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr>



              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{users.id}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
         
           
              {/* <td>
                <Link className="btn btn-primary mx-2"
                  to={`/viewuser/${bus.id}`}>
                  Viewwwwwwww
                </Link>
                <Link className="btn btn-primary mx-2"
                  to={`/edituser/${bus.id}`}>
                  editttttttttt
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deletebus(bus.id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}


        </tbody>
      </table>
      
    </div>
  )
}

export default AdminUsers