import axios from 'axios';
import React,{useEffect,useState} from 'react'

import AuthService from '../../services/auth.service';

function Bookings({id}) {

    const [bookings, setbookings] = useState([])
    const [currentUser, setCurrentUser] = useState(undefined); 
  useEffect(()=>{
    loadBookings();
  },[])


  const loadBookings = async () => {  
    const user = AuthService.getCurrentUser()
    if(user){
      setCurrentUser(user)
      const result = await axios.get(`http://localhost:4000/api/booking/allbookingsofuser/${user.id}`)
      if(result){
        setbookings(result.data);
        console.log(result.data)
      }
    }
  }
  const deletebooking = async (number) => {
    alert("Do you want to cancel the Booking?")
    const result = await axios.delete(`http://localhost:4000/api/booking/deletebooking/${number}`);
    loadBookings();
  }
  

  // console.log(bookings[0].arrivalTime);
  return (
   
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> id</th>
            <th scope="col"> Bus Name</th>
            <th scope="col">Ticket Number</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Journey Date</th>
            <th scope="col">Selected Seats    </th>
            <th scope="col">Total Fare     </th>
            <th scope="col">Cancel Booking    </th>


          </tr>
        </thead>
        <tbody>
          {bookings.map((bookings, index) => (
            <tr>



              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{bookings.busName}</td>
              <td>{bookings.bookingid}</td>
              <td>{bookings.departureTime}</td>
              <td>{bookings.arrivalTime}</td>
              <td>{bookings.journeyDate}</td>
              <td>{bookings.selectedSeats}</td>
              <td>{bookings.totalfair}</td>
           
              <td>
              
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deletebooking(bookings.bookingid)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
      
    </div>
  )
}

export default Bookings