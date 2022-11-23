import React ,{useState}from 'react'

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// function BusForm() {

//     const nav= useNavigate();

//     const onComplete = async(values)=>{
//         console.log(values)
//         let response = ''
//         try {
//             response = await axios.put("http://localhost:4000/api/bus/bus",values)
//             nav('/admin/buses')

//         } catch (error) {
//             message.error(response.data.error)
//         }
       
//     }
//   return (
//     <>
  
    
//     <div>
//     <Form layout='vertical' onFinish={onComplete}>
//         <Row gutter={[10,10]}>
//             <Col lg={24} xs={24}>
//                 <Form.Item label="BUS NAME" name='name'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={12} xs={24}>
//                 <Form.Item label="Bus Number" name='number'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={12} xs={24}>
//                 <Form.Item label="Bus Capacity" name='capacity'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={12} xs={24}>
//                 <Form.Item label="From" name='fromplace'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={12} xs={24}>
//                 <Form.Item label="To" name='toplace'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Journey Date" name='date'>
//                     <input type="Date"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Departure" name='departure'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Arrival" name='arrival'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Type" name='type'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Fare" name='fare'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
//                 <Form.Item label="Status" name='status'>
//                     <input type="text"/>
//                 </Form.Item>
//             </Col>
//             <Col lg={8} xs={8}>
              
//                     <button input type="submit" >SAVE</button>
      
//             </Col>
 
//         </Row>
//     </Form>
//     </div>
    
    
   
//     </>
//   )
// }


 function BusForm() {
  let navigate = useNavigate();

  const [bus, setBus] = useState({

    name:"",
    number:"",
    capacity:"",
    fromplace:"",
    toplace:"",
    date:"",
    departure:"",
    arrival:"",
    type:"",
    fare:"",
    status:"",


   
  });

  const { name, number, capacity,fromplace,toplace,date,departure,arrival,type,fare,status } = bus;

  const onInputChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/bus/bus", bus);
    navigate("/admin/buses");
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">ADD BUS</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Bus name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
     
              <label htmlFor="number" className="form-label">
               Bus Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Bus Number"
                name="number"
                value={number}
                onChange={(e) => onInputChange(e)}
                />
            
     
              <label htmlFor="capacity" className="form-label">
              Capacity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Bus Capacity"
                name="capacity"
                value={capacity}
                onChange={(e) => onInputChange(e)}
                />
           
          
              <label htmlFor="fromplace" className="form-label">
           From Place
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter From plce"
                name="fromplace"
                value={fromplace}
                onChange={(e) => onInputChange(e)}
                />
           
              <label htmlFor="toplace" className="form-label">
           To Place
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter To Place"
                name="toplace"
                value={toplace}
                onChange={(e) => onInputChange(e)}
                />
        
                </div>
          </div>
          <div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
         Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter Date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
           
              <label htmlFor="departure" className="form-label">
              Departure
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Departure Time"
                name="departure"
                value={departure}
                onChange={(e) => onInputChange(e)}
                />
          
                
        
              <label htmlFor="arrival" className="form-label">
              arrival
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="arrival Time"
                name="arrival"
                value={arrival}
                onChange={(e) => onInputChange(e)}
              />
       
              <label htmlFor="type" className="form-label">
              type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
                />
         
              <label htmlFor="fare" className="form-label">
              fare
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="fare"
                name="fare"
                value={fare}
                onChange={(e) => onInputChange(e)}
                />
         
              <label htmlFor="status" className="form-label">
              status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/admin/buses">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusForm

