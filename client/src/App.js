// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';

// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    
    <Routes>
      
    <Route path='/' exact Component={Home} />
    <Route path='/login' exact Component={Login} />
    <Route path='/register' exact Component={Register} />
    <Route path='/bookingcar' exact Component={BookingCar} />

    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
