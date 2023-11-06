import './App.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/antd.min.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import ErrorPage from './pages/ErrorPage';

// ### State Drilling
import { useSelector } from 'react-redux';
import { UsersRoute } from './routers/UsersRoute';
import { AdminRoute } from './routers/AdminRoute';
import { PublicRoute } from './routers/PublicRoute';

function App() {
  const { users } = useSelector(state => state.usersReducer);

  return (
    <div className="App">

      <BrowserRouter>

        <AdminRoute users={users} path="/" exact component={Home} />
        <Route users={users} path="/login" exact component={Login} />
        <Route users={users} path="/register" exact component={Register} />
        <AdminRoute users={users} path="/booking/:carid" exact component={BookingCar} />
        <AdminRoute users={users} path="/userbookings" exact component={UserBookings} />
        <UsersRoute users={users} path="/userbookings" exact component={UserBookings} />
        <AdminRoute users={users} path="/addcar" exact component={AddCar} />
        <AdminRoute users={users} path="/editcar/:carid" exact component={EditCar} />
        <AdminRoute users={users} path="/auth/admin" exact component={AdminHome} >
        </AdminRoute>
        <UsersRoute users={users} path="/user/admin" exact component={ErrorPage} >
          <Redirect to="/" />
        </UsersRoute>
        <PublicRoute users={users} path="/admin" exact component={ErrorPage} >
          <Redirect to="/" />
        </PublicRoute>
      </BrowserRouter>

    </div>
  );
}

export default App;
