import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import DefaultLayout from '../components/DefaultLayout';
import {getAllCars} from '../redux/actions/carsActions';
import Spinner from '../components/Spinner';
import {Col, Row, Divider, DatePicker, Checkbox, Modal} from 'antd';

import moment from 'moment';
import { bookCar } from '../redux/actions/bookingActions';

const {RangePicker} = DatePicker;

function BookingCar({match}) {
  const {cars} = useSelector (state => state.carsReducer);
  const {loading} = useSelector (state => state.alertsReducer);
  const [car, setcar] = useState ({});
  const dispatch = useDispatch ();
  const [from, setFrom] = useState ();
  const [to, setTo] = useState ();
  const [totalHours, setTotalHours] = useState (0);
  console.log ('line:100', totalHours);
  // ###
  const hoursCharged = totalHours + 1;
  console.log ('line:99', hoursCharged);
  // ###
  const [driver, setDriver] = useState (false);
  const [totalAmount, setTotalAmount] = useState (0);

  useEffect (
    () => {
      if (cars.length === 0) {
        dispatch (getAllCars ());
      } else {
        setcar (cars.find (o => o._id === match.params.carid));
      }
    },
    [cars]
  );

  useEffect(() => {

    setTotalAmount((totalHours * car.rentPerHour) )
    if(driver)
    {
      setTotalAmount(totalAmount + (30 * totalHours))
    }

  }, [driver, totalHours])
  

  function selectTimeSlots (values) {
    console.log (values);

    console.log ('line:110', moment (values[0]).format ('MMM DD yyyy HH'));
    console.log ('line:111', moment (values[1]).format ('MMM DD yyyy HH'));
    setFrom (moment (values[0]).format ('MMM DD yyyy HH'));
    setTo (moment (values[1]).format ('MMM DD yyyy HH'));

    setTotalHours (values[1].diff (values[0], 'hours'));
  }

  function bookNow() {

    const reqObj = {

      user : JSON.parse(localStorage.getItem('user'))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequire : driver, 
      bookedTimeSlots : {
        from, 
        to
      }

    }

    dispatch(bookCar(reqObj))

  }

  // const [value, setValue] = useState([]);

  return (
    <DefaultLayout>

      {loading && <Spinner />}

      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{minHeight: '90vh'}}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className="carimg2 bs1" />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>Car Info</Divider>

          <div style={{textAlign: 'right'}}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per Hour /-</p>
            <p>Fuel : {car.fuelType} </p>
            <p>Capacity : {car.capacity} </p>
          </div>

          <Divider type="horizontal" dashed>Select Time Slots</Divider>

          <RangePicker
            showTime={{format: 'HH'}}
            format="MMM DD yyyy HH"
            onChange={selectTimeSlots}
          />

          <div>
            <p>Total Hours : <b> {totalHours} </b></p>
            <p>Rent Per Hour : <b> {car.rentPerHour} </b></p>
            <Checkbox onChange={(e) => {
              if(e.target.checked)
              {
                setDriver(true)
              }
              else{
                setDriver(false)
              }
            } }>Driver Required /- 30 per h</Checkbox>

            <h3>Total Amount : {totalAmount} </h3>

            <button onClick={bookNow} className='btn1'>Book Now</button>

            {/* {hoursCharged} Total Hours */}
          </div>
        </Col>
      </Row>

    </DefaultLayout>
  );
}

export default BookingCar;
