import { ActionType } from '../action/ActionType';

const initialState = {

  userDevelopment: '',
  userDepartment: '',

  userInfoData: {
    email: '',
    phone: '',
  },
  userName: {
    firstname: '',
    lastname: '',
  },
  userCompanyData: {
    companyName: '',
    jobTitle: '',
  },

};


const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.USER_DEVELOPMENT:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userDevelopment: payload,
      };
    case ActionType.USER_DEPARTMENT:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userDepartment: payload,
      };

    case ActionType.USER_INFO_DATA:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userInfoData: payload,
      };

    case ActionType.USER_NAME:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userName: payload,
      };

    case ActionType.USER_COMPANY_DATA:
      console.log('user details----->', action.payload);
      return {
        ...state,
        userCompanyData: payload,
      };



    default:
      return state;
  }
};

export default userReducer;
