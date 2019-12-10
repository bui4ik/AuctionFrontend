import { initialState } from './selectors';
import * as actions from './actions';

interface Action {
  type: string;
  payload: any;
}

const itemReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actions.GET_ITEM_REQUEST: {
      return {
        ...state,
        fetchingItem: true,
      };
    }
    case actions.GET_ITEM_SUCCESS: {
      return {
        ...state,
        fetchingItem: false,
        detailedItem: payload.item
      };
    }
    case actions.GET_ITEM_FAILURE: {
      return {
        ...state,
        fetchingItem: false,
        error: payload.error,
      };
    }
    case actions.GET_ALL_ITEMS_REQUEST: {
      return {
        ...state,
        fetchingAllItems: true
      }
    }
    case actions.GET_ALL_ITEMS_SUCCESS: {
      return {
        ...state,
        fetchingAllItems: false,
        allItems: payload.items
      }
    }
    case actions.GET_ALL_ITEMS_FAILURE: {
      return {
        ...state,
        fetchingAllItems: false,
        error: payload.error
      }
    }
    case actions.ADD_ITEM_REQUEST: {
      return {
        ...state,
        creatingNewItem: true,
      };
    }
    case actions.ADD_ITEM_SUCCESS: {
      return {
        ...state,
        creatingNewItem: false,
      };
    }
    case actions.ADD_ITEM_FAILURE: {
      return {
        ...state,
        creatingNewItem: false,
        error: payload.error,
      };
    }
    case actions.ADD_AUCTION_ITEM_REQUEST: {
      return {
        ...state,
        creatingNewAuctionItem: true
      }
    }
    case actions.ADD_AUCTION_ITEM_SUCCESS: {
      return {
        ...state,
        creatingNewAuctionItem: false
      }
    }
    case actions.ADD_AUCTION_ITEM_FAILURE: {
      return {
        ...state,
        creatingNewAuctionItem: false,
        error: payload
      }
    }
    case actions.UPDATE_ITEM_REQUEST: {
      return {
        ...state,
        updatingItem: true,
      };
    }
    case actions.UPDATE_ITEM_SUCCESS: {
      return {
        ...state,
        updatingItem: false,
        detailedItem: payload.item
      };
    }
    case actions.UPDATE_ITEM_FAILURE: {
      return {
        ...state,
        updatingItem: false,
        error: payload.error
      }
    }
    case actions.UPDATE_ITEM_IMAGE_REQUEST: {
      return {
        ...state,
        updatingItemImage: true
      }
    }
    case actions.UPDATE_ITEM_IMAGE_SUCCESS: {
      return {
        ...state,
        updatingItemImage: false,
        detailedItem: payload.item
      }
    }
    case actions.UPDATE_ITEM_IMAGE_FAILURE: {
      return {
        ...state,
        updatingItemImage: false,
        error: payload.error
      }
    }
    case actions.DELETE_ITEM_REQUEST: {
      return {
        ...state,
        deletingItem: true,
      };
    }
    case actions.DELETE_ITEM_SUCCESS: {
      return {
        ...state,
        deletingItem: false,
      };
    }
    case actions.DELETE_ITEM_FAILURE: {
      return {
        ...state,
        deletingItem: false,
        error: payload.error,
      };
    }
    case actions.GET_NOT_ON_AUCTION_ITEMS_REQUEST: {
      return {
        ...state,
        notOnAuctionItemsLoading: true,
      };
    }
    case actions.GET_NOT_ON_AUCTION_ITEMS_SUCCESS: {
      return {
        ...state,
        notOnAuctionItemsLoading: false,
        notOnAuctionItems: payload.items,
      };
    }
    case actions.GET_NOT_ON_AUCTION_ITEMS_FAILURE: {
      return {
        ...state,
        notOnAuctionItemsLoading: false,
        error: payload.error,
      };
    }
    case actions.BUY_ITEM_REQUEST: {
      return {
        ...state,
        buyingItem: true
      }
    }
    case actions.BUY_ITEM_SUCCESS: {
      return {
        ...state,
        buyingItem: false
      }
    }
    case actions.BUY_ITEM_FAILURE: {
      return {
        ...state,
        buyingItem: false,
        error: payload.error
      }
    }
    case actions.GET_ITEMS_ON_SALE_REQUEST: {
      return {
        ...state,
        fetchingItemsOnSale: true
      }
    }
    case actions.GET_ITEMS_ON_SALE_SUCCESS: {
      return {
        ...state,
        fetchingItemsOnSale: false,
        itemsOnSale: payload.items,
        itemsOnSaleCount: payload.count
      }
    }
    case actions.GET_ITEMS_ON_SALE_FAILURE: {
      return {
        ...state,
        fetchingItemsOnSale: false,
        error: false
      }
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;
