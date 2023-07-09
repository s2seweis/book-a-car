import axios from 'axios';
import {message} from 'antd';

export const bookCar = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
     await axios.post ('/api/bookings/bookcar');

    dispatch ({type: 'LOADING', payload: false});

    message.success ('You booked the car succesfully');
  } catch (error) {
    console.log ('line:1');
    dispatch ({type: 'LOADING', payload: false});
    message.error ('Somethin went wrong, please try later');
  }
};
