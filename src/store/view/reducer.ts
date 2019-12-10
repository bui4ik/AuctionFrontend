import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
  payload: any;
}

const viewReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.TOGGLE_SIDEBAR_REQUEST: {
      return {
        ...state,
      };
    }
    case actions.TOGGLE_SIDEBAR_SUCCESS: {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      }
    }
    case actions.TOGGLE_SIDEBAR_FAILURE: {
      return {
        ...state,
        error: payload.error
      }
    }
    default: {
      return state;
    }
  }
};

export default viewReducer;
