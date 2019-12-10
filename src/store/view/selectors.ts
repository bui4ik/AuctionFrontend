interface InitialState {
  isSidebarOpen: boolean,
}

export const initialState: InitialState = {
  isSidebarOpen: true,
};

export const isSidebarOpenSelector = ({viewReducer}: any) => viewReducer.isSidebarOpen;
