import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./auth/reducer";
import { refreshTokensMiddleware } from "./middlewares"
import viewReducer from "./view/reducer";
import userReducer from "./user/reducer";
import itemReducer from "./item/reducer";
import auctionReducer from "./auctions/reducer"

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const reducers = combineReducers<any>({
  authReducer: authReducer,
  viewReducer: viewReducer,
  userReducer: userReducer,
  itemReducer: itemReducer,
  auctionReducer: auctionReducer
});

const store = createStore(reducers, initialState , composeWithDevTools(
  applyMiddleware(refreshTokensMiddleware, sagaMiddleware )
));
sagaMiddleware.run(rootSaga);


export default store;
