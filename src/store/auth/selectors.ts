interface InitialState {
  isLoading: any,
  isAuthenticated : boolean,
  userId: string
  error: string,
  initializingUser: boolean,
  name: string,
  surname: string,
  email: string
}

const AuthenticationCheck = () => {
  const expTime = localStorage.getItem('expiration-time');
  const accessToken = localStorage.getItem('access-token');
  const refreshToken = localStorage.getItem('refresh-token');
  if (expTime && accessToken && refreshToken) {
    return Number(expTime) < Date.now();
  }
  return false;
};

export const initialState: InitialState = {
  isLoading: false,
  isAuthenticated: AuthenticationCheck(),
  userId: '',
  error: '',
  initializingUser: true,
  name: '',
  surname: '',
  email: '',
};

export const isLoadingSelector = ({authReducer}: any) => authReducer.isLoading;
export const isAuthenticatedSelector = ({authReducer}: any) => authReducer.isAuthenticated;
export const userIdSelector = ({authReducer}: any) => authReducer.userId;
export const errorSelector = ({authReducer}: any) => authReducer.error;
export const initializingUserSelector = ({authReducer}: any) => authReducer.initializingUser;
export const nameSelector = ({authReducer}: any) => authReducer.name;
export const surnameSelector = ({authReducer}: any) => authReducer.surname;
export const emailSelector = ({authReducer}: any) => authReducer.email;

