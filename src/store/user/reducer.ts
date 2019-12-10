import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
  payload: any;
}

const userReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.GET_USER_INFO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        items: payload.items
      }
    }
    case actions.GET_USER_INFO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload.error
      }
    }
    case actions.GET_COMMON_INFO_REQUEST: {
      return {
        ...state,
        isCommonInfoLoading: true
      }
    }
    case actions.GET_COMMON_INFO_SUCCESS: {
      return {
        ...state,
        isCommonInfoLoading: false,
        commonItems: payload.items,
        commonAuctions: payload.auctions
      }
    }
    case actions.GET_COMMON_INFO_FAILURE: {
      return {
        ...state,
        isCommonInfoLoading: false,
        error: payload.error
      }
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
