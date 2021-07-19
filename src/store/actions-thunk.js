import axios from 'axios';

import * as actionTypes from './actions';

const DUMMY_API_DOMAIN = 'https://udemy-d36c3-default-rtdb.firebaseio.com';

export const fetchStudents = () => {
  return async (dispatch) => {
    const fetch = async () => {
      const response = await axios.get(`${DUMMY_API_DOMAIN}/students.json`);
      return response.data;
    };

    try {
      const data = await fetch();

      const students = [];
      for (const key in data) {
        students.push({
          id: key,
          lrn: data[key].lrn,
          deptName: data[key].deptName,
          name: data[key].name,
          contactNum: data[key].num,
          email: data[key].email,
          isPending: data[key].isPending,
        });
      }

      console.log(students);
      dispatch({ type: actionTypes.SET_STUDENTS, data: students });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBillings = () => {
  return async (dispatch) => {
    const fetch = async () => {
      const response = await axios.get(`${DUMMY_API_DOMAIN}/billings.json`);
      return response.data;
    };

    try {
      const data = await fetch();

      const billings = [];
      for (const key in data) {
        billings.push({
          paymentId: key,
          date: data[key].date,
          studentId: data[key].studentId,
          transactionType: data[key].transactionType,
          description: data[key].description,
          amount: data[key].amount,
          balance: data[key].balance,
        });
      }

      console.log(billings);
      dispatch({ type: actionTypes.SET_BILLINGS, data: billings });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBilling = (data) => {
  return async (dispatch) => {
    const postData = async () => {
      axios
        .post(`${DUMMY_API_DOMAIN}/billings.json`, data)
        .then((res) => {
          dispatch({
            type: actionTypes.ADD_BILLING,
            data: {
              paymentId: res.data.name,
              date: data.date,
              studentId: data.studentId,
              transactionType: data.transactionType,
              description: data.description,
              amount: data.amount,
              balance: data.balance,
            },
          });
        })
        .catch((err) => console.log(err));
    };

    await postData();
  };
};

export const deleteBilling = (id) => {
  return async (dispatch) => {
    const deleteData = async () => {
      axios
        .delete(`${DUMMY_API_DOMAIN}/billings/${id}.json`)
        .then((res) => {
          console.log(res);
          if (!res.status === 200) {
            return;
          }
          dispatch({ type: actionTypes.REMOVE_BILLING, data: id });
        })
        .catch((err) => console.log(err));
    };

    await deleteData();
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    const fetch = async () => {
      const response = await axios.get(`${DUMMY_API_DOMAIN}/events.json`);

      return response.data;
    };

    try {
      const data = await fetch();
      console.log(data);

      let events = [];

      for (const key in data) {
        events.push({
          id: key,
          title: data[key].title,
          start: data[key].start,
          end: data[key].end,
          allDay: data[key].allDay,
        });
      }

      dispatch({ type: actionTypes.SET_EVENTS, data: events });
    } catch (err) {
      console.log(err);
      console.log('There is a problem.');
    }
  };
};
