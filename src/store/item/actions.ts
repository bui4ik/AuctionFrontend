export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const GET_ALL_ITEMS_REQUEST = 'GET_ALL_ITEMS_REQUEST';
export const GET_ALL_ITEMS_SUCCESS = 'GET_ALL_ITEMS_SUCCESS';
export const GET_ALL_ITEMS_FAILURE = 'GET_ALL_ITEMS_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const ADD_AUCTION_ITEM_REQUEST = 'ADD_AUCTION_ITEM_REQUEST';
export const ADD_AUCTION_ITEM_SUCCESS = 'ADD_AUCTION_ITEM_SUCCESS';
export const ADD_AUCTION_ITEM_FAILURE = 'ADD_AUCTION_ITEM_FAILURE';

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const UPDATE_ITEM_IMAGE_REQUEST = 'UPDATE_ITEM_IMAGE_REQUEST';
export const UPDATE_ITEM_IMAGE_SUCCESS = 'UPDATE_ITEM_IMAGE_SUCCESS';
export const UPDATE_ITEM_IMAGE_FAILURE = 'UPDATE_ITEM_IMAGE_FAILURE';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const GET_NOT_ON_AUCTION_ITEMS_REQUEST = 'GET_NOT_ON_AUCTION_ITEMS_REQUEST';
export const GET_NOT_ON_AUCTION_ITEMS_SUCCESS = 'GET_NOT_ON_AUCTION_ITEMS_SUCCESS';
export const GET_NOT_ON_AUCTION_ITEMS_FAILURE = 'GET_NOT_ON_AUCTION_ITEMS_FAILURE';

export const BUY_ITEM_REQUEST = 'BUY_ITEM_REQUEST';
export const BUY_ITEM_SUCCESS = 'BUY_ITEM_SUCCESS';
export const BUY_ITEM_FAILURE = 'BUY_ITEM_FAILURE';

export const GET_ITEMS_ON_SALE_REQUEST = 'GET_ITEMS_ON_SALE_REQUEST';
export const GET_ITEMS_ON_SALE_SUCCESS = 'GET_ITEMS_ON_SALE_SUCCESS';
export const GET_ITEMS_ON_SALE_FAILURE = 'GET_ITEMS_ON_SALE_FAILURE';

export const getItemRequest = (id: any) => ({
  type: GET_ITEM_REQUEST,
  payload: { id },
});
export const getItemSuccess = (item: any) => ({
  type: GET_ITEM_SUCCESS,
  payload: { item },
});
export const getItemFailure = (error: string) => ({
  type: GET_ITEM_FAILURE,
  payload: { error },
});

export const getAllItemsRequest = (id: any) => ({
  type: GET_ALL_ITEMS_REQUEST,
  payload: { id }
});
export const getAllItemsSuccess = (items: any) => ({
  type: GET_ALL_ITEMS_SUCCESS,
  payload: { items }
});
export const getAllItemsFailure = (error: string) => ({
  type: GET_ALL_ITEMS_FAILURE,
  payload: { error }
});

export const addItemRequest = (newItem: any, history: any) => ({
  type: ADD_ITEM_REQUEST,
  payload: { newItem, history},
});
export const addItemSuccess = ({ item }: any) => ({
  type: ADD_ITEM_SUCCESS,
  payload: { item },
});
export const addItemFailure = (error: string) => ({
  type: ADD_ITEM_FAILURE,
  payload: { error },
});

export const addAuctionItemRequest = (newItem: any, newAuction: any, history: any) => ({
  type: ADD_AUCTION_ITEM_REQUEST,
  payload: { newItem, newAuction, history}
});
export const addAuctionItemSuccess = ({item, auction}: any) => ({
  type: ADD_AUCTION_ITEM_SUCCESS,
  payload: {item, auction}
});
export const addAuctionItemFailure = (error: string) => ({
  type: ADD_AUCTION_ITEM_FAILURE,
  payload: { error }
});


export const updateItemRequest = (id: any, newData: any) => ({
  type: UPDATE_ITEM_REQUEST,
  payload: { id, newData },
});
export const updateItemSuccess = (item : any) => ({
  type: UPDATE_ITEM_SUCCESS,
  payload: { item },
});
export const updateItemFailure = (error: string) => ({
  type: UPDATE_ITEM_FAILURE,
  payload: { error },
});

export const updateItemImageRequest = ( id: any ,image: any) => ({
  type: UPDATE_ITEM_IMAGE_REQUEST,
  payload: { id, image }
});
export const updateItemImageSuccess = ( item: any ) => ({
  type: UPDATE_ITEM_IMAGE_SUCCESS,
  payload: { item }
});
export const updateItemImageFailure = ( error: string ) => ({
  type: UPDATE_ITEM_IMAGE_FAILURE,
  payload: { error }
});


export const deleteItemRequest = (id: any, history: any) => ({
  type: DELETE_ITEM_REQUEST,
  payload: { id, history },
});
export const deleteItemSuccess = () => ({
  type: DELETE_ITEM_SUCCESS,
});
export const deleteItemFailure = (error: string) => ({
  type: DELETE_ITEM_FAILURE,
  payload: { error },
});

export const getNotOnAuctionItemsRequest = () => ({
  type: GET_NOT_ON_AUCTION_ITEMS_REQUEST,
});
export const getNotOnAuctionItemsSuccess = (items: any) => ({
  type: GET_NOT_ON_AUCTION_ITEMS_SUCCESS,
  payload: { items },
});
export const getNotOnAuctionItemsFailure = (error: string) => ({
  type: GET_NOT_ON_AUCTION_ITEMS_FAILURE,
  payload: { error },
});

export const buyItemRequest = (id: any, newData: any, history: any) => ({
  type: BUY_ITEM_REQUEST,
  payload: { id, newData, history }
});
export const buyItemSuccess = () => ({
  type: BUY_ITEM_SUCCESS
});
export const buyItemFailure = (error: string) => ({
  type: BUY_ITEM_FAILURE,
  payload: { error }
});

export const getItemsOnSaleRequest = (page: any) => ({
  type: GET_ITEMS_ON_SALE_REQUEST,
  payload: { page }
});
export const getItemsOnSaleSuccess = ( {items, count}: any ) => ({
  type: GET_ITEMS_ON_SALE_SUCCESS,
  payload: { items, count }
});
export const getItemsOnSaleFailure = ( error: string ) => ({
  type: GET_ITEMS_ON_SALE_FAILURE,
  payload: { error }
});
