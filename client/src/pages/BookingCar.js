import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsActions';
import Spinner from '../components/Spinner';
import { Col, Row, Divider, DatePicker, Checkbox, Modal } from 'antd';
import moment from 'moment';
import { bookCar } from '../redux/actions/bookingActions';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

const { RangePicker } = DatePicker;

function BookingCar({ match }) {
  const { users } = useSelector(state => state.usersReducer);
  const { cars } = useSelector(state => state.carsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  // const hoursCharged = totalHours + 1;
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(
    () => {
      if (cars.length === 0) {
        dispatch(getAllCars());
      } else {
        setcar(cars.find(o => o._id === match.params.carid));
      }
    },
    [cars],
  );

  useEffect(
    () => {
      setTotalAmount(totalHours * car.rentPerHour);
      if (driver) {
        setTotalAmount(totalAmount + 30 * totalHours);
      }
    },
    [driver, totalHours],
  );

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format('MMM DD yyyy HH:mm'));
    setTo(moment(values[1]).format('MMM DD yyyy HH:mm'));

    setTotalHours(values[1].diff(values[0], 'hours'));
  }

  function onToken(token) {

    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem('user'))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));

  }

  return (
    <DefaultLayout users={users}>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: '90vh' }}
      >
        <Col style={{ marginTop: '20px' }} lg={14} sm={24} xs={24}>
          <img src={car.image} className="carimg2 bs1" />
        </Col>
        <Col style={{ display: 'contents' }} lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>Car Info</Divider>
          <div className='car-info' style={{ textAlign: '' }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per Hour /-</p>
            <p>Fuel Type : {car.fuelType} </p>
            <p>Capacity : {car.capacity} </p>
            <button
              style={{ display: 'auto', borderRadius: '20px', background:'orangered' }}
              className="btn1 mt-2"
              onClick={() => {
                setShowModal(true);
              }}
            >
              See Booked Slots
            </button>
          </div>
          {/* <Divider type="horizontal" dashed>Select Time Slots</Divider> */}
          <div style={{margin:'0px 10px'}} className='range-container'>
            <RangePicker
              style={{}}
              showTime={{ format: 'HH:mm' }}
              format="MMM DD yyyy HH:mm"
              onChange={selectTimeSlots}
            />
          </div>
          <br />
          {from &&
            to &&
            <div className='book-container'>
              <p>Total Hours : <b> {totalHours} </b></p>
              <p>Rent Per Hour : <b> {car.rentPerHour} </b></p>
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    setDriver(true);
                  } else {
                    setDriver(false);
                  }
                }}
              >
                Driver Required /- 30 per h
              </Checkbox>
              <h3>Total Amount : {totalAmount} </h3>
              <StripeCheckout
                shippingAddress
                token={onToken}
                currency='inr'
                amount={totalAmount * 100}
                stripeKey="pk_test_51MSB2wIlCEHks7DgasuuHAllQvZd4jicmn6wWE2y7PaMEKfZmA8EHRMYL0w7nwiQ3XX45OKlICGcX4VYbENIpHCp00hdOnSYPY"
              >
                <button className="btn1">Book Now</button>
              </StripeCheckout>
            </div>}
        </Col>
      </Row>
      {car.name &&
        <Modal
          visible={showModal}
          closable={false}
          footer={false}
          title="Booked time slots"
        >
          <div className="p-2">
            {car.bookedTimeSlots.map(slot => {
              return (
                <button key={car._id} className="btn1 mt-2">
                  {slot.from} - {slot.to}
                </button>
              );
            })}
            <div className="text-right mt-5" style={{ marginBottom: '100px' }}>
              <button
                style={{ marginBottom: '100px' }}
                className="btn1"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </Modal>}

    </DefaultLayout>
  );
}

BookingCar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      carid: PropTypes.string.isRequired,
    }),
  }),
};

export default BookingCar;
