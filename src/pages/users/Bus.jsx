import React from 'react'
import { Link} from 'react-router-dom';

// import ''
// import '../resources/Layout.css';    
// import '../resources/global.css';
function Bus({bus}) {
    // const { number } = useParams();
    // const navigate = useNavigate();
    // const [currentUser, setCurrentUser] = useState(null);
    // useEffect(() => {
        
    //     const user = AuthService.getCurrentUser();
    
    //     if(user){
    //         setCurrentUser(user);
    //     }
    
      
    //     console.log(currentUser?.id);
    // }, [])
    
  
  return (
    <div className='card card-container'>
     <h1 className='text-sm'>{bus.name}</h1>
<hr/>
<div className="d-flex justify-content-between">
    <div>
        <p className="text-sm">From</p>
        <p className="text-sm">{bus.fromplace.substring(0,5)}</p>
    </div>
   
    <div>
        <p className="text-sm">to</p>
        <p className="text-sm">{bus.toplace.substring(0,5)}</p>
    </div>
    <div>
        <p className="text-sm">Fare</p>
        <p className="text-sm"> ₹ {bus.fare}/-</p>
    </div>
</div>
    <div className="d-felx justify-content-between align-items-end">
    <div>
        <p className="text-sm">Journey Date</p>
        <p className="text-sm"> {bus.date}</p>
    </div>
    <Link to={`/book-now/${bus.id}`} className="text-lg underline" >Book Ticket</Link>
    
{/* <Link className="text-lg underline"
                to={`/book-now/${bus.number}`}>
                    BookNow
                </Link> */}

    </div>

    </div>
  )
}

export default Bus