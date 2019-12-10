interface InitialState {
  fetchingItem: boolean,
  detailedItem: any,
  fetchingAllItems: boolean,
  allItems: any,
  isLoading: boolean;
  creatingNewItem: boolean;
  creatingNewAuctionItem: boolean;
  fetchingItemsOnSale: boolean;
  itemsOnSale: any;
  itemsOnSaleCount: any;
  updatingItem: boolean;
  updatingItemImage: boolean;
  deletingItem: boolean;
  buyingItem: boolean;
  notOnAuctionItemsLoading: boolean;
  notOnAuctionItems: any;
}

export const initialState: InitialState = {
  fetchingItem: false,
  detailedItem: '',
  fetchingAllItems: false,
  allItems: {
    items: [],
    boughtItems: []
  },
  isLoading: false,
  creatingNewItem: false,
  creatingNewAuctionItem: false,
  fetchingItemsOnSale: false,
  itemsOnSale: [],
  itemsOnSaleCount: 0,
  updatingItem: false,
  updatingItemImage: false,
  deletingItem: false,
  buyingItem: false,
  notOnAuctionItemsLoading: false,
  notOnAuctionItems: []
};

export const fetchingItemSelector = ({ itemReducer }: any) => itemReducer.fetchingItem;
export const detailedItemSelector = ({ itemReducer }: any) => itemReducer.detailedItem;
export const fetchingAllItems = ({ itemReducer }: any) => itemReducer.fetchingAllItems;
export const activeItemsSelector = ({ itemReducer }: any) => itemReducer.allItems.items.filter(
  (item: any) => !item.isSold && item.onAuction === false,
);
export const onAuctionItemsSelector = ({ itemReducer }: any) => itemReducer.allItems.items.filter(
  (item: any) => !item.isSold && item.onAuction === true,
);
export const soldItemsSelector = ({ itemReducer }: any) => itemReducer.allItems.items.filter(
  (item: any) => item.isSold
);
export const boughtItems = ({ itemReducer }: any) => itemReducer.allItems.boughtItems;
export const isLoadingSelector = ({ itemReducer }: any) => itemReducer.isLoading;
export const notOnAuctionItemsLoadingSelector = ({ itemReducer }: any) => itemReducer.notOnAuctionItemsLoading;
export const notOnAuctionItemsSelector = ({ itemReducer }: any) => itemReducer.notOnAuctionItems.filter((item: any)=> !item.isSold && item.forAuction === true);
export const updatingItemSelector = ({ itemReducer }: any) => itemReducer.updatingItem;
export const updatingItemImageSelector = ({ itemReducer }: any) => itemReducer.updatingItemImage;
export const fetchingItemsOnSaleSelector = ({itemReducer}: any) => itemReducer.fetchingItemsOnSale;
export const itemsOnSaleSelector = ({itemReducer}: any) => itemReducer.itemsOnSale;
export const itemsOnSaleCountSelector = ({itemReducer}: any) => itemReducer.itemsOnSaleCount;
