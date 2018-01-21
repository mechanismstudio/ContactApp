import axios from 'axios';
import * as types from '../types';

export const fetchUsers = () => {
   return async function(dispatch) {
      let res = await axios.get('/api');
      dispatch({ type: types.FETCH_USERS, payload: res.data });
   }
}

export const fetchEditUser = (id) => {
   return async function(dispatch) {
      let res = await axios.get(`/api/${id}`);
      dispatch({ type: types.FETCH_EDIT_USER, payload: res.data });
   }
}

export const editUser = (id, data) => {
   return async function(dispatch) {
      let res = await axios.put(`/api/${id}`, data);
      console.log(res)
   }
}
