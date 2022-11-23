import { Row, Col } from 'antd';

import React,{useState} from 'react'
import '../resources/seats.css'

function SeatSelection(
    {
        selectedSeats,
        setSelectedSeats,
        bus,
        id,
        seats
    }
) {
    console.log(parseInt(bus.capacity));
const cap=parseInt(bus.capacity);
console.log(typeof(cap));
  const [capacity, setcapacity] = useState(null)


   
    const selectorUnselectSeats = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));

        }
        else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    }







    return (
        <div>
            <div className="bus-container">
                <Row gutter={[10, 10]}>

                    {Array.from(Array(bus.capacity).keys()).map((seat) => {

                        let seatClass = ''
                        if (selectedSeats.includes(seat + 1)) {
                            seatClass = 'selected-seat'
                        } 
                        else if(seats.includes(seat + 1)) {
                            seatClass = 'booked-seat'
                        }

                        {
                            return <Col span={6}>
                                <div className={`seat ${seatClass}`} disabled={seatClass==="booked-seat"?true:false} onClick={() => selectorUnselectSeats(seat + 1)}> {seat + 1} </div>
                            </Col>
                        }
                    }
                    )
                    }


                </Row>
            </div>
        </div>
    );
}

export default SeatSelection