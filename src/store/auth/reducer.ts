import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
  payload: any;
}

const authReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userId: payload.userId
      }
    }
    case actions.SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error
      }
    }
    case actions.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        initializingUser: false
      }
    }
    case actions.INITIALIZE_USER_REQUEST: {
      return {
        ...state,
        initializingUser: true
      }
    }
    case actions.INITIALIZE_USER_SUCCESS: {
      return {
        ...state,
        initializingUser: false,
        userId: payload.id,
        name: payload.name,
        surname: payload.surname,
        email: payload.email
      }
    }
    case actions.INITIALIZE_USER_FAILURE: {
      return {
        ...state,
        initializingUser: false,
        error: payload.error
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
