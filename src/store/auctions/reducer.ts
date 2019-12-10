import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
  payload: any;
}

const authReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.CREATE_NEW_AUCTION_REQUEST: {
      return {
        ...state,
        creatingAuction: true,
      };
    }
    case actions.CREATE_NEW_AUCTION_SUCCESS: {
      return {
        ...state,
        creatingAuction: false,
      }
    }
    case actions.CREATE_NEW_AUCTION_FAILURE: {
      return {
        ...state,
        creatingAuction: false,
        error: payload.error
      }
    }
    case actions.GET_USER_AUCTIONS_REQUEST: {
      return {
        ...state,
        fetchingUserAuctions: true
      }
    }
    case actions.GET_USER_AUCTIONS_SUCCESS: {
      return {
        ...state,
        fetchingUserAuctions: false,
        userAuctions: payload.auctions
      }
    }
    case actions.GET_USER_AUCTIONS_FAILURE: {
      return {
        ...state,
        fetchingUserAuctions: false,
        error: payload.error
      }
    }
    case actions.GET_AUCTION_REQUEST: {
      return {
        ...state,
        auctionDetailedLoading: true,
      }
    }
    case actions.GET_AUCTION_SUCCESS: {
      return {
        ...state,
        auctionDetailedLoading: false,
        auctionDetailed: payload.auction
      }
    }
    case actions.GET_AUCTION_FAILURE: {
      return {
        ...state,
        auctionDetailedLoading: false,
        error: payload.error
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
