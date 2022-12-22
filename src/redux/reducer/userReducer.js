import {ActionType} from '../action/ActionType';

const initialState = {
  userDevelopment: '',
  userDepartment: '',
  progress: 0,

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
  const {type, payload} = action;

  switch (type) {
    case ActionType.USER_DEVELOPMENT:
      console.log('user development----->', action.payload);
      return {
        ...state,
        userDevelopment: payload,
      };
    case ActionType.USER_DEPARTMENT:
      console.log('user department----->', action.payload);
      return {
        ...state,
        userDepartment: payload,
      };

    case ActionType.USER_INFO_DATA:
      console.log('user details----->', payload);
      return {
        ...state,
        userInfoData: payload,
      };

    case ActionType.USER_NAME:
      console.log('user name----->', action.payload);
      return {
        ...state,
        userName: payload,
      };

    case ActionType.USER_COMPANY_DATA:
      console.log('user data----->', action.payload);
      return {
        ...state,
        userCompanyData: payload,
      };

    case ActionType.INCREASE_PROGRESS_BAR:
      console.log('user increasebar----->', action.payload);
      return {...state, progress: state.progress + 0.2};

    case ActionType.DECREASE_PROGRESS_BAR:
      console.log('user decreasebar----->', action.payload);
      return {...state, progress: state.progress - 0.2};

    case ActionType.RESET_MODAL:
      console.log('initial state---->', initialState);
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
