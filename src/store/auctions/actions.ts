export const CREATE_NEW_AUCTION_REQUEST = 'CREATE_NEW_AUCTION_REQUEST';
export const CREATE_NEW_AUCTION_SUCCESS = 'CREATE_NEW_AUCTION_SUCCESS';
export const CREATE_NEW_AUCTION_FAILURE = 'CREATE_NEW_AUCTION_FAILURE';

export const GET_USER_AUCTIONS_REQUEST = 'GET_USER_AUCTIONS_REQUEST';
export const GET_USER_AUCTIONS_SUCCESS = 'GET_USER_AUCTIONS_SUCCESS';
export const GET_USER_AUCTIONS_FAILURE = 'GET_USER_AUCTIONS_FAILURE';

export const GET_AUCTION_REQUEST = 'GET_AUCTION_REQUEST';
export const GET_AUCTION_SUCCESS = 'GET_AUCTION_SUCCESS';
export const GET_AUCTION_FAILURE = 'GET_AUCTION_FAILURE';

export const createNewAuctionRequest = (auctionInfo: any, history: any) => ({
  type: CREATE_NEW_AUCTION_REQUEST,
  payload: { auctionInfo, history }
});
export const createNewAuctionSuccess = () => ({
  type: CREATE_NEW_AUCTION_SUCCESS,
});
export const createNewAuctionFailure = (error: string) => ({
  type: CREATE_NEW_AUCTION_FAILURE,
  payload: { error }
});

export const getUserAuctionsRequest = () => ({
  type: GET_USER_AUCTIONS_REQUEST
});
export const getUserAuctionSuccess = (auctions: any) => ({
  type: GET_USER_AUCTIONS_SUCCESS,
  payload: { auctions }
});
export const getUserAuctionFailure = (error: string) => ({
  type: GET_USER_AUCTIONS_FAILURE,
  payload: { error }
});

export const getAuctionRequest = (id: any) => ({
  type: GET_AUCTION_REQUEST,
  payload: { id }
});
export const getAuctionSuccess = (auction: any) => ({
  type: GET_AUCTION_SUCCESS,
  payload: { auction }
});
export const getAuctionFailure = (error: string) => ({
  type: GET_AUCTION_FAILURE,
  payload: { error }
});
