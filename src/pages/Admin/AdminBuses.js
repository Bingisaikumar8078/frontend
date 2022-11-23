import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function AdminBuses() {

  const [buses, setbuses] = useState([]);
const {number} =  useParams();


  useEffect(() => {
    loadbuses();
  }, []);

  const loadbuses = async () => {
    const result = await axios.get("http://localhost:4000/api/bus/allbuses")
    setbuses(result.data);
  }

  const deletebus = async (number) => {
    const result = await axios.delete(`http://localhost:4000/api/bus/bus/${number}`);
    loadbuses();
  }
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Bus id</th>
            <th scope="col">Capacity</th>
            <th scope="col">From Place     </th>
            <th scope="col">To Place     </th>
            <th scope="col">Date   </th>
            <th scope="col">Departure   </th>
            <th scope="col">Arrival   </th>
            <th scope="col">Type   </th>
            <th scope="col">fare   </th>
            <th scope="col">status   </th>
            <th scope="col">Delete Bus   </th>

          </tr>
        </thead>
        <tbody>
          {buses.map((bus, index) => (
            <tr>



              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{bus.name}</td>
              <td>{bus.number}</td>
              <td>{bus.capacity}</td>
              <td>{bus.fromplace}</td>
              <td>{bus.toplace}</td>
              <td>{bus.date}</td>
              <td>{bus.departure}</td>
              <td>{bus.arrival}</td>
              <td>{bus.type}</td>
              <td>{bus.fare}</td>
              <td>{bus.status}</td>
              <td>
                {/* <Link className="btn btn-primary mx-2"
                  to={`/viewuser/${bus.id}`}>
                  Viewwwwwwww
                </Link>
                <Link className="btn btn-primary mx-2"
                  to={`/edituser/${bus.id}`}>
                  editttttttttt
                </Link> */}
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deletebus(bus.number)}
                >
                {  bus.number}
                </button>
               
               
              </td>
            </tr>
          ))}


        </tbody>
      </table>
      <Link className="btn btn-primary mx-2 flex justify-content-center "
                  to={'/admin/addbus'}>
                  Add bus
                </Link> 
    </div>
  )
}
