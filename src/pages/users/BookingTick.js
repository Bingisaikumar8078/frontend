import { useParams } from 'react-router-dom';
import BookNow from './BookNow'
import axios from 'axios';

import React, { useState, useEffect } from "react";

const BookingTick = () => {
    const [bus, setbus] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadbus()
    }, []);
    const loadbus = async () => { 
        await axios.get(`http://localhost:4000/api/bus/bus/${id}`).then(res => { setbus(res.data) })
    }

  return (
    <div>
       <BookNow bus={bus} id={id}/>
    </div>
  )
}

export default BookingTick