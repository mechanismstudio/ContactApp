import * as types from '../types';

export default (state = {}, action) => {
   switch(action.type) {
      case types.FETCH_EDIT_USER:
         return action.payload 
      default:
         return state;
   }
}
