export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const INITIALIZE_USER_REQUEST = 'INITIALIZE_USER_REQUEST';
export const INITIALIZE_USER_SUCCESS = 'INITIALIZE_USER_SUCCESS';
export const INITIALIZE_USER_FAILURE = 'INITIALIZE_USER_FAILURE';

export const LOGOUT = 'LOGOUT';

export const signinRequest = (email: string, password: string) => ({
  type: SIGNIN_REQUEST,
  payload: { email, password },
});
export const signinSuccess = (userId: string) => ({
  type: SIGNIN_SUCCESS,
  payload: { userId },
});
export const signinFailure = (error: string) => ({
  type: SIGNIN_FAILURE,
  payload: { error },
});

export const initializeUserRequest = () => ({
  type: INITIALIZE_USER_REQUEST
});
export const initializeUserSuccess = ({id, name, surname, email}: any) => ({
  type: INITIALIZE_USER_SUCCESS,
  payload: { id, name, surname, email }
});
export const initializeUserFailure = (error: string) => ({
  type: INITIALIZE_USER_FAILURE,
  payload: error
});

export const logout = () => ({
  type: LOGOUT,
});
