import {ActionType} from './ActionType';

export const userFullInfo = user => ({
  type: ActionType.USER_DETAILS,
  payload: user,
});

export const userDevelopment = user => ({
  type: ActionType.USER_DEVELOPMENT,
  payload: user,
});

export const userDepartment = user => ({
  type: ActionType.USER_DEPARTMENT,
  payload: user,
});
export const userInfoData = (email, phone) => ({
  type: ActionType.USER_INFO_DATA,
  payload: {email, phone},
});
export const userName = (firstname, lastname) => ({
  type: ActionType.USER_NAME,
  payload: {firstname, lastname},
});
export const userCompanyData = (companyName, jobTitle) => ({
  type: ActionType.USER_COMPANY_DATA,
  payload: {companyName, jobTitle},
});

export const incProgressBar = () => ({
  type: ActionType.INCREASE_PROGRESS_BAR,
  //payload: user,
});

export const decProgressBar = () => ({
  type: ActionType.DECREASE_PROGRESS_BAR,
  //payload: user,
});

export const resetModal = user => ({
  type: ActionType.RESET_MODAL,
  payload: user,
});
