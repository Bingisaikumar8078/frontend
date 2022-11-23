import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {  Col, Row } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookNowModal({show,setShow,bus,selectedSeats,userId}) {
  
  
const nav= useNavigate();
  
  const handleClose = () => setShow(false);

  const bookTickets =()=>{
   
    const bookingInfo ={
      busName:bus.name,
      busNumber:bus.number,
      journeyDate:bus.date,
      departureTime:bus.departure,
      arrivalTime:bus.arrival,
      selectedSeats:selectedSeats.toString(),
      totalfair:bus.fare *selectedSeats.length,
      userId:userId,
      busId:bus.id

    }
    nav('/bookings')
    axios.post(`http://localhost:4000/api/booking/bookabus`,bookingInfo)
    .then(res=>alert("Your Tickets has been booked"))
    .catch(err=>alert(err))
    window.location.reload();
    console.log(bookingInfo)
    
    setShow(false)
    // console.log("USER ID FROM BOOKNOW MODEL",userId);
    // nav(`/bookings/${userId}`)

  }

  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Tickets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                            <h4 className="text-lg">User id

                                <b>
                                    :{userId}
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
                           
                           

                        </div>
                        <hr />
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl">Selected Seats
                                <b>
                                    :{selectedSeats.join(",")}
                                </b>
                            </h4>
                            <h4 className='text-xl md-2'>Fare:<b>₹{bus.fare *selectedSeats.length}</b></h4>
                        </div>
                       
                    </Col>
                </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={bookTickets}>
            Confirm and Book
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  );
}

export default BookNowModal;