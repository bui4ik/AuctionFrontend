interface InitialState {
  name: string;
  surname: string;
  email: string;
  isLoading: boolean;
  items: any;
  isCommonInfoLoading: boolean,
  commonItems: any,
  commonAuctions: any
}

export const initialState: InitialState = {
  name: '',
  surname: '',
  email: '',
  isLoading: false,
  items: [],
  isCommonInfoLoading: false,
  commonItems: [],
  commonAuctions: []
};

export const nameSelector = ({ userReducer }: any) => userReducer.name;
export const surnameSelector = ({ userReducer }: any) => userReducer.surname;
export const emailSelector = ({ userReducer }: any) => userReducer.email;
export const isLoadingSelector = ({ userReducer }: any) => userReducer.isLoading;
export const itemsSelector = ({ userReducer }: any) => userReducer.items;
export const isCommonInfoLoadingSelector = ({ userReducer }: any) => userReducer.isCommonInfoLoading;
export const commonItemsSelector = ({ userReducer }: any) => userReducer.commonItems.filter((item: any) => !item.isSold);
export const commonAuctionsSelector = ({ userReducer }: any) => userReducer.commonAuctions;
