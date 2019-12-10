export const TOGGLE_SIDEBAR_REQUEST = 'TOGGLE_SIDEBAR_REQUEST';
export const TOGGLE_SIDEBAR_SUCCESS = 'TOGGLE_SIDEBAR_SUCCESS';
export const TOGGLE_SIDEBAR_FAILURE = 'TOGGLE_SIDEBAR_FAILURE';

export const toggleSidebarRequest = () => ({
  type: TOGGLE_SIDEBAR_REQUEST,
});
export const toggleSidebarSuccess = () => ({
  type: TOGGLE_SIDEBAR_SUCCESS,
});
export const toggleSidebarFailure = (error: string) => ({
  type: TOGGLE_SIDEBAR_FAILURE,
  payload: { error },
});
