import React from "react";
import Bookings from "../pages/users/Bookings";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-9 col-lg-7 col-xl-5">
          <div className="card" style={{borderRadius: "15px", backgroundColor:" #93e2bb"}}>
            <div className="card-body p-4 text-black">
              <div>
                <h6 className="mb-4">{currentUser.username.toUpperCase()} Profile</h6>
                <h6 className="mb-4"><strong>User   Id:</strong> {currentUser.id}</h6>
                <h6 className="mb-4"><strong>Email:</strong> {currentUser.email}</h6>
                <h6 className="mb-4">
Roles:

                <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
                </h6>

                
              </div>
              <div className="d-flex align-items-center mb-4">
              
                <div className="flex-grow-1 ms-3">
                  <div className="d-flex flex-row align-items-center mb-2">
                
                    <ul className="mb-0 list-unstyled d-flex flex-row" style={{color:" #1B7B2C"}}>
                     
                    </ul>
                  </div>
               
                </div>
              </div>
              <hr/>
          
              <button type="button" className="btn btn-success btn-rounded btn-block btn-lg"><i
                  className="far fa-clock me-2"></i>Book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Profile;
