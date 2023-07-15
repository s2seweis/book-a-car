// import logo from './logo.svg';
import './App.css';
import  {Route , BrowserRouter , Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
// upgrade it to reactRouterDom vs6
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';



function App() {

  const {users} = useSelector(state=>state.usersReducer)
  console.log("line:106", users);

 


  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             {/* <ProtectedRoute user={users} path='/' exact component={Home} /> */}
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />

             <ProtectedRoute user={users} path='/booking/:carid' exact component={BookingCar} />
            
            {/* property drilling, passing it down to the child component */}

             <ProtectedRoute user={users} >
              <Home  />
            </ProtectedRoute>
            
             <ProtectedRoute user={users} path='/userbookings' exact component={UserBookings} />
             <ProtectedRoute user={users} path='/addcar' exact component={AddCar} />
             <ProtectedRoute user={users} path='/editcar/:carid' exact component={EditCar} />
             <ProtectedRoute user={users} path='/admin' exact component={AdminHome} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props, user)
{
  // console.log("line:105", props);

//   const [items, setItems] = useState([]);
  console.log("line:9000",props);
  console.log("line:9001",props.user.role);

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('user'));
//   if (items) {
//    setItems(items);
//   }
// }, []);

  const currentUser1 = JSON.parse(localStorage.getItem('user')) 
  // console.log("line:106", currentUser1?.role);
  // console.log("line:8000", currentUser1.role );

  // const currentUser2 = localStorage.getItem('user')
  // console.log("line:9000", currentUser2);



  if(props.user.role === "admin" )
  {
    // return <Redirect to='/admin'/>
    return <Route {...props} />
  }
  else {
    return <Redirect to='/login'/>
  }

}