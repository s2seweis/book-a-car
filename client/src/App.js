// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
// ### State Drilling
import {useSelector} from 'react-redux';

function App () {
  const {users} = useSelector (state => state.usersReducer);
  console.log ('line:106', users);

  return (
    <div className="App">

      <BrowserRouter>

        <Route users={users} path="/" exact component={Home} />
        {/* <ProtectedRoute path="/" exact component={Home} /> */}
        <Route users={users} path="/login" exact component={Login} />
        <Route users={users} path="/register" exact component={Register} />
        <ProtectedRoute users={users} path="/booking/:carid" exact component={BookingCar} />
        <ProtectedRoute users={users} path="/userbookings" exact component={UserBookings} />
        <ProtectedRoute users={users} path="/addcar" exact component={AddCar} />
        <ProtectedRoute users={users} path="/editcar/:carid" exact component={EditCar} />

        <ProtectedRoute users={users} path="/admin" exact component={AdminHome} />
        {/* <ProtectedRoute path="/admin" exact component={AdminHome} /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;

// ###

export function ProtectedRoute (props, users) {
  console.log("line:110", props);
  console.log("line:111", props.users?.role);
  if (
    localStorage.getItem('user')
   && 
   props.users?.role === 'admin'  
   )
   {
    return <Route {...props} />;
  }
   if 
   (
    localStorage.getItem('user')
   )
    {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

// export function ProtectedRoute1 (props1, users) {
//   console.log("line:111", props1.users.role);
//   console.log("line:112", props1 );
//   if (props1.users.role === 'admin') {
//     return <Route {...props1} />;
//   } else {
//     return <Redirect to="/login" />;
//   }
// }

// ###


