export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const GET_COMMON_INFO_REQUEST = 'GET_COMMON_INFO_REQUEST';
export const GET_COMMON_INFO_SUCCESS = 'GET_COMMON_INFO_SUCCESS';
export const GET_COMMON_INFO_FAILURE = 'GET_COMMON_INFO_FAILURE';

export const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST,
});
export const getUserInfoSuccess = ({name, surname, email, items} : any) => ({
  type: GET_USER_INFO_SUCCESS,
  payload: {name, surname, email, items}
});
export const getUserInfoFailure = (error: string) => ({
  type: GET_USER_INFO_FAILURE,
  payload: { error },
});

export const getCommonInfoRequest = () => ({
  type: GET_COMMON_INFO_REQUEST
});

export const getCommonInfoSuccess = (items: any, auctions: any ) => ({
  type: GET_COMMON_INFO_SUCCESS,
  payload: { items, auctions }
});

export const getCommonInfoFailure = (error: string) => ({
  type: GET_COMMON_INFO_FAILURE,
  payload: { error }
});
