import {ActionType} from '../action/ActionType';

const initialState = {
  userInfo: {
    email: '',
    mobileno: '',
    firstname: '',
    lastname: '',
    companyname: '',
    jobtitle: '',
  },
};

const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.USER_DETAILS:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userInfo: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
