import { Button, Col, Row } from 'antd';
import axios from 'axios';
// import { Button } from 'bootstrap';
import AuthService from "../../services/auth.service.js";
import React, { useState, useEffect } from "react";

import BookNowModal from '../../components/model/BookNowModal';
import SeatSelection from '../../components/SeatSelection';
function BookNow({ bus, id

}) {

const [currentUser, setCurrentUser] = useState(null);
useEffect(() => {
    
    const user = AuthService.getCurrentUser();

    if(user){
        setCurrentUser(user);
    }

  
    console.log("ID:",currentUser?.id);
}, [])
    const [selectedSeats, setSelectedSeats] = useState([])
    const [show, setShow] = useState(false);
    const [bookingDetails, setBookingDetails] = useState();
    const [seats, setSeats] = useState([]);


   
    
    console.log("bus number ", bus.id);
    const setDisabler=(tempSelected)=>{
        const unique= new Set()
          tempSelected.forEach((d)=>{
            d.forEach(t=>unique.add(t))
          })
          setSeats(Array.from(unique))
    }
    useEffect(()=>{
        (async()=>{
          const {data}= await axios.get(`http://localhost:4000/api/booking/allbookingsofbus/${id}`)
          const tempSelected=[...data.map(({selectedSeats})=>selectedSeats.split(",").map((d)=>+d))]
          setDisabler(tempSelected)
        })()
       

    },[])
   
  


    const loadBookings = () => {
       
        axios.get(`http://localhost:4000/api/booking/allbookingsofbus/${id}`).then(res => {
            setBookingDetails(res.data)
            res.data?.map(detail => {
                let a = detail.selectedSeats
                setSeats(seats + "," + a)

            })
            console.log(seats)
            console.log(res.data)

        })
    }





    const handleShow = () => {
        if (selectedSeats.length > 0) setShow(true)
        else alert("please select minimum 1 seat")
        
    };




    return (
        <div>

            {bus && (
                <Row className='md-3' gutter={40}>
                    <Col lg={12} xs={24} sm={24}>
                        <h4 className="text-2xl text-secondary"><b>{bus.name}</b></h4>
                        <h4 className="text-md">{bus.fromplace}-{bus.toplace}</h4>

                        <hr />
                        <div className="flex flex-col gap-1">
                            <h4 className="text-lg">Journey Date

                                <b>
                                    :{bus.date}
                                </b>
                            </h4>
                            <h4 className="text-lg">Journey Fare

                                <b>
                                    :₹{bus.fare}/-
                                </b>
                            </h4>

                            <h4 className="text-lg">Departure Time

                                <b>
                                    :{bus.departure}
                                </b>
                            </h4>
                            <h4 className="text-lg">Arrival Time

                                <b>
                                    :{bus.arrival}
                                </b>
                            </h4>
                            <h4 className="text-lg">Bus Capacity

                                <b>
                                    :{bus.capacity}
                                </b>
                            </h4>
                            <h4 className="text-lg">Seats left

                                <b>
                                    :{bus.capacity - seats.length}
                                </b>
                            </h4>

                        </div>

                        <hr />
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl">Selected Seats
                                <b>
                                    :{selectedSeats.join(",")}
                                </b>
                            </h4>
                            <h4 className='text-xl md-2'>Fare:<b>₹{bus.fare * selectedSeats.length}</b></h4>
                        </div>
                        <Button variant="primary" onClick={handleShow}>
                            Book Tickets
                        </Button>
                        <Button variant="primary" onClick={loadBookings}>
                            selectSeats
                        </Button>

                    </Col>
                    <Col lg={12} xs={24} sm={24}>

                        <SeatSelection
                            selectedSeats={[...selectedSeats]}
                            setSelectedSeats={setSelectedSeats}
                            bus={bus}
                            id={bus.id}
                            seats={seats}
                            setSets={setSeats}
                        />

                    </Col>
                </Row>)
            }

            <BookNowModal  setShow={setShow} show={show} bus={bus} selectedSeats={selectedSeats} userId={currentUser?.id} />
        </div>
    )
}

export default BookNow