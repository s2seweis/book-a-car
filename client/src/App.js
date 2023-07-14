// import logo from './logo.svg';
import './App.css';
import  {Route , BrowserRouter , Redirect} from 'react-router-dom'
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

import React , {useState,useEffect} from 'react'


function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />

             <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
            
            
             <ProtectedRoute path='/userbookings' exact component={UserBookings} />
             <ProtectedRoute path='/addcar' exact component={AddCar} />
             <ProtectedRoute path='/editcar/:carid' exact component={EditCar} />
             <ProtectedRoute path='/admin' exact component={AdminHome} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{
  console.log("line:105", props);

//   const [items, setItems] = useState([]);
//   console.log("line:9000",items );

// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('user'));
//   if (items) {
//    setItems(items);
//   }
// }, []);

  const currentUser1 = JSON.parse(localStorage.getItem('user')) 
  console.log("line:105", currentUser1?.role);
  // console.log("line:8000", currentUser1.role );

  // const currentUser2 = localStorage.getItem('user')
  // console.log("line:9000", currentUser2);



    if(currentUser1?.role === "admin" )
    {
      // return <Redirect to='/admin'/>
      return <Route {...props}/>
    }
    else {
      return <Redirect to='/login'/>
    }

}