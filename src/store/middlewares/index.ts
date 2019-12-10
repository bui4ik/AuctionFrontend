import { refreshTokens } from '../../api/requests/authentication';
import * as actions from '../auth/actions';

export const refreshTokensMiddleware = (store: any) => (next: any) => async (action: any) => {
  if (action.type.endsWith('_REQUEST')) {
    let accessToken = localStorage.getItem('access-token');
    const expirationTime = localStorage.getItem('expiration-time');
    if (!accessToken && !expirationTime) {
      return next(action);
    }
    // @ts-ignore
    const expiresIn = expirationTime * 1000 - Date.now();
    if (expiresIn < 0) return next(actions.logout());
    if (expiresIn < 120000 && expiresIn > 0) {
      try {
        const tokens: any = await refreshTokens();
        if (tokens.accessToken.accessToken !== undefined && tokens.refreshToken !== undefined) {
          localStorage.setItem('access-token', tokens.accessToken.accessToken);
          localStorage.setItem('refresh-token', tokens.refreshToken);
          localStorage.setItem('expiration-time', tokens.accessToken.expirationTime);
          console.log('new tokens were set');
        }
      } catch (e) {
        next(actions.logout());
      }
    }
  }
  console.log('Middleware triggered:', action);
  next(action);
};
