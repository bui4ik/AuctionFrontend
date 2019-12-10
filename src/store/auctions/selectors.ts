interface InitialState {
  creatingAuction: boolean,
  fetchingUserAuctions: boolean,
  userAuctions: any
  error: string,
  auctionDetailedLoading: boolean,
  auctionDetailed: any
}

export const initialState: InitialState = {
  creatingAuction: false,
  fetchingUserAuctions: false,
  userAuctions: [],
  error: '',
  auctionDetailedLoading: false,
  auctionDetailed: {}
};

export const fetchingUserAuctionsSelector = ({auctionReducer}: any) => auctionReducer.fetchingUserAuctions;
export const activeAuctionsSelector = ({auctionReducer}: any) => auctionReducer.userAuctions.filter((auction: any) => auction.isCompleted === false);
export const completedAuctionsSelector = ({auctionReducer}: any) => auctionReducer.userAuctions.filter((auction: any) => auction.isCompleted === true);
export const auctionDetailedLoadingSelector =({auctionReducer}: any) => auctionReducer.auctionDetailedLoading;
export const auctionDetailedSelector = ({auctionReducer}: any) => auctionReducer.auctionDetailed;
